<script>
  export let previousHref = false
  export let nextHref = false

  export let previousLabel = '← Prev Post'
  export let nextLabel = 'Next Post →'
</script>

<div class="post-navigation">
  <ul>
    {#if previousHref}
      <li><a href={previousHref}>{`← ${previousLabel}`}</a></li>
    {/if}

    {#if nextHref}
      <li><a href={nextHref}>{`${nextLabel} →`}</a></li>
    {/if}
  </ul>
</div>
