const makeUrlFromConfig = (param) => {
  let paramStr = ''
  Object.keys(param).forEach((key, index) => {
    if (index === 0) {
      return paramStr += `${key}=${param[key]}`
    }
    return paramStr += `&${key}=${param[key]}`
  })
  return paramStr
}

export default makeUrlFromConfig