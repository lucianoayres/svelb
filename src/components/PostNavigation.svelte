<script>
  export let previousHref
  export let nextHref

  export let previousLabel = '← Prev Post'
  export let nextLabel = 'Next Post →'
</script>

<div class="post-list-navigation">
  {#if previousHref}
    <div>
      <a href={previousHref}>{previousLabel}</a>
    </div>
  {/if}

  {#if nextHref}
    <div>
      <a href={nextHref}>{nextLabel}</a>
    </div>
  {/if}
</div>
