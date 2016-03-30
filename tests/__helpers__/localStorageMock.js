const localStorageMock = () => {
  let storage = {}

  return {
    setItem: (key, value) => {
      storage[key] = value || ''
    },
    getItem: (key) => {
      return storage[key] || null
    },
    removeItem: (key) => {
      delete storage[key]
    }
  }
}

export default localStorageMock