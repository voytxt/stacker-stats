<script>
  import UsernameInput from '$lib/UsernameInput.svelte';

  export let data;
</script>

<svelte:head>
  <title>Stacker Stats: {data.map((user) => user.username.toUpperCase()).join(' vs ')}</title>
</svelte:head>

<main>
  <article class="legend">
    <div>Sprint (40L)</div>
    <div>Blitz</div>
  </article>

  {#each data as user}
    {@const sprint = user.tetrio?.records?.['40l']?.record?.endcontext?.finalTime}
    {@const blitz = user.tetrio?.records?.blitz?.record?.endcontext?.score}
    <article>
      <!-- svelte-ignore a11y-img-redundant-alt -->
      <img
        src="https://tetr.io/user-content/avatars/{user.tetrio?.user?._id}.jpg?rv={user.tetrio?.user?.avatar_revision}"
        alt="Profile picture"
      />
      <h1>{user.username !== undefined ? user.username.toUpperCase() : 'ERROR'}</h1>

      <div>{sprint !== undefined ? Math.floor(sprint) / 1000 : 'ERROR'}</div>
      <div>{blitz ?? 'ERROR'}</div>
    </article>
  {/each}

  <article>
    <div class="image">+</div>
    <UsernameInput prefix={data.map((user) => user.username).join('/') + '/'} />
  </article>
</main>

<style>
  main {
    display: flex;
    gap: 4rem;
  }

  .legend {
    border: none;
    align-self: flex-end;
  }

  .legend div {
    border-color: transparent;
  }

  article {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  img,
  .image {
    width: 200px;
    height: 200px;
    border-radius: 16px;
    border: 3px solid white;
  }

  .image {
    padding: 0;
    text-align: center;
    vertical-align: middle;
    line-height: 200px;
    font-size: 3rem;
    color: gray;
    border-color: gray;
    user-select: none;
  }

  h1 {
    line-height: 0;
  }

  div {
    padding: 1rem;
    border-radius: 10px;
    border: 3px solid white;
    position: relative;
  }
</style>
