(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/taxi/taxi"],{

/***/ "./node_modules/@tarojs/taro-loader/lib/raw.js!./src/pages/taxi/taxi.vue":
/*!*******************************************************************************!*\
  !*** ./node_modules/@tarojs/taro-loader/lib/raw.js!./src/pages/taxi/taxi.vue ***!
  \*******************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _taxi_vue_vue_type_template_id_0ed8821b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./taxi.vue?vue&type=template&id=0ed8821b& */ "./src/pages/taxi/taxi.vue?vue&type=template&id=0ed8821b&");
/* harmony import */ var _taxi_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./taxi.vue?vue&type=script&lang=js& */ "./src/pages/taxi/taxi.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(
  _taxi_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"],
  _taxi_vue_vue_type_template_id_0ed8821b___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _taxi_vue_vue_type_template_id_0ed8821b___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  null,
  null,
  "5cc73fc5"
  
)

component.options.__file = "src/pages/taxi/taxi.vue"
/* harmony default export */ __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/pages/taxi/taxi.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/taxi/taxi.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _taxi_less__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./taxi.less */ "./src/pages/taxi/taxi.less");
/* harmony import */ var _taxi_less__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_taxi_less__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_global_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/global_data */ "./src/utils/global_data.js");
/* harmony import */ var _utils_baseurl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/baseurl */ "./src/utils/baseurl.js");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/utils */ "./src/utils/utils.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      // ??????????????????
      isCancel: false,
      // status???????????? 0???????????????1????????????????????????2??????????????????????????????3??????????????????
      status: 0,
      latitude: 23.099994,
      longitude: 113.32452,
      passengerId: 0,
      isClick: false,
      timeId_pick: "",
      timeId_arrive: "",
      cost: 0,
      markers: [{
        id: 0,
        iconPath: "",
        latitude: 23.099994,
        longitude: 113.32452,
        width: 50,
        height: 50
      }],
      startPlace: {
        address: "??????",
        name: "??????",
        latitude: 0,
        longitude: 0
      },
      endPlace: {
        address: "???????????????",
        name: "???????????????",
        latitude: 0,
        longitude: 0
      },
      driver: {
        id: 0,
        name: "??????",
        score: "5.0",
        licenseTag: "???AD76571",
        carInfo: "?????? ?????????????????????",
        orderNum: 2000,
        avatar: "../images/usericon.png"
      }
    };
  },
  onLoad: function onLoad() {
    this.toCurrent();
    this.getCurrentUser();
  },
  methods: {
    toProfile: function toProfile() {
      if (!Object(_utils_global_data__WEBPACK_IMPORTED_MODULE_2__[/* get */ "a"])("isLogin")) {
        _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default.a.redirectTo({
          url: "/pages/login/login"
        });
      } else {
        _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default.a.redirectTo({
          url: "/pages/profile/profile"
        });
      }
    },
    getCurrentUser: function getCurrentUser() {
      var _this = this;

      var token = Object(_utils_global_data__WEBPACK_IMPORTED_MODULE_2__[/* get */ "a"])("token");
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default.a.request({
        url: _utils_baseurl__WEBPACK_IMPORTED_MODULE_3__[/* baseUrl */ "a"].passenger + "travel/passenger/currentPAX",
        method: "GET",
        header: {
          Authorization: token
        }
      }).then(function (res) {
        console.log(res.data); // this.passengerId = res.data
        // ???????????????????????????????????????????????????

        if (res.data.success) {
          Object(_utils_global_data__WEBPACK_IMPORTED_MODULE_2__[/* set */ "b"])("isLogin", true);
          Object(_utils_global_data__WEBPACK_IMPORTED_MODULE_2__[/* set */ "b"])("userInfo", res.data.data);
          _this.passengerId = res.data.data.pkId;
        } else {
          // ?????????????????????token?????????????????????
          _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default.a.setStorageSync("token", "");
          Object(_utils_global_data__WEBPACK_IMPORTED_MODULE_2__[/* set */ "b"])("isLogin", false);
        }
      });
    },
    // ???????????? type: begin/end
    regionchange: function regionchange(e) {
      console.log(e.type);
    },
    // ???????????????
    markertap: function markertap(e) {
      console.log("markertap:", e.detail.markerId);
    },
    // ????????????????????????
    toCurrent: function toCurrent() {
      var that = this;
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default.a.getLocation({
        type: "wgs84",
        success: function success(res) {
          that.latitude = res.latitude;
          that.longitude = res.longitude;
          that.$set(that.markers, 0, {
            id: 0,
            iconPath: "",
            latitude: that.latitude,
            longitude: that.longitude,
            width: 50,
            height: 50
          });
        }
      });
    },
    chooseStart: function chooseStart() {
      var that = this;
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default.a.chooseLocation({
        success: function success(res) {
          console.log("??????", res); // "key" ???????????????

          that.$set(that.startPlace, "name", res.name);
          that.$set(that.startPlace, "address", res.address);
          that.$set(that.startPlace, "latitude", res.latitude);
          that.$set(that.startPlace, "longitude", res.longitude);

          if (that.startPlace.latitude != 0 && that.startPlace.longitude != 0 && that.endPlace.latitude != 0 && that.endPlace.longitude != 0 && that.startPlace.name != "" && that.endPlace.name != "") {
            that.isClick = true;
            that.cost = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_4__[/* getCost */ "a"])(that.startPlace.latitude, that.startPlace.longitude, that.endPlace.latitude, that.endPlace.longitude);
          }

          console.log("this.isClick", that.isClick);
        }
      });
    },
    chooseEnd: function chooseEnd() {
      var that = this;
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default.a.chooseLocation({
        success: function success(res) {
          console.log("??????", res);
          that.$set(that.endPlace, "name", res.name);
          that.$set(that.endPlace, "address", res.address);
          that.$set(that.endPlace, "latitude", res.latitude);
          that.$set(that.endPlace, "longitude", res.longitude);

          if (that.startPlace.latitude != 0 && that.startPlace.longitude != 0 && that.endPlace.latitude != 0 && that.endPlace.longitude != 0 && that.startPlace.name != "" && that.endPlace.name != "") {
            that.isClick = true;
            that.cost = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_4__[/* getCost */ "a"])(that.startPlace.latitude, that.startPlace.longitude, that.endPlace.latitude, that.endPlace.longitude);
          }

          console.log("this.isClick", that.isClick);
        }
      });
    },
    // ??????????????????
    confirmOrder: function confirmOrder() {
      var _this2 = this;

      if (Object(_utils_global_data__WEBPACK_IMPORTED_MODULE_2__[/* get */ "a"])("isLogin")) {
        this.status = 1;
        this.isCancel = false; // ??????????????????

        var payload = {
          passengerId: this.passengerId,
          beginName: this.startPlace.name,
          beginLng: this.startPlace.longitude,
          beginLat: this.startPlace.latitude,
          endName: this.endPlace.name,
          endLng: this.endPlace.longitude,
          endLat: this.endPlace.latitude
        };
        _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default.a.request({
          url: _utils_baseurl__WEBPACK_IMPORTED_MODULE_3__[/* baseUrl */ "a"].platform + "travel/order/create",
          method: "POST",
          data: payload
        }).then(function (res) {
          console.log("???????????????", res.data); // ???????????????????????????????????????????????????

          if (res.data.data == "????????????") {
            // ??????????????????????????????
            clearInterval(_this2.timeId_pick);
            _this2.timeId_pick = setInterval(function () {
              _this2.getResponse();
            }, 2000);
          } else if (res.data.data == "????????????????????????") {
            _this2.showTips();
          }
        });
      } else {
        _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default.a.redirectTo({
          url: "/pages/login/login"
        });
      }
    },
    // ??????????????????
    getResponse: function getResponse() {
      var _this3 = this;

      console.log("baseUrl.platform", _utils_baseurl__WEBPACK_IMPORTED_MODULE_3__[/* baseUrl */ "a"].platform);
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default.a.request({
        url: _utils_baseurl__WEBPACK_IMPORTED_MODULE_3__[/* baseUrl */ "a"].platform + "travel/push/passenger",
        method: "GET",
        data: {
          passengerId: this.passengerId
        }
      }).then(function (res) {
        console.log("????????????", res.data);
        var data = res.data;

        if (data.success) {
          _this3.$set(_this3.driver, "id", data.data.account);

          _this3.$set(_this3.driver, "name", data.data.nickname);

          _this3.$set(_this3.driver, "licenseTag", data.data.carNum);

          _this3.$set(_this3.driver, "avatar", data.data.avatar);

          _this3.$set(_this3.driver, "carInfo", data.data.carColor + "" + data.data.carBrand);

          _this3.status = 3;
          clearInterval(_this3.timeId_pick);
          clearInterval(_this3.timeId_arrive);
          _this3.timeId_arrive = setInterval(function () {
            _this3.getIsArrival();
          }, 2000);
        }
      });
    },
    // ?????????????????????
    getIsArrival: function getIsArrival() {
      var _this4 = this;

      _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default.a.request({
        url: _utils_baseurl__WEBPACK_IMPORTED_MODULE_3__[/* baseUrl */ "a"].platform + "travel/push/getCompleteMessage",
        method: "GET",
        data: {
          passengerId: this.passengerId
        }
      }).then(function (res) {
        console.log("????????????", res.data);

        if (res.data.code == 200) {
          clearInterval(_this4.timeId_arrive);
          _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default.a.showToast({
            title: "????????????",
            icon: "success",
            duration: 2000
          });
          _this4.status = 0;
          _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default.a.redirectTo({
            url: "/pages/taxi/taxi"
          });
        }
      });
    },
    // ????????????
    cancelOrder: function cancelOrder() {
      var _this5 = this;

      this.isCancel = true;
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default.a.request({
        url: _utils_baseurl__WEBPACK_IMPORTED_MODULE_3__[/* baseUrl */ "a"].platform + "travel/order/cancel",
        method: "POST",
        data: {
          passengerId: 1
        }
      }).then(function (res) {
        console.log("??????????????????", res.data);
        _this5.status = 0;
        clearInterval(_this5.timeId_pick);
      });
    },
    // ???????????????
    showTips: function showTips() {
      var that = this;
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default.a.showModal({
        title: "??????",
        content: "???????????????????????????????????????????????????????????????????????????",
        success: function success(res) {
          if (res.confirm) {
            that.cancelOrder();
          } else if (res.cancel) {
            that.cancelOrder();
          }
        }
      });
    },
    payMoney: function payMoney() {}
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/pages/taxi/taxi.vue?vue&type=template&id=0ed8821b&":
/*!**********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/taxi/taxi.vue?vue&type=template&id=0ed8821b& ***!
  \**********************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/*! exports used: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("view", [
    _c("view", { staticClass: "navbar", on: { tap: _vm.toProfile } }, [
      _c("view", { staticClass: "userIcon" }, [
        _c("image", {
          staticStyle: { width: "30px", height: "30px" },
          attrs: { src: __webpack_require__(/*! ../images/usericon.png */ "./src/pages/images/usericon.png") },
        }),
      ]),
      _c("view", { staticClass: "navbarText" }, [_vm._v("????????????")]),
    ]),
    _c(
      "map",
      {
        attrs: {
          id: "map",
          longitude: _vm.longitude,
          latitude: _vm.latitude,
          scale: "14",
          "show-location": true,
        },
        on: { regionchange: _vm.regionchange, markertap: _vm.markertap },
      },
      [
        _c("view", { staticClass: "return" }, [
          _c("image", {
            staticStyle: { width: "30px", height: "30px" },
            attrs: { src: __webpack_require__(/*! ../images/current-location.png */ "./src/pages/images/current-location.png") },
            on: { tap: _vm.toCurrent },
          }),
        ]),
        _c(
          "view",
          {
            directives: [
              {
                name: "show",
                rawName: "v-show",
                value: _vm.status == 0,
                expression: "status == 0",
              },
            ],
            staticClass: "container",
          },
          [
            _c("view", { staticClass: "from", on: { tap: _vm.chooseStart } }, [
              _c("image", {
                staticStyle: { width: "24px", height: "24px" },
                attrs: { src: __webpack_require__(/*! ../images/circle.png */ "./src/pages/images/circle.png") },
              }),
              _c("text", { staticStyle: { "padding-left": "10px" } }, [
                _vm._v(_vm._s(_vm.startPlace.name)),
              ]),
            ]),
            _c("view", { staticClass: "to", on: { tap: _vm.chooseEnd } }, [
              _c("image", {
                staticStyle: { width: "24px", height: "24px" },
                attrs: { src: __webpack_require__(/*! ../images/toplace.png */ "./src/pages/images/toplace.png") },
              }),
              _c("text", { staticStyle: { "padding-left": "10px" } }, [
                _vm._v(_vm._s(_vm.endPlace.name)),
              ]),
            ]),
            _c("view", { staticClass: "predict" }, [
              _vm._v("???????????????" + _vm._s(_vm.cost) + "???"),
            ]),
            _c("view", { staticClass: "confirm" }, [
              _c(
                "button",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: _vm.isClick,
                      expression: "isClick",
                    },
                  ],
                  staticClass: "btn",
                  on: { tap: _vm.confirmOrder },
                },
                [_vm._v(" ?????????????????? ")]
              ),
              _c(
                "button",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: !_vm.isClick,
                      expression: "!isClick",
                    },
                  ],
                  staticClass: "btn",
                  staticStyle: { "background-color": "#ccc" },
                },
                [_vm._v(" ?????????????????? ")]
              ),
            ]),
          ]
        ),
        _c(
          "view",
          {
            directives: [
              {
                name: "show",
                rawName: "v-show",
                value: _vm.status == 1,
                expression: "status == 1",
              },
            ],
            staticClass: "container",
          },
          [
            _c("view", { staticClass: "calling" }, [
              _vm._v(" ????????????????????????... "),
            ]),
            _c("view", { staticClass: "confirm-place" }, [
              _vm._v(" ????????????????????? "),
              _c(
                "text",
                {
                  staticStyle: {
                    width: "60%",
                    color: "#fb841e",
                    overflow: "hidden",
                    "white-space": "nowrap",
                    "text-overflow": "ellipsis",
                  },
                },
                [_vm._v(_vm._s(_vm.startPlace.name))]
              ),
            ]),
            _c("view", { staticClass: "cancel-order" }, [
              _c(
                "button",
                { staticClass: "btn", on: { tap: _vm.cancelOrder } },
                [_vm._v("????????????")]
              ),
            ]),
          ]
        ),
        _c(
          "view",
          {
            directives: [
              {
                name: "show",
                rawName: "v-show",
                value: _vm.status == 2,
                expression: "status == 2",
              },
            ],
            staticClass: "container",
          },
          [
            _c("view", { staticClass: "driver-info" }, [
              _c("view", { staticClass: "text-info" }, [
                _c(
                  "view",
                  { staticStyle: { "font-size": "22px", color: "#000" } },
                  [_vm._v(_vm._s(_vm.driver.licenseTag))]
                ),
                _c(
                  "view",
                  {
                    staticStyle: {
                      "font-size": "16px",
                      color: "rgb(94, 94, 94)",
                    },
                  },
                  [_vm._v(_vm._s(_vm.driver.carInfo))]
                ),
                _c("view", { staticStyle: { "font-size": "14px" } }, [
                  _vm._v(
                    _vm._s(_vm.driver.name) +
                      " " +
                      _vm._s(_vm.driver.score) +
                      " " +
                      _vm._s(_vm.driver.orderNum) +
                      "???"
                  ),
                ]),
              ]),
              _c("view", { staticClass: "img-info" }, [
                _c("image", {
                  staticStyle: {
                    width: "50px",
                    height: "50px",
                    "border-radius": "50%",
                  },
                  attrs: {
                    src: _vm.driver.avatar
                      ? _vm.driver.avatar
                      : "../images/usericon.png",
                  },
                }),
              ]),
            ]),
            _c("view", { staticClass: "coming" }, [
              _vm._v(" ?????????????????????????????????????????????????????? "),
              _c("view", { staticClass: "tips" }, [
                _vm._v("????????? "),
                _c("text", { staticStyle: { color: "#fb841e" } }, [
                  _vm._v(_vm._s(_vm.startPlace.name)),
                ]),
                _vm._v(" ?????? "),
              ]),
            ]),
          ]
        ),
        _c(
          "view",
          {
            directives: [
              {
                name: "show",
                rawName: "v-show",
                value: _vm.status == 3,
                expression: "status == 3",
              },
            ],
            staticClass: "container",
          },
          [
            _c("view", { staticClass: "driver-info" }, [
              _c("view", { staticClass: "text-info" }, [
                _c(
                  "view",
                  { staticStyle: { "font-size": "22px", color: "#000" } },
                  [_vm._v(_vm._s(_vm.driver.licenseTag))]
                ),
                _c(
                  "view",
                  {
                    staticStyle: {
                      "font-size": "16px",
                      color: "rgb(94, 94, 94)",
                    },
                  },
                  [_vm._v(_vm._s(_vm.driver.carInfo))]
                ),
                _c("view", { staticStyle: { "font-size": "14px" } }, [
                  _vm._v(
                    _vm._s(_vm.driver.name) +
                      " " +
                      _vm._s(_vm.driver.score) +
                      " " +
                      _vm._s(_vm.driver.orderNum) +
                      "???"
                  ),
                ]),
              ]),
              _c("view", { staticClass: "img-info" }, [
                _c("image", {
                  staticStyle: {
                    width: "50px",
                    height: "50px",
                    "border-radius": "50%",
                  },
                  attrs: { src: _vm.driver.avatar },
                }),
              ]),
            ]),
            _c("view", { staticClass: "coming" }, [
              _vm._v(" ????????????????????? "),
              _c("view", { staticClass: "tips" }, [
                _vm._v("???????????????????????????????????????????????????"),
              ]),
            ]),
          ]
        ),
        _c(
          "view",
          {
            directives: [
              {
                name: "show",
                rawName: "v-show",
                value: _vm.status == 4,
                expression: "status == 4",
              },
            ],
            staticClass: "container",
          },
          [
            _c("view", { staticClass: "calling" }, [_vm._v(" ?????????????????? ")]),
            _c("view", { staticClass: "confirm-place" }, [
              _vm._v(" ??? "),
              _c(
                "text",
                {
                  staticStyle: {
                    width: "40%",
                    color: "#fb841e",
                    overflow: "hidden",
                    "white-space": "nowrap",
                    "text-overflow": "ellipsis",
                  },
                },
                [_vm._v(_vm._s(_vm.startPlace.name))]
              ),
              _vm._v(" ??? "),
              _c(
                "text",
                {
                  staticStyle: {
                    width: "40%",
                    color: "#fb841e",
                    overflow: "hidden",
                    "white-space": "nowrap",
                    "text-overflow": "ellipsis",
                  },
                },
                [_vm._v(_vm._s(_vm.endPlace.name))]
              ),
            ]),
            _c("view", { staticClass: "cancel-order" }, [
              _c("button", { staticClass: "btn", on: { tap: _vm.payMoney } }, [
                _vm._v("?????????????????? {{}}???"),
              ]),
            ]),
          ]
        ),
      ]
    ),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./src/pages/images/circle.png":
