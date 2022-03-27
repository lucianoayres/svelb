<script>
  import {
    AUTHOR_GITHUB_URL,
    AUTHOR_LINKEDIN_URL,
    SOURCE_CODE_URL,
    POSTS_API_URL,
    POST_PATH,
    PAGE_PATH
  } from './constants'

  import { onMount } from 'svelte'

  import List from './components/List.svelte'
  import Post from './components/Post.svelte'
  import Logo from './components/Logo.svelte'
  import Footer from './components/Footer.svelte'

  import {
    getPath,
    checkPathType,
    getPageNumber,
    getPostSlugFromPath,
    filterByKey,
    scrollToTop,
    redirectToPage
  } from './helpers'

  import { read } from './services/httpService'

  let post
  let page = 1

  async function hashChange() {
    const path = getPath()
    const isPost = checkPathType(path, POST_PATH)
    const isPage = checkPathType(path, PAGE_PATH)

    if (isPost) {
      const slug = getPostSlugFromPath(path, POST_PATH)
      let allPostsData = await read(POSTS_API_URL)
      post = filterByKey(allPostsData, 'slug', slug)
      post ? scrollToTop() : alert('Article not found')
    } else if (isPage) {
      page = getPageNumber(path, PAGE_PATH)
      post = null
    } else {
      redirectToPage(1, PAGE_PATH)
    }
  }

  onMount(hashChange)
</script>

<svelte:window on:hashchange={hashChange} />
<div class="global-wrapper">
  <div class="main-content-wrapper">
    {#if post}
      <header class="global-header">
        <Logo size="small" link="#{PAGE_PATH}/{page}" />
      </header>
      <main>
        <Post {post} />
      </main>
    {:else if page}
      <header class="global-header">
        <Logo size="big" link="/" />
      </header>
      <main>
        <List {page} />
      </main>
    {/if}
  </div>
  <Footer
    gitHubUrl={AUTHOR_GITHUB_URL}
    linkedInUrl={AUTHOR_LINKEDIN_URL}
    sourceCodeUrl={SOURCE_CODE_URL}
  />
</div>
