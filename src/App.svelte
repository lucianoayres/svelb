<script>
  import { onMount } from 'svelte'
  import List from './components/List.svelte'
  import Item from './components/Item.svelte'
  import Logo from './components/Logo.svelte'
  import Footer from './components/Footer.svelte'
  import { stringToSlug } from './helpers'

  let item
  let page

  async function hashChange() {
    const path = window.location.hash.slice(1)

    if (path.startsWith('/post')) {
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

  onMount(hashChange)
</script>

<svelte:window on:hashchange={hashChange} />

<main class="global-wrapper">
  {#if item}
    <Logo size="small" link="#/page/{page ?? 1}" />
    <Item {item} />
  {:else if page}
    <Logo size="big" link="/" />
    <List {page} />
  {/if}
  <Footer />
</main>

<style>
  main :global(a) {
    color: var(--color-primary);
  }
</style>
