import { stringToSlug } from './stringToSlug'

export function addSlugToAllItems(data) {
  return data.map((item) => {
    return { ...item, slug: stringToSlug(item.title) }
  })
}
