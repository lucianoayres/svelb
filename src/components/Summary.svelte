<script>
  import { POST_PATH } from '../constants'
  import { stringToSlug } from '../helpers'
  export let item
</script>

<article>
  <header>
    <h2><a href="#{POST_PATH}/{stringToSlug(item.title)}">{item.title}</a></h2>
    <small>{item.date}</small>
  </header>
  <section>
    <p>
      {item.excerpt}
    </p>
  </section>
</article>

<style>
  article {
    margin-bottom: var(--spacing-8);
    margin-top: var(--spacing-8);
  }

  header {
    margin-bottom: var(--spacing-0);
  }

  section {
    font-size: var(--fontSize-2);
  }

  h2 {
    font-size: var(--fontSize-2);
    color: var(--color-primary);
    margin-bottom: var(--spacing-1);
    margin-top: var(--spacing-0);
  }
</style>
