export default{
  localStorage: {
    get (key) {
      return (JSON.parse(window.localStorage.getItem(key)))
    },
    set (key, data) {
      window.localStorage.setItem(key, JSON.stringify(data))
    },
    sets (data) {
      for (let key in data) {
        window.localStorage.setItem(key, JSON.stringify(data[key]))
      }
    },
    remove (key) {
      window.localStorage.removeItem(key)
    },
    clear () {
      window.localStorage.clear()
    }
  }
}
