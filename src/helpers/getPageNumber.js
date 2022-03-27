export function getPageNumber(path, pagePath) {
  return +path.slice(pagePath.length + 1)
}
