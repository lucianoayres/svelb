<script>
  import { onMount } from 'svelte'
  import Footer from './components/Footer.svelte'
  import List from './components/List.svelte'
  import Logo from './components/Logo.svelte'
  import Post from './components/Post.svelte'
  import { PAGE_PATH, POSTS_API_URL, POST_PATH } from './constants'
  import {
    checkPathType,
    filterByKey,
    getPageNumber,
    getPath,
    getPostSlugFromPath,
    redirectToPage,
    scrollToTop
  } from './helpers'
  import { read } from './services/httpService'

  let post
  let page = 1

  let logoSize = 'big'
  let logoLink = '/'

  async function hashChange() {
    const path = getPath()
    const isPost = checkPathType(path, POST_PATH)
    const isPage = checkPathType(path, PAGE_PATH)

    if (isPost) {
      const slugFromPath = getPostSlugFromPath(path, POST_PATH)
      let allPostsData = await read(POSTS_API_URL)
      post = filterByKey(allPostsData, 'slug', slugFromPath)
      post ? scrollToTop() : alert('Article not found')
      logoSize = 'small'
      logoLink = `#${PAGE_PATH}/${page}`
    } else if (isPage) {
      page = getPageNumber(path, PAGE_PATH)
      post = null
      logoSize = 'big'
      logoLink = '/'
    } else {
      redirectToPage(1, PAGE_PATH)
    }
  }

  onMount(hashChange)
</script>

<svelte:window on:hashchange={hashChange} />
<div class="global-wrapper">
  <div class="main-content-wrapper">
    <header class="global-header">
      <Logo size={logoSize} link={logoLink} />
    </header>
    <main>
      {#if post}
        <Post {post} />
      {:else if page}
        <List {page} />
      {/if}
    </main>
  </div>
  <Footer />
</div>
