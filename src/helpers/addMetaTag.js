export function addMetaTag(name, content) {
  if (content) {
    const meta = document.createElement('meta')
    const preExistingTag = document.querySelector(`[name=${name}]`)

    if (preExistingTag) preExistingTag.remove()

    meta['name'] = name
    meta['content'] = content
    return document.getElementsByTagName('head')[0].appendChild(meta)
  }
  return false
}
