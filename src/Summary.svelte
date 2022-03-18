<script>
  export let item

  function stringToSlug(str) {
    str = str.replace(/^\s+|\s+$/g, '')
    str = str.toLowerCase()

    const from = 'àáäâèéëêìíïîòóöôùúüûñç·/_,:;'
    const to = 'aaaaeeeeiiiioooouuuunc------'
    for (let i = 0, l = from.length; i < l; i++) {
      str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i))
    }

    str = str
      .replace(/[^a-z0-9 -]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')

    return str
  }
</script>

<article>
  <header>
    <h2><a href="#/item/{stringToSlug(item.title)}">{item.title}</a></h2>
    <small>{item.date}</small>
  </header>
  <section>
    <p>
      {item.preview}
    </p>
  </section>
</article>

<style>
  article {
    margin-bottom: var(--spacing-8);
    margin-top: var(--spacing-8);
  }

  header {
    margin-bottom: var(--spacing-2);
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

  span {
    position: absolute;
    left: 0;
  }
  a {
    color: #333;
  }
</style>
