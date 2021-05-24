const checkValue = (value, avilableValue) => {
  if (Number.isNaN(value) || value > avilableValue || value < 1) return false
  return true
}
export default checkValue