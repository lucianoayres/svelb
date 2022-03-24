<script>
  import Seo from './Seo.svelte'
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

<Seo
  title="Blog Main Page"
  description="Articles about coding and cloud technology"
  keywords="blog, coding, cloud, technology"
  language="English"
  author="Luciano Ayres"
/>

<Bio />

{#if items}
  {#each items as item, i}
    <Summary {item} />
  {/each}

  <div class="post-list-navigation">
    {#if page > 1}
      <div>
        <a href="#/page/{page - 1}">{'← '}Prev Page</a>
      </div>
    {/if}

    {#if page != lastPage}
      <div>
        <a href="#/page/{page + 1}">Next Page{' →'}</a>
      </div>
    {/if}
  </div>
{:else if loadError}
  <Error />
{:else}
  <Loading />
{/if}

{#if page > lastPage}
  {(window.location.href = '/')}
{/if}

<style>
</style>
