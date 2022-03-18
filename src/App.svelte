<script>
  import { onMount } from 'svelte'
  import List from './List.svelte'
  import Item from './Item.svelte'

  let item
  let page

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

  async function hashchange() {
    const path = window.location.hash.slice(1)

    if (path.startsWith('/item')) {
      const slug = stringToSlug(path.slice(6))

      let selectedItem = await fetch('./data/items.json').then((allItemsData) =>
        allItemsData.json()
      )

      item = selectedItem.find((tItem) => tItem.slug === slug)

      item ? window.scrollTo(0, 0) : alert('Article not found')
    } else if (path.startsWith('/page')) {
      page = +path.slice(6)
      item = null
    } else {
      window.location.hash = '/page/1'
    }
  }

  onMount(hashchange)
</script>

<svelte:window on:hashchange={hashchange} />

<main>
  {#if item}
    <h4><a href="#/page/{page ?? 1}">dev.log</a></h4>
    <Item {item} />
  {:else if page}
    <h2><a href="/">dev.log</a></h2>
    <List {page} />
  {/if}
</main>

<style>
  main {
    position: relative;
    max-width: 800px;
    margin: 0 auto;
    min-height: 101vh;
    padding: 1em;
  }

  /* main :global(.meta) {
    color: #999;
    font-size: 12px;
    margin: 0 0 1em 0;
  } */

  main :global(a) {
    color: var(--color-primary);
  }
</style>
