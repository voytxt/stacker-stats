export async function GET({ params: { username } }) {
  const get = async (url) => await (await fetch(url))?.json();

  const tetrioInfo = (await get(`https://ch.tetr.io/api/users/${username}`))?.data;
  const tetrioRecords = (await get(`https://ch.tetr.io/api/users/${username}/records`))?.data;
  // const jstrisSprint = (await get(`https://jstris.jezevec10.com/api/u/${username}/records/1?mode=1&`))?.min;

  if (1) {
    return {
      status: 200,
      body: { username, tetrio: { ...tetrioInfo, ...tetrioRecords } },
    };
  }

  return {
    status: 404,
  };
}
