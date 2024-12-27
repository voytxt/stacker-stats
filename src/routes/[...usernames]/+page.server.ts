import wretch from 'wretch';
import type { PageServerLoad } from './$types';

export const load = (async ({ params }) => {
  return {
    users: (await Promise.allSettled(params.usernames.split('/').map(fetchUser))).map((p) =>
      p.status === 'rejected' ? { ...p, reason: p.reason.toString() } : p,
    ),
  };
}) satisfies PageServerLoad;

async function fetchUser(username: string) {
  const tetrio = wretch('https://ch.tetr.io/api').resolve(async (r) => {
    const data = (await r.json()) as {
      success: boolean;
      error?: any;
      data?: User | Record;
    };

    if (!data.success || data.data === undefined) {
      throw data.error;
    }

    return data.data;
  });

  console.time(`=> Fetched ${username}`);

  const user = (await tetrio.get(`/users/${username}`)) as User;
  const sprint = (await tetrio.get(`/users/${username}/summaries/40l`)) as Record;
  const blitz = (await tetrio.get(`/users/${username}/summaries/blitz`)) as Record;

  console.timeEnd(`=> Fetched ${username}`);

  return {
    name: user.username,
    avatar: `https://tetr.io/user-content/avatars/${user._id}.jpg?rv=${user.avatar_revision}`,
    sprint: sprint.record.results.stats.finaltime ?? null,
    blitz: blitz.record.results.stats.score ?? null,
  };
}

type User = {
  _id: string;
  username: string;
  avatar_revision?: number;
};

type Record = {
  record: {
    results: {
      stats: {
        finaltime: number;
        score: number;
      };
    };
  };
};
