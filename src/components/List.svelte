<script>
  import Summary from './Summary.svelte'
  import Bio from './Bio.svelte'
  import Error from './Error.svelte'
  import Loading from './Loading.svelte'

  const PAGE_SIZE = 20
  export let page
  let items
  let lastPage
  let loadError = false

  $: fetch('./data/posts.json')
    .then((allPosts) => allPosts.json())
    .then((postsData) => {
      lastPage = Math.ceil(postsData.length / PAGE_SIZE)
      const startIndex = (page - 1) * PAGE_SIZE
      let pLimit = 0

      PAGE_SIZE <= postsData.length
        ? (pLimit = PAGE_SIZE * page)
        : (pLimit = postsData.length)

      items = postsData.slice(startIndex, pLimit)
      window.scrollTo(0, 0)
    })
    .catch((err) => {
      loadError = true
    })
</script>

<Bio />

{#if items}
  {#each items as item, i}
    <Summary {item} />
  {/each}

  {#if page > 1}
    <a href="#/page/{page - 1}">previous page</a>
  {/if}

  {#if page != lastPage}
    <a href="#/page/{page + 1}">next page</a>
  {/if}
{:else if loadError}
  <Error />
{:else}
  <Loading />
{/if}

{#if page > lastPage}
  {(window.location.href = '/')}
{/if}

<style>
  a {
    padding: 2em;
    display: block;
  }
</style>
