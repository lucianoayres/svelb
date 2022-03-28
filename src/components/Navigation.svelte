<script>
  export let page
  export let lastPage
  export let previousHref
  export let nextHref

  export let previousLabel = '← Prev Page'
  export let nextLabel = 'Next Page →'
</script>

<div class="post-list-navigation">
  {#if page > 1}
    <div>
      <a href={previousHref}>{previousLabel}</a>
    </div>
  {/if}

  {#if page != lastPage}
    <div>
      <a href={nextHref}>{nextLabel}</a>
    </div>
  {/if}
</div>
