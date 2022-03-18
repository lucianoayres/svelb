<script>
  import { onMount } from 'svelte'
  import List from './List.svelte'
  import Item from './Item.svelte'

  let item
  let page

  async function hashchange() {
    const path = window.location.hash.slice(1)

    if (path.startsWith('/item')) {
      const id = path.slice(6)

      let selectedItem = await fetch('./data/items.json').then((allItemsData) =>
        allItemsData.json()
      )

      item = selectedItem.find((tItem) => tItem.id === +id)

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
    <h4><a href="#/page/{page}">dev.log</a></h4>
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
