<script>
  export let username;
  export let tetrio;

  $: sprint = tetrio?.records?.['40l']?.record?.endcontext?.finalTime;
  $: blitz = tetrio?.records?.blitz?.record?.endcontext?.score;
</script>

<!-- svelte-ignore a11y-img-redundant-alt -->
<img src="https://tetr.io/user-content/avatars/{tetrio?.user?._id}.jpg?rv={tetrio?.user?.avatar_revision}" alt="Profile picture" />
<h1>{username.toUpperCase()}</h1>

<div>40L: {sprint !== undefined ? Math.floor(sprint) / 1000 : 'ERROR'}</div>
<div>Blitz: {blitz ?? 'ERROR'}</div>
