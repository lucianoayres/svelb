<script>
  import { onMount } from 'svelte'
  import Layout from './components/Layout.svelte'
  import { PAGE_PATH, POST_PATH } from './constants'
  import {
    checkPathType,
    getPageNumber,
    getPath,
    getPostSlugFromPath,
    redirectToPage,
    scrollToTop
  } from './helpers'
  import { queryItemByKey } from './services/httpService'

  let content = {
    post: null,
    page: 1
  }

  async function hashChange() {
    const path = getPath()
    const isPost = checkPathType(path, POST_PATH)
    const isPage = checkPathType(path, PAGE_PATH)

    if (isPost) {
      const slugFromPath = getPostSlugFromPath(path, POST_PATH)
      content.post = await queryItemByKey('slug', slugFromPath)
      content.post ? scrollToTop() : alert('Article not found')
    } else if (isPage) {
      content.page = getPageNumber(path, PAGE_PATH)
      content.post = null
    } else {
      redirectToPage(1, PAGE_PATH)
    }
  }

  onMount(hashChange)
</script>

<svelte:window on:hashchange={hashChange} />
<Layout {...content} />
