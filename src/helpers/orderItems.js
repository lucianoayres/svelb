export function orderItems(data, orderBy) {
  if (orderBy === 'DESC') {
    return data.sort((a, b) => a.id < b.id)
  } else if (orderBy === 'ASC') {
    return data.sort((a, b) => a.id > b.id)
  }
  return false
}
