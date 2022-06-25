<script>
  import { goto } from '$app/navigation';

  let username = '';

  function handleKeydown(event) {
    if (event.key === 'Enter') {
      goto(`/u/${username}`);
      username = '';
    }
  }
</script>

<input on:keydown={handleKeydown} bind:value={username} type="text" placeholder="Enter TETR.IO or Jstris username" size="30" />
