<script lang="ts">
  const { children } = $props();
</script>

<div>
  <a href="/"><h1>Stacker Stats</h1></a>
  {@render children()}
</div>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Inter&display=swap');

  :root {
    color-scheme: dark;
  }

  :global(body) {
    margin: 0;
    font-family: 'Inter', sans-serif;
    background-color: black;
    color: white;
  }

  div {
    height: 100vh;
    display: flex;
    flex-direction: column;

    a {
      text-align: center;
      color: white;
      text-decoration: none;
    }
  }
</style>
