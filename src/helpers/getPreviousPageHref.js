export function getPreviousPageHref(pagePath, pageNumber) {
  return `#${pagePath}/${pageNumber - 1}`
}
