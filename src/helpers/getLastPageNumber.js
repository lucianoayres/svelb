export function getLastPageNumber(totalItems, itemsPerPage) {
  return Math.ceil(totalItems / itemsPerPage)
}
