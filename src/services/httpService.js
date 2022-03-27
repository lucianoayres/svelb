export async function read(url) {
  let data = await fetch(url)
  return data.json()
}
