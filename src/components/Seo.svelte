<script>
  export let title = ''
  export let description = ''
  export let keywords = ''
  export let author = ''
  export let language = 'English'
  export let robots = 'index, follow'

  document.title = title

  addMetaTag('title', title)
  addMetaTag('description', description)
  addMetaTag('keywords', keywords)
  addMetaTag('author', author)
  addMetaTag('language', language)
  addMetaTag('robots', robots)

  function addMetaTag(name, content) {
    const meta = document.createElement('meta')

    const preExistingTag = document.querySelector(`[name=${name}]`)
    if (preExistingTag) preExistingTag.remove()

    meta['name'] = name
    meta['content'] = content
    document.getElementsByTagName('head')[0].appendChild(meta)
  }
</script>
