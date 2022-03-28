<script>
  import { PAGE_PATH } from '../constants'
  import Footer from './Footer.svelte'
  import Header from './Header.svelte'
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
      link: `#${PAGE_PATH}/${page}`
    }
  }

  $: post ? (contentType = 'post') : (contentType = 'page')
</script>

<div class="global-wrapper">
  <div class="main-content-wrapper">
    <Header>
      <Logo {...logoOptions[contentType]} />
    </Header>
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
