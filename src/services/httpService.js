import { POSTS_API_URL } from '../constants'
import {
  addSlugToAllItems,
  filterByKey,
  getLastPageNumber,
  getPaginatedItems,
  orderItems
} from '../helpers'

async function read(url) {
  const data = await fetch(url)
  return data.json()
}

export async function queryItemByKey(keyName, keyValue) {
  const data = await read(POSTS_API_URL)
  const mutatedData = addSlugToAllItems(data)
  const item = filterByKey(mutatedData, keyName, keyValue)

  return item ? item : false
}

export async function queryPaginatedData(
  currentPage,
  itemsPerPage,
  keys = ['id', 'title', 'slug', 'excerpt', 'date'],
  order = 'DESC'
) {
  const data = await queryFilterByKeys(keys)

  const orderedData = orderItems(data, order)

  const mutatedData = addSlugToAllItems(orderedData)

  return {
    data: getPaginatedItems(mutatedData, currentPage, itemsPerPage),
    lastPageNumber: getLastPageNumber(mutatedData.length, itemsPerPage)
  }
}

export async function queryFilterByKeys(keys) {
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
