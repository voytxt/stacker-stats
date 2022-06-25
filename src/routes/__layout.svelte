<script>
  import UsernameInput from '$lib/UsernameInput.svelte';
</script>

<nav>
  <a href="/">Stacker Stats</a>

  <UsernameInput />
</nav>

<slot />

<footer>
  <small>
    &copy; {new Date().getFullYear()} Vojta | <a href="https://github.com/vojta-dev/stacker-stats">GitHub</a> | Colors from
    <a href="https://tailwindcss.com/docs/customizing-colors#color-palette-reference">Tailwind</a>
  </small>
</footer>

<style>
  :global(body) {
    margin: 0;
    background-color: black;
    color: white;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    height: 100vh;
    display: flex;
    position: relative;
    flex-direction: column;
    max-width: 80vw;
    margin: auto;
    align-items: center;
    justify-content: center;
    text-align: center;
  }

  nav {
    position: absolute;
    top: 0;
    left: 0;
    margin: 1rem;
    display: flex;
    justify-content: space-between;
    width: 100%;
  }

  nav a {
    color: white;
    text-decoration: none;
  }

  footer {
    position: absolute;
    text-align: center;
    bottom: 1rem;
    width: 100%;
  }

  footer a {
    color: #60a5fa;
    text-decoration: none;
  }
</style>
