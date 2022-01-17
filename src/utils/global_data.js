const globalData = {
  userInfo: null,
  isLogin: false,
  location: null,
  destination: null,
  phoneNumber: ''
}
export function set (key, val) {
  globalData[key] = val
}

export function get (key) {
  return globalData[key]
}