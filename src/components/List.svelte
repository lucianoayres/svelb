<script>
  import {
    BLOG_DESCRIPTION,
    BLOG_MAIN_PAGE_TITLE,
    PAGE_PATH,
    POSTS_PER_PAGE,
    LOAD_DATA_ERROR_TITLE,
    LOAD_DATA_ERROR_MESSAGE,
    PAGE_NOT_FOUND_ERROR_TITLE,
    PAGE_NOT_FOUND_ERROR_MESSAGE
  } from '../constants'

  import Error from './Error.svelte'
  import Loading from './Loading.svelte'
  import PageNavigation from './PageNavigation.svelte'
  import Seo from './Seo.svelte'
  import Summary from './Summary.svelte'
  import Link from './Link.svelte'

  import { queryPaginatedData } from '../services/httpService'
  import { getNextPageHref, getPreviousPageHref, scrollToTop } from '../helpers'

  export let page

  let posts
  let lastPage
  let loadError = false
  let invalidPageError = false

  $: queryPaginatedData(page, POSTS_PER_PAGE)
    .then((paginatedData) => {
      const { data, lastPageNumber } = paginatedData
      posts = data
      lastPage = lastPageNumber
      page > lastPage ? (invalidPageError = true) : false
      scrollToTop()
    })
    .catch((err) => {
      loadError = true
    })
</script>

<Seo title={BLOG_MAIN_PAGE_TITLE} description={BLOG_DESCRIPTION} />

{#if loadError}
  <Error title={LOAD_DATA_ERROR_TITLE} message={LOAD_DATA_ERROR_MESSAGE} />
{:else if invalidPageError}
  <Error
    title={PAGE_NOT_FOUND_ERROR_TITLE}
    message={PAGE_NOT_FOUND_ERROR_MESSAGE}
  />
  <Link href="/" label="← Back to Home" />
{:else if posts}
  {#each posts as post}
    <Summary {post} />
  {/each}
  <PageNavigation
    {page}
    {lastPage}
    previousHref={getPreviousPageHref(PAGE_PATH, page)}
    nextHref={getNextPageHref(PAGE_PATH, page)}
  />
{:else}
  <Loading />
{/if}
