<script>
  import { BLOG_NAME, POST_PATH } from '../constants'
  import Seo from './Seo.svelte'
  import PostNavigation from './PostNavigation.svelte'

  export let post
</script>

<Seo
  title={`${post.item.title} - ${post.item.date} - ${BLOG_NAME}`}
  description={post.item.excerpt}
/>

<article>
  <header>
    <h1>{post.item.title}</h1>
    <p class="post-meta">{post.item.date}</p>
  </header>

  <section>
    {@html post.item.content}
  </section>
  <hr />
</article>

<slot />

<PostNavigation
  previousLabel={post.previous?.title ? post.previous?.title : ''}
  previousHref={post.previous?.slug
    ? `#${POST_PATH}/${post.previous.slug}`
    : ''}
  nextLabel={post.next?.title ? post.next.title : ''}
  nextHref={post.next?.slug ? `#${POST_PATH}/${post.next.slug}` : ''}
/>

<style>
  article {
    margin-bottom: var(--spacing-8);
  }
  p.post-meta {
    font-size: var(--fontSize-2);
  }
</style>
