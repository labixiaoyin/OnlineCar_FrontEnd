(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["common"],{

/***/ "./src/utils/baseurl.js":
/*!******************************!*\
  !*** ./src/utils/baseurl.js ***!
  \******************************/
/*! exports provided: baseUrl */
/*! exports used: baseUrl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return baseUrl; });
var baseUrlPrefix = {
  passenger: "",
  driver: "",
  platform: ""
};
var env =  false ? undefined : "test";
console.log("process.env.BUILD_ENV", "test");

switch (env) {
  case "development":
    baseUrlPrefix = {
      // passenger: "http://10.20.22.252:8686/",
      // driver: "http://10.20.22.135:8686/",
      passenger: "http://10.20.22.39:8686/",
      driver: "http://10.20.22.39:8686/",
      platform: "http://10.20.22.39:8686/"
    };
    break;

  case "test":
    baseUrlPrefix = {
      passenger: "http://1.117.227.141:8686/",
      driver: "http://1.117.227.141:8686/",
      platform: "http://1.117.227.141:8686/"
    };
    break;
}

var baseUrl = baseUrlPrefix;

/***/ }),

/***/ "./src/utils/global_data.js":
/*!**********************************!*\
  !*** ./src/utils/global_data.js ***!
  \**********************************/
/*! exports provided: set, get */
/*! exports used: get, set */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return set; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return get; });
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_0__);

var globalData = {
  userInfo: null,
  isLogin: false,
  location: null,
  destination: null,
  phoneNumber: '',
  token: _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default.a.getStorageSync('token') || ''
};
function set(key, val) {
  globalData[key] = val;
}
function get(key) {
  return globalData[key];
}

/***/ })

}]);
//# sourceMappingURL=common.js.map