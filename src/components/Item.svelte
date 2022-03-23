<script>
  import Bio from './Bio.svelte'
  import Seo from './Seo.svelte'

  export let item
</script>

<Seo title={item.title + ' - ' + item.date + ' - ' + 'cloudpoint'} />

<article>
  <header>
    <h1>{item.title}</h1>
    <p class="post-meta">{item.date}</p>
  </header>

  <section class="post-content">
    {@html item.content}
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
