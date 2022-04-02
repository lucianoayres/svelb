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

  let content = {}

  $: content = {
    post: null,
    page: 1
  }

  $: postNotFound = postNotFound

  async function hashChange() {
    const path = getPath()
    const isPost = checkPathType(path, POST_PATH)
    const isPage = checkPathType(path, PAGE_PATH)

    if (isPost) {
      const slugFromPath = getPostSlugFromPath(path, POST_PATH)
      content.post = await queryItemByKey('slug', slugFromPath)
      content.post ? scrollToTop() : redirectToPage(1, PAGE_PATH)
    } else if (isPage) {
      content.page = getPageNumber(path, PAGE_PATH)
      content.post = null
      console.log('isPage = true')
    } else {
      console.log('Redirecting to home page')
      redirectToPage(1, PAGE_PATH)
    }
  }

  onMount(hashChange)
</script>

<svelte:window on:hashchange={hashChange} />

<Layout {...content} />
