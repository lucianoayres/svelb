<script>
  import { PAGE_PATH } from '../constants'
  import Footer from './Footer.svelte'
  import Bio from './Bio.svelte'
  import List from './List.svelte'
  import Logo from './Logo.svelte'
  import Post from './Post.svelte'

  export let post
  export let page = 1

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
      {#if post}
        <Post {post} />
        <Bio />
      {:else if page}
        <Bio />
        <List {page} />
      {/if}
    </main>
  </div>
  <Footer />
</div>
