export function getPageLastIndex(totalItems, pageNumber, itemsPerPage) {
  return itemsPerPage <= totalItems ? itemsPerPage * pageNumber : totalItems
}
