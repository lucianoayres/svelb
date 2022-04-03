<script>
  export let title = ''
  export let message = ''
</script>

<div class="error-container">
  <div>
    <h4>{title}</h4>
    <p>{message}</p>
    <slot />
  </div>
</div>

<style>
  h4 {
    margin-bottom: var(--spacing-4);
  }
  .error-container {
    display: flex;
    flex-direction: column;
  }
</style>
