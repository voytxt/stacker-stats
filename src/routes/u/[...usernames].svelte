<script>
  import { goto } from '$app/navigation';
  import UsernameInput from '$lib/UsernameInput.svelte';

  export let data;

  function removeUser(username) {
    // data = data.filter((user) => user.username !== username);
    console.log('removing', username);
    console.log(data.filter((user) => user.username !== username).map((user) => user.username));
    goto(
      '/u/' +
        data
          .filter((user) => user.username !== username)
          .map((user) => user.username)
          .join('/') +
        '/'
    );
  }
</script>

<svelte:head>
  <title>Stacker Stats: {data.map((user) => user.username.toUpperCase()).join(' vs ')}</title>
</svelte:head>

<main>
  <article class="legend">
    <div>Sprint</div>
    <div>Blitz</div>
  </article>

  {#each data as user}
    {@const sprint = user.tetrio?.records?.['40l']?.record?.endcontext?.finalTime}
    {@const blitz = user.tetrio?.records?.blitz?.record?.endcontext?.score}
    <article>
      <div class="image-wrapper" on:click={() => removeUser(user.username)}>
        <!-- svelte-ignore a11y-img-redundant-alt -->
        <img
          src="https://tetr.io/user-content/avatars/{user.tetrio?.user?._id}.jpg?rv={user.tetrio?.user?.avatar_revision}"
          alt="Profile picture"
        />
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
          <path
            fill-rule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clip-rule="evenodd"
          />
        </svg>
      </div>
      <h1>{user.username.toUpperCase()}</h1>

      <div class="border">{sprint !== undefined ? Math.floor(sprint) / 1000 : 'ERROR'}</div>
      <div class="border">{blitz ?? 'ERROR'}</div>
    </article>
  {/each}

  <article>
    <div class="image">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
        <path
          fill-rule="evenodd"
          d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
          clip-rule="evenodd"
        />
      </svg>
    </div>
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
    border: 3px solid transparent;
    text-align: right;
  }

  article {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 206px;
  }

  .image-wrapper {
    padding: 0;
    position: relative;
    width: 206px;
    height: 206px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .image-wrapper img {
    position: absolute;
    top: 0;
    left: 0;
  }

  .image-wrapper svg {
    font-family: sans-serif;
    width: 40px;
    height: 40px;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    margin: auto;
    opacity: 0;
  }

  img,
  .image {
    width: 200px;
    height: 200px;
    border-radius: 16px;
    border: 3px solid white;
  }

  img:hover + svg,
  svg:hover {
    opacity: 1;
  }

  .image {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    font-size: 3rem;
    color: gray;
    border-color: gray;
    user-select: none;
  }

  .image svg {
    width: 40px;
    height: 40px;
  }

  h1 {
    line-height: 0;
  }

  div {
    padding: 1rem;
    position: relative;
  }

  .border {
    border-radius: 10px;
    border: 3px solid white;
  }
</style>
