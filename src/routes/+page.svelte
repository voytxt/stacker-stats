<script lang="ts">
  import { goto } from '$app/navigation';

  let usernames = $state('');
</script>

<main>
  <form
    onsubmit={(e) => {
      e.preventDefault();
      goto(usernames.replaceAll(' ', '/'));
    }}
  >
    <!-- svelte-ignore a11y_autofocus -->
    <input bind:value={usernames} placeholder="Enter TETR.IO usernames" autofocus />
  </form>
</main>

<style>
  main {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  input {
    font-size: 3rem;
    font-family: inherit;
    outline: none;
    border: none;
    border-bottom: 4px solid #505050;
    padding: 4px 2px;
    background-color: inherit;
    width: 30ch;
  }
</style>
