// throw new Error(
//   '@migration task: Check if you need to migrate the load function input (https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292693)'
// );

export async function load({ params: { usernames }, fetch }) {
  const response = await fetch('/api/' + usernames);
  const data = await response.json();

  return { data };
}