/*!*************************************!*\
  !*** ./src/pages/images/circle.png ***!
  \*************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pages/images/circle.png";

/***/ }),

/***/ "./src/pages/images/current-location.png":
/*!***********************************************!*\
  !*** ./src/pages/images/current-location.png ***!
  \***********************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pages/images/current-location.png";

/***/ }),

/***/ "./src/pages/images/toplace.png":
/*!**************************************!*\
  !*** ./src/pages/images/toplace.png ***!
  \**************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pages/images/toplace.png";

/***/ }),

/***/ "./src/pages/images/usericon.png":
/*!***************************************!*\
  !*** ./src/pages/images/usericon.png ***!
  \***************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pages/images/usericon.png";

/***/ }),

/***/ "./src/pages/taxi/taxi.less":
/*!**********************************!*\
  !*** ./src/pages/taxi/taxi.less ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/pages/taxi/taxi.vue":
/*!*********************************!*\
  !*** ./src/pages/taxi/taxi.vue ***!
  \*********************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js");
/* harmony import */ var _node_modules_tarojs_taro_loader_lib_raw_js_taxi_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/@tarojs/taro-loader/lib/raw.js!./taxi.vue */ "./node_modules/@tarojs/taro-loader/lib/raw.js!./src/pages/taxi/taxi.vue");


