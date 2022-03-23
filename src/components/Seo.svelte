<script>
  export let title
  // document.title = title

  // document
  //   .querySelector('meta[name="description"]')
  //   .setAttribute('content', 'Hello World Description')

  // console.log(document.querySelector('meta[name="description"]'))

  function test() {
    console.log('Hello Test')
  }
</script>

<svelte:window on:beforeunload={test} />

<!-- <svelte:head>
  <title>{title}</title>
  <meta name="description" content="Updated Description" />
</svelte:head> -->
