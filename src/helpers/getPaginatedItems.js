import { getPageFirstIndex } from './getPageFirstIndex'
import { getPageLastIndex } from './getPageLastIndex'

export function getPaginatedItems(itemsData, pageNumber, itemsPerPage) {
  return itemsData.slice(
    getPageFirstIndex(pageNumber, itemsPerPage),
    getPageLastIndex(itemsData.length, pageNumber, itemsPerPage)
  )
}
