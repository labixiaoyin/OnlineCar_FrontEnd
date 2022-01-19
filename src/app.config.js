export default {
  pages: [
    'pages/taxi/taxi',
    'pages/taxi/map/map',
    'pages/login/login',
    'pages/login/sign/sign',
    'pages/index/index',
    'pages/profile/profile',
  ],
  permission: {
    "scope.userLocation": {
      "desc": "你的位置信息将用于小程序位置接口的效果展示" // 高速公路行驶持续后台定位
    }
  },
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: '满满打车',
    navigationBarTextStyle: 'black'
  },
}
