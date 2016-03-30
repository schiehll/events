const stringsToObject = (strs : string[]) : Object => {
  return strs.reduce((finalObj, str) => {
    finalObj[str] = str
    return finalObj
  }, {})
}

export default stringsToObject