export function filterByKey(itemData, targetKey, keyValue) {
  let item = null
  let previous = null
  let next = null
  let titleProperty = ['title']
  let slugProperty = ['slug']

  const itemIndex = itemData.findIndex((tItem) => tItem[targetKey] === keyValue)

  if (itemIndex !== -1) {
    item = itemData[itemIndex]
    if (itemIndex > 0) {
      previous = {
        [titleProperty]: itemData[itemIndex - 1][titleProperty],
        [slugProperty]: itemData[itemIndex - 1][slugProperty]
      }
    }

    if (itemIndex < itemData.length - 1) {
      next = {
        [titleProperty]: itemData[itemIndex + 1][titleProperty],
        [slugProperty]: itemData[itemIndex + 1][slugProperty]
      }
    }

    return {
      item,
      previous,
      next
    }
  }
  return false
}
