<script lang="ts">
  let { data } = $props();

  const users = data.users.filter((u) => u.status === 'fulfilled').map((u) => u.value);

  console.log(data);
</script>

<svelte:head>
  <title>{users.map((u) => u.name).join(', ')} - Stacker Stats</title>
</svelte:head>

<main>
  {#each users as user}
    <section>
      <img src={user.avatar} alt="{user.name}'s avatar" />
      <h2>{user.name}</h2>

      <div>{user.sprint !== null ? (user.sprint / 1000).toFixed(3) : '/'}</div>
      <div>{user.blitz !== null ? user.blitz.toLocaleString('cs') : '/'}</div>

      <a href="https://ch.tetr.io/u/{user.name}">View on TETR.IO</a>
    </section>
  {/each}
</main>

<style>
  main {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }

  section {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;

    img {
      width: 200px;
      height: 200px;
    }

    h2 {
      text-align: center;
      text-transform: uppercase;
      border: none;
    }

    div {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    img,
    div {
      border: 2px solid white;
      border-radius: 12px;
      width: 100%;
      text-align: center;
      min-height: 3rem;
    }

    a {
      color: white;
    }
  }
</style>
