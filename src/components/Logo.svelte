<script>
  export let size
  export let link
  const BLOG_NAME = 'cloudpoint'
</script>

{#if size === 'big'}
  <h1><a href={link}>{BLOG_NAME}</a></h1>
{:else}
  <h4><a href={link} class="post-page-logo-link">{BLOG_NAME}</a></h4>
{/if}

<style>
  .post-page-logo-link {
    color: var(--color-primary);
  }
</style>
