<script>
  import Link from './Link.svelte'
  export let previousHref = false
  export let nextHref = false

  export let previousLabel = '← Prev Post'
  export let nextLabel = 'Next Post →'
</script>

<div class="post-navigation">
  <ul>
    {#if previousHref}
      <li><Link href={previousHref} label={`← ${previousLabel}`} /></li>
    {/if}

    {#if nextHref}
      <li><Link href={nextHref} label={`${nextLabel} →`} /></li>
    {/if}
  </ul>
</div>
