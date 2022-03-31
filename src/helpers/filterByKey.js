export function filterByKey(itemData, targetKey, keyValue) {
  //return itemData.find((tItem) => tItem[targetKey] === keyValue)
  let item = null
  let previous = null
  let next = null
  let linkProperty = ['slug']

  const itemIndex = itemData.findIndex((tItem) => tItem[targetKey] === keyValue)

  if (itemIndex !== -1) {
    item = itemData[itemIndex]
    if (itemIndex > 0) {
      previous = itemData[itemIndex - 1][linkProperty]
    }

    if (itemIndex < itemData.length - 1) {
      next = itemData[itemIndex + 1][linkProperty]
    }

    return {
      item,
      previous,
      next
    }
  }
  return false
}
