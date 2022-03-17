<script>
  export let item
</script>

<article>
  <h2><a href="#/item/{item.id}">{item.title}</a></h2>
  <p class="meta">
    {item.date}
  </p>
  <p>
    {item.preview}
  </p>
</article>

<style>
  article {
    position: relative;
    padding: 0 0 0 2em;
    border-bottom: 1px solid #eee;
  }

  h2 {
    font-size: 1em;
    margin: 0.5em 0;
  }

  span {
    position: absolute;
    left: 0;
  }

  a {
    color: #333;
  }
</style>
