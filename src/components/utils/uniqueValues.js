export const getUniqueValues = (data, type) => {
  let values = data.map((x) => x[type])
  if (type === 'colors') {
    values = values.flat()
  }
  let uniqueValues = ['all', ...new Set(values)]
  return uniqueValues
}
