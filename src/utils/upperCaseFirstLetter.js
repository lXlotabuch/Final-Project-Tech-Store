const upperCaseFirstLetter = (string) => {
  const firstLetter = string[0].toUpperCase()
  const cuted = string.slice(1, string.length)
  return `${firstLetter}${cuted}`
}
export default upperCaseFirstLetter