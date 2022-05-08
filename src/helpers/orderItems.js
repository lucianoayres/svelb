export function orderItems(data, orderBy) {
  if (orderBy === 'ASC') {
    return data.sort((a, b) => a.id - b.id)
  } else if (orderBy === 'DESC') {
    return data.sort((a, b) => b.id - a.id)
  }
  return false
}
