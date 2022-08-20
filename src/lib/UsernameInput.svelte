<script>
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();

  let input = '';
  $: usernames = input.split(' ');

  function handleKeydown(event) {
    if (event.key === 'Enter') {
      dispatch('submit', usernames);
      input = '';
    }
  }
</script>

<div>
  <input on:keydown={handleKeydown} bind:value={input} type="text" placeholder="Enter TETR.IO or Jstris usernames" size="30" />
</div>

<style>
  input {
    font-family: inherit;
  }
</style>
