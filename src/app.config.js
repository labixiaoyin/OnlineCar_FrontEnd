export default {
  pages: [
    'pages/taxi/taxi',
    'pages/taxi/map/map',
    'pages/login/login',
    'pages/login/sign/sign',
    'pages/index/index',
    'pages/profile/profile',
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: '满满打车',
    navigationBarTextStyle: 'black'
  },
  defineConstants: {
    LOCATION_APIKEY: JSON.stringify('FDLBZ-45FKG-SOVQ6-IRCA6-PGYJ5-5IBXY')
  },
}
