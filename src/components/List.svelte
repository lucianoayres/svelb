<script>
  import { POSTS_INDEX_API_URL, PAGE_PATH, POSTS_PER_PAGE } from '../constants'
  import { read } from '../services/httpService'
  import Seo from './Seo.svelte'
  import Summary from './Summary.svelte'
  import Bio from './Bio.svelte'
  import Error from './Error.svelte'
  import Loading from './Loading.svelte'

  export let page

  let items
  let lastPage
  let loadError = false

  $: read(POSTS_INDEX_API_URL)
    .then((postsData) => {
      lastPage = Math.ceil(postsData.length / POSTS_PER_PAGE)
      const startIndex = (page - 1) * POSTS_PER_PAGE
      let pLimit = 0

      POSTS_PER_PAGE <= postsData.length
        ? (pLimit = POSTS_PER_PAGE * page)
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
/>

<Bio />

{#if items}
  {#each items as item, i}
    <Summary {item} />
  {/each}

  <div class="post-list-navigation">
    {#if page > 1}
      <div>
        <a href="#{PAGE_PATH}/{page - 1}">{'← '}Prev Page</a>
      </div>
    {/if}

    {#if page != lastPage}
      <div>
        <a href="#{PAGE_PATH}/{page + 1}">Next Page{' →'}</a>
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
