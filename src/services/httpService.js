import { POSTS_API_URL } from '../constants'

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
  const data = await queryFilterByKeys([
    'id',
    'title',
    'slug',
    'excerpt',
    'date'
  ])

  return {
    data: getPaginatedItems(data, currentPage, itemsPerPage),
    lastPageNumber: getLastPageNumber(data.length, itemsPerPage)
  }
}

async function queryFilterByKeys(keys) {
  const data = await read(POSTS_API_URL)
  const result = []
  data.forEach((item) => {
    result.push(
      Object.fromEntries(
        Object.entries(item).filter(([key, _]) => keys.includes(key))
      )
    )
  })
  return result
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
