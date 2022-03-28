import { POSTS_INDEX_API_URL, POSTS_API_URL } from '../constants'

async function read(url) {
  const data = await fetch(url)
  return data.json()
}

export async function queryItemByKey(keyName, keyValue) {
  const data = await read(POSTS_API_URL)
  const item = filterByKey(data, keyName, keyValue)
  return item ? item : false
}

export async function queryPaginatedData(currentPage, itemsPerPage) {
  const data = await read(POSTS_INDEX_API_URL)

  return {
    data: getPaginatedItems(data, currentPage, itemsPerPage),
    lastPageNumber: getLastPageNumber(data.length, itemsPerPage)
  }
}

function filterByKey(itemData, targetKey, keyValue) {
  return itemData.find((tItem) => tItem[targetKey] === keyValue)
}

function getPaginatedItems(itemsData, pageNumber, itemsPerPage) {
  return itemsData.slice(
    getPageFirstIndex(pageNumber, itemsPerPage),
    getPageLastIndex(itemsData.length, pageNumber, itemsPerPage)
  )
}

function getLastPageNumber(totalItems, itemsPerPage) {
  return Math.ceil(totalItems / itemsPerPage)
}

function getPageFirstIndex(pageNumber, itemsPerPage) {
  return (pageNumber - 1) * itemsPerPage
}

function getPageLastIndex(totalItems, pageNumber, itemsPerPage) {
  return itemsPerPage <= totalItems ? itemsPerPage * pageNumber : totalItems
}