var config = {"navigationBarTitleText":"????????????"};


var inst = Page(Object(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_node_modules_tarojs_taro_loader_lib_raw_js_taxi_vue__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], 'pages/taxi/taxi', {root:{cn:[]}}, config || {}))



/***/ }),

/***/ "./src/pages/taxi/taxi.vue?vue&type=script&lang=js&":
/*!**********************************************************!*\
  !*** ./src/pages/taxi/taxi.vue?vue&type=script&lang=js& ***!
  \**********************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_taxi_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib!../../../node_modules/vue-loader/lib??vue-loader-options!./taxi.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/pages/taxi/taxi.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["a"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_taxi_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]); 

/***/ }),

/***/ "./src/pages/taxi/taxi.vue?vue&type=template&id=0ed8821b&":
/*!****************************************************************!*\
  !*** ./src/pages/taxi/taxi.vue?vue&type=template&id=0ed8821b& ***!
  \****************************************************************/
/*! exports provided: render, staticRenderFns */
/*! exports used: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_taxi_vue_vue_type_template_id_0ed8821b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./taxi.vue?vue&type=template&id=0ed8821b& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/pages/taxi/taxi.vue?vue&type=template&id=0ed8821b&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_taxi_vue_vue_type_template_id_0ed8821b___WEBPACK_IMPORTED_MODULE_0__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "b", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_taxi_vue_vue_type_template_id_0ed8821b___WEBPACK_IMPORTED_MODULE_0__["b"]; });



/***/ }),

/***/ "./src/utils/utils.js":
/*!****************************!*\
  !*** ./src/utils/utils.js ***!
  \****************************/
/*! exports provided: getCost */
/*! exports used: getCost */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getCost; });
function getCost(lat1, lng1, lat2, lng2) {
  var radLat1 = lat1 * Math.PI / 180.0;
  var radLat2 = lat2 * Math.PI / 180.0;
  var a = radLat1 - radLat2;
  var b = lng1 * Math.PI / 180.0 - lng2 * Math.PI / 180.0;
  var s = 2 * Math.asin(Math.sqrt(Math.pow(Math.sin(a / 2), 2) + Math.cos(radLat1) * Math.cos(radLat2) * Math.pow(Math.sin(b / 2), 2)));
  s = s * 6378.137;
  s = Math.round(s * 10000) / 10000; // ????????????

  console.log("??????", s);
  return s < 3 ? 10.00 : (10 + (s - 3) * 3).toFixed(2);
}

/***/ })

},[["./src/pages/taxi/taxi.vue","runtime","taro","vendors","common"]]]);
//# sourceMappingURL=taxi.js.map