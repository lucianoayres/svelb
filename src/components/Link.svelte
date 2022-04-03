<script>
  export let href
  export let label
  export let target = '_self'
</script>

<a {href} {target}>{label}</a>

<style>
  a {
    font-size: var(--fontSize-1);
  }
</style>
