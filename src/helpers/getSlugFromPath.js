import { stringToSlug } from './stringToSlug.js'

export function getPostSlugFromPath(path, postPath) {
  return stringToSlug(path.slice(postPath.length + 1))
}
