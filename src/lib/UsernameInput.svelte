<script>
  import { goto } from '$app/navigation';

  let username = '';
  let navigating = false;

  function handleKeydown(event) {
    if (event.key === 'Enter') {
      goto(`/u/${username}`).then(() => {
        navigating = false;
        username = '';
      });

      navigating = true;
    }
  }
</script>

<div>
  <input on:keydown={handleKeydown} bind:value={username} type="text" placeholder="Enter TETR.IO or Jstris username" size="30" />

  {#if navigating} <div>Loading...</div> {/if}
</div>

<style>
  input {
    font-family: inherit;
  }
</style>
