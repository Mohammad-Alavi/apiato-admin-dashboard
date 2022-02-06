import lodash from 'lodash'

export const removeItemFromArray = (item, array) => {
  const index = lodash.findIndex(array, o => o.id === item.id)
  if (index >= 0) array.splice(index, 1)
}
