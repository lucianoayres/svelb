<script>
  import Link from './Link.svelte'
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
      <Link href={previousHref} label={`${previousLabel}`} />
    </div>
  {/if}

  {#if page != lastPage}
    <div>
      <Link href={nextHref} label={`${nextLabel}`} />
    </div>
  {/if}
</div>
