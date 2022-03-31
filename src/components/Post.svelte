<script>
  import { BLOG_NAME, POST_PATH } from '../constants'
  import Seo from './Seo.svelte'
  import PostNavigation from './PostNavigation.svelte'

  // TODO: Fix 'post.item...' variables, to update all data in the 'Post' component,
  // without needing to 'post.item...'
  export let post

  const { item, previous, next } = post
  const { title, excerpt, date, content } = item

  const previousHref = previous ? `#${POST_PATH}/${previous}` : null
  const nextHref = next ? `#${POST_PATH}/${next}` : null

  const pageTitle = `${title} - ${date} - ${BLOG_NAME}`
</script>

<Seo title={pageTitle} description={post.item.excerpt} />

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

<PostNavigation {previousHref} {nextHref} />

<style>
  article {
    margin-bottom: var(--spacing-8);
  }
  p.post-meta {
    font-size: var(--fontSize-2);
  }
</style>
