<script>
  import Bio from './Bio.svelte'

  export let item
</script>

<article>
  <h1>{item.title}</h1>

  <p class="meta">{item.date}</p>
</article>

<div class="comments">
  {@html item.content}
</div>

<Bio />

<style>
  article {
    margin: 0 0 1em 0;
  }

  a {
    display: block;
    margin: 0 0 1em 0;
  }

  h1 {
    font-size: 1.4em;
    margin: 0;
  }
</style>
