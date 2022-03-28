<script>
  import { BLOG_NAME } from '../constants'
  import Seo from './Seo.svelte'

  export let post
  const { title, excerpt, date, content } = post

  const pageTitle = `${title} - ${date} - ${BLOG_NAME}`
</script>

<Seo title={pageTitle} description={excerpt} />

<article>
  <header>
    <h1>{title}</h1>
    <p class="post-meta">{date}</p>
  </header>

  <section class="post-content">
    {@html content}
  </section>
  <hr />
</article>

<style>
  article {
    margin-bottom: var(--spacing-8);
  }
  p.post-meta {
    font-size: var(--fontSize-2);
  }
</style>
