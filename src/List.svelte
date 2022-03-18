<script>
  import { beforeUpdate } from 'svelte'
  import Summary from './Summary.svelte'
  import Bio from './Bio.svelte'

  const PAGE_SIZE = 20
  export let page
  let items
  let lastPage

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
{:else}
  <p class="loading">loading...</p>
{/if}

{#if page > lastPage}
  {(window.location.href = '/')}
{/if}

<style>
  a {
    padding: 2em;
    display: block;
  }

  .loading {
    opacity: 0;
    animation: 0.4s 0.8s forwards fade-in;
  }

  @keyframes fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
</style>
