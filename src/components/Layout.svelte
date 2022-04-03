<script>
  import {
    PAGE_PATH,
    PAGE_NOT_FOUND_ERROR_TITLE,
    PAGE_NOT_FOUND_ERROR_MESSAGE
  } from '../constants'
  import Footer from './Footer.svelte'
  import Bio from './Bio.svelte'
  import List from './List.svelte'
  import Logo from './Logo.svelte'
  import Post from './Post.svelte'
  import Link from './Link.svelte'
  import Error from './Error.svelte'

  export let post
  export let page = 1
  export let postNotFound = false

  let contentType = 'page'

  const logoOptions = {
    page: {
      size: 'big',
      link: '/'
    },
    post: {
      size: 'small',
      link: null
    }
  }

  $: logoOptions.post.link = `#${PAGE_PATH}/${page}`
  $: post ? (contentType = 'post') : (contentType = 'page')
</script>

<div class="global-wrapper">
  <div class="main-content-wrapper">
    <header class="global-header">
      <Logo {...logoOptions[contentType]} />
    </header>
    <main>
      {#if postNotFound}
        <Bio />
        <Error
          title={PAGE_NOT_FOUND_ERROR_TITLE}
          message={PAGE_NOT_FOUND_ERROR_MESSAGE}
        />
        <Link href="/" label="← Back to Home" />
      {:else if post}
        <Post {post}>
          <Bio />
        </Post>
      {:else if page}
        <Bio />
        <List {page} />
      {/if}
    </main>
  </div>
  <Footer />
</div>
