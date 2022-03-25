<script>
  import { onMount } from 'svelte'
  import {
    AUTHOR_GITHUB_URL,
    AUTHOR_LINKEDIN_URL,
    SOURCE_CODE_URL
  } from './constants'
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
<div class="global-wrapper">
  <div class="main-content-wrapper">
    {#if item}
      <header class="global-header">
        <Logo size="small" link="#/page/{page ?? 1}" />
      </header>
      <main>
        <Item {item} />
      </main>
    {:else if page}
      <header class="global-header">
        <Logo size="big" link="/" />
      </header>
      <main>
        <List {page} />
      </main>
    {/if}
  </div>
  <Footer
    gitHubUrl={AUTHOR_GITHUB_URL}
    linkedInUrl={AUTHOR_LINKEDIN_URL}
    sourceCodeUrl={SOURCE_CODE_URL}
  />
</div>
