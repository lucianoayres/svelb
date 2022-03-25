<script>
  import { BLOG_NAME } from '../constants'

  import Bio from './Bio.svelte'
  import Seo from './Seo.svelte'

  export let item
  const { title, excerpt, date, content } = item

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

<Bio />

<style>
  article {
    margin-bottom: var(--spacing-8);
  }
  p.post-meta {
    font-size: var(--fontSize-2);
  }
</style>
