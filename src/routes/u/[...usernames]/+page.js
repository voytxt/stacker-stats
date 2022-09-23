export async function load({ params, fetch }) {
  const response = await fetch('/api/' + params.usernames);
  const users = await response.json();

  return { users };
}
