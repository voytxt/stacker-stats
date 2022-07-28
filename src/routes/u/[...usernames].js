export async function GET({ params: { usernames } }) {
  const get = async (url) => await (await fetch(url))?.json();

  const body = [];

  for (const username of usernames.split('/')) {
    const tetrioInfo = (await get(`https://ch.tetr.io/api/users/${username}`))?.data;
    const tetrioRecords = (await get(`https://ch.tetr.io/api/users/${username}/records`))?.data;
    // const jstrisSprint = (await get(`https://jstris.jezevec10.com/api/u/${username}/records/1?mode=1&`))?.min;

    body.push({
      username,
      tetrio: { ...tetrioInfo, ...tetrioRecords },
    });
  }

  return {
    body: {
      data: body,
    },
  };
}
