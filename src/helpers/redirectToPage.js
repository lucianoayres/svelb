export function redirectToPage(pageNumber, pagePath) {
  window.location.hash = `${pagePath}/${pageNumber}`
}
