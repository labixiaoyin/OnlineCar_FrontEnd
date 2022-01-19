(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/login/login"],{

/***/ "./node_modules/@tarojs/taro-loader/lib/raw.js!./src/pages/login/login.vue":
/*!*********************************************************************************!*\
  !*** ./node_modules/@tarojs/taro-loader/lib/raw.js!./src/pages/login/login.vue ***!
  \*********************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _login_vue_vue_type_template_id_23b3be22___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.vue?vue&type=template&id=23b3be22& */ "./src/pages/login/login.vue?vue&type=template&id=23b3be22&");
/* harmony import */ var _login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.vue?vue&type=script&lang=js& */ "./src/pages/login/login.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(
  _login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"],
  _login_vue_vue_type_template_id_23b3be22___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _login_vue_vue_type_template_id_23b3be22___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  null,
  null,
  "4011929f"
  
)

component.options.__file = "src/pages/login/login.vue"
/* harmony default export */ __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/pages/login/login.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/login/login.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _login_less__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.less */ "./src/pages/login/login.less");
/* harmony import */ var _login_less__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_login_less__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_global_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/global_data */ "./src/utils/global_data.js");
/* harmony import */ var _utils_baseurl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/baseurl */ "./src/utils/baseurl.js");
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
      loginColor: "#ccc",
      userInfo: null,
      isLogin: false,
      userName: "",
      password: ""
    };
  },
  onload: function onload() {},
  methods: {
    changeLoginColor: function changeLoginColor(e) {
      this.password = e.target.value;

      if (e.target.value.length != 0) {
        this.loginColor = "#FB841E";
      } else {
        this.loginColor = "#ccc";
      }
    },
    toSingin: function toSingin() {
      // navigateTo向下一级跳转，可以返回
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default.a.navigateTo({
        url: "/pages/login/sign/sign"
      });
    },
    getUsernme: function getUsernme(e) {
      this.userName = e.target.value;
    },
    login: function login() {
      console.log("请求登录");
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default.a.request({
        url: _utils_baseurl__WEBPACK_IMPORTED_MODULE_3__[/* baseUrl */ "a"] + "travel/passenger/login",
        method: "POST",
        data: {
          account: this.userName,
          password: this.password
        } // success(res){
        //   const token = res.data.data
        //   setGlobalData('token', token)
        //   Taro.setStorageSync('token', token)
        //   console.log(res.data);
        // }

      }).then(function (res) {
        var token = res.data.data;
        Object(_utils_global_data__WEBPACK_IMPORTED_MODULE_2__[/* set */ "b"])("token", token);
        Object(_utils_global_data__WEBPACK_IMPORTED_MODULE_2__[/* set */ "b"])("isLogin", true);
        _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default.a.setStorageSync("token", token);
        _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default.a.redirectTo({
          url: '/pages/taxi/taxi'
        });
      }).catch(function (err) {
        console.log(err);
      });
    },
    loginWechat: function loginWechat() {
      var _this = this;

      _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default.a.getUserProfile({
        desc: "用于完善用户资料",
        // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
        success: function success(res) {
          console.log(res);
          Object(_utils_global_data__WEBPACK_IMPORTED_MODULE_2__[/* set */ "b"])("userInfo", res.userInfo);
          Object(_utils_global_data__WEBPACK_IMPORTED_MODULE_2__[/* set */ "b"])("isLogin", true);
          _this.userInfo = Object(_utils_global_data__WEBPACK_IMPORTED_MODULE_2__[/* get */ "a"])("userInfo");
          _this.isLogin = Object(_utils_global_data__WEBPACK_IMPORTED_MODULE_2__[/* get */ "a"])("isLogin"); //redirectTo同级跳转，无法返回上一步

          _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default.a.redirectTo({
            url: "/pages/taxi/taxi"
          });
        },
        fail: function fail(err) {
          console.log("获取用户信息失败");
        }
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/pages/login/login.vue?vue&type=template&id=23b3be22&":
/*!************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/login/login.vue?vue&type=template&id=23b3be22& ***!
  \************************************************************************************************************************************************************************************************/
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
    _c("view", { staticClass: "logintitle" }, [_vm._v("欢迎登录满满打车")]),
    _c("view", [
      _c("input", {
        staticClass: "inputNum",
        attrs: { type: "number", maxlength: "11", placeholder: "请输入用户名" },
        on: { input: _vm.getUsernme },
      }),
      _c("input", {
        staticClass: "inputpwd",
        attrs: { type: "password", placeholder: "请输入登录密码" },
        on: { input: _vm.changeLoginColor },
      }),
      _c(
        "button",
        {
          staticClass: "loginBtn",
          style: { backgroundColor: _vm.loginColor },
          on: { tap: _vm.login },
        },
        [_vm._v(" 登录 ")]
      ),
    ]),
    _c("view", { staticClass: "signText", on: { tap: _vm.toSingin } }, [
      _vm._v("点击注册账号 或"),
    ]),
    _c("button", { staticClass: "wechatBtn", on: { tap: _vm.loginWechat } }, [
      _vm._v("使用微信一键登录"),
    ]),
    _c("view", { staticClass: "foot" }, [
      _vm._v(" 登录即表示您同意 "),
      _c("view", { staticClass: "footText" }, [_vm._v("《服务条款》")]),
    ]),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./src/pages/login/login.less":
/*!************************************!*\
  !*** ./src/pages/login/login.less ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/pages/login/login.vue":
/*!***********************************!*\
  !*** ./src/pages/login/login.vue ***!
  \***********************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js");
/* harmony import */ var _node_modules_tarojs_taro_loader_lib_raw_js_login_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/@tarojs/taro-loader/lib/raw.js!./login.vue */ "./node_modules/@tarojs/taro-loader/lib/raw.js!./src/pages/login/login.vue");


var config = {"navigationBarTitleText":"满满打车"};


var inst = Page(Object(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_node_modules_tarojs_taro_loader_lib_raw_js_login_vue__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], 'pages/login/login', {root:{cn:[]}}, config || {}))



/***/ }),

/***/ "./src/pages/login/login.vue?vue&type=script&lang=js&":
/*!************************************************************!*\
  !*** ./src/pages/login/login.vue?vue&type=script&lang=js& ***!
  \************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib!../../../node_modules/vue-loader/lib??vue-loader-options!./login.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/pages/login/login.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["a"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]); 

/***/ }),

/***/ "./src/pages/login/login.vue?vue&type=template&id=23b3be22&":
/*!******************************************************************!*\
  !*** ./src/pages/login/login.vue?vue&type=template&id=23b3be22& ***!
  \******************************************************************/
/*! exports provided: render, staticRenderFns */
/*! exports used: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_template_id_23b3be22___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./login.vue?vue&type=template&id=23b3be22& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/pages/login/login.vue?vue&type=template&id=23b3be22&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_template_id_23b3be22___WEBPACK_IMPORTED_MODULE_0__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "b", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_template_id_23b3be22___WEBPACK_IMPORTED_MODULE_0__["b"]; });



/***/ })

},[["./src/pages/login/login.vue","runtime","taro","vendors","common"]]]);
//# sourceMappingURL=login.js.map