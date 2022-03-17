<script>
  import Comment from './Comment.svelte'

  export let item
  export let returnTo
</script>

<a href={returnTo}>&laquo; back</a>

<article>
  <h1>{item.title}</h1>

  <p class="meta">{item.date}</p>
</article>

<div class="comments">
  {@html item.content}
</div>

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
