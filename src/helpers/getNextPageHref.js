export function getNextPageHref(pagePath, pageNumber) {
  return `#${pagePath}/${pageNumber + 1}`
}
