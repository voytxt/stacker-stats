<script context="module">
  export const load = ({ params: { username } }) => ({ props: { username } });
</script>

<script>
  export let username;
</script>

<h1>{username}</h1>

Hi {username}
