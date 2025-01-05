export const session = new Proxy({}, {
  get(_, k: string) {
    return sessionStorage.getItem(k)
  },
  set(_, k: string, v: never) {
    sessionStorage.setItem(k, v)
    return true
  },
  deleteProperty(_, k: string) {
    sessionStorage.removeItem(k)
    return true
  }
})
