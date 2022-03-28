<script>
  import {
    BLOG_DESCRIPTION,
    BLOG_MAIN_PAGE_TITLE,
    PAGE_PATH,
    POSTS_PER_PAGE
  } from '../constants'

  import Error from './Error.svelte'
  import Loading from './Loading.svelte'
  import Navigation from './Navigation.svelte'
  import Seo from './Seo.svelte'
  import Summary from './Summary.svelte'

  import { queryPaginatedData } from '../services/httpService'
  import { getNextPageHref, getPreviousPageHref, scrollToTop } from '../helpers'

  export let page

  let posts
  let lastPage
  let loadError = false

  $: queryPaginatedData(page, POSTS_PER_PAGE)
    .then((paginatedData) => {
      const { data, lastPageNumber } = paginatedData
      posts = data
      lastPage = lastPageNumber
      scrollToTop()
    })
    .catch((err) => {
      loadError = true
    })
</script>

<Seo title={BLOG_MAIN_PAGE_TITLE} description={BLOG_DESCRIPTION} />

{#if posts}
  {#each posts as post}
    <Summary {post} />
  {/each}
  <Navigation
    {page}
    {lastPage}
    previousHref={getPreviousPageHref(PAGE_PATH, page)}
    nextHref={getNextPageHref(PAGE_PATH, page)}
  />
{:else if loadError}
  <Error />
{:else}
  <Loading />
{/if}

{#if page > lastPage}
  <!-- {  TODO: Add page not found } -->
  {(window.location.href = '/')}
{/if}
