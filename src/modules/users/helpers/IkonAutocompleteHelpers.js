export const filterUserByName = (item, queryText) => {
  let name = ''
  let haystack = ''

  if (item.name) {
    name = item.name.toLocaleLowerCase()
  }

  haystack = name

  return haystack.includes(queryText.toLocaleLowerCase())
}
