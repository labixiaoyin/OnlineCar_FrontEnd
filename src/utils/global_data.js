import Taro from "@tarojs/taro"
const globalData = {
  userInfo: null,
  isLogin: false,
  location: null,
  destination: null,
  phoneNumber: '',
  token: Taro.getStorageSync('token') || ''
}
export function set (key, val) {
  globalData[key] = val
}

export function get (key) {
  return globalData[key]
}