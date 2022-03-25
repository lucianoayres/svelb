<script>
  import { addMetaTag } from '../helpers'
  export let title = ''
  export let description = ''

  document.title = title

  addMetaTag('title', title)
  addMetaTag('description', description)
</script>
