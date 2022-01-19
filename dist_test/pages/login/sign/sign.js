(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/login/sign/sign"],{

/***/ "./node_modules/@tarojs/taro-loader/lib/raw.js!./src/pages/login/sign/sign.vue":
/*!*************************************************************************************!*\
  !*** ./node_modules/@tarojs/taro-loader/lib/raw.js!./src/pages/login/sign/sign.vue ***!
  \*************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _sign_vue_vue_type_template_id_13f30655___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sign.vue?vue&type=template&id=13f30655& */ "./src/pages/login/sign/sign.vue?vue&type=template&id=13f30655&");
/* harmony import */ var _sign_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sign.vue?vue&type=script&lang=js& */ "./src/pages/login/sign/sign.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(
  _sign_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"],
  _sign_vue_vue_type_template_id_13f30655___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _sign_vue_vue_type_template_id_13f30655___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  null,
  null,
  "6b14b99c"
  
)

component.options.__file = "src/pages/login/sign/sign.vue"
/* harmony default export */ __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/pages/login/sign/sign.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/login/sign/sign.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _sign_less__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sign.less */ "./src/pages/login/sign/sign.less");
/* harmony import */ var _sign_less__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_sign_less__WEBPACK_IMPORTED_MODULE_0__);
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
      areaCode: ["86", "886", "00", "853"],
      index: 0,
      userName: '',
      password: ''
    };
  },
  methods: {
    bindPickerChange: function bindPickerChange(e) {
      this.index = e.detail.value;
    },
    getUsername: function getUsername(e) {
      this.userName = e.target.value;
    },
    getPsd: function getPsd(e) {
      this.password = e.target.value;
    },
    singin: function singin() {
      console.log("请求登录");
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/pages/login/sign/sign.vue?vue&type=template&id=13f30655&":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/login/sign/sign.vue?vue&type=template&id=13f30655& ***!
  \****************************************************************************************************************************************************************************************************/
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
    _c("view", { staticClass: "title" }, [_vm._v("欢迎注册满满打车")]),
    _c("view", [
      _c("input", {
        staticClass: "inputNum",
        attrs: { type: "number", maxlength: "11", placeholder: "请输入用户名" },
        on: { input: _vm.getUsername },
      }),
      _c("input", {
        staticClass: "inputpwd",
        attrs: { type: "password", placeholder: "请输入登录密码" },
        on: { input: _vm.getPsd },
      }),
      _c(
        "button",
        {
          staticClass: "loginBtn",
          staticStyle: { backgroundColor: "#FB841E" },
          on: { tap: _vm.singin },
        },
        [_vm._v(" 注册 ")]
      ),
    ]),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./src/pages/login/sign/sign.less":
/*!****************************************!*\
  !*** ./src/pages/login/sign/sign.less ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/pages/login/sign/sign.vue":
/*!***************************************!*\
  !*** ./src/pages/login/sign/sign.vue ***!
  \***************************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js");
/* harmony import */ var _node_modules_tarojs_taro_loader_lib_raw_js_sign_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/@tarojs/taro-loader/lib/raw.js!./sign.vue */ "./node_modules/@tarojs/taro-loader/lib/raw.js!./src/pages/login/sign/sign.vue");


var config = {"navigationBarTitleText":"满满打车"};


var inst = Page(Object(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_node_modules_tarojs_taro_loader_lib_raw_js_sign_vue__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], 'pages/login/sign/sign', {root:{cn:[]}}, config || {}))



/***/ }),

/***/ "./src/pages/login/sign/sign.vue?vue&type=script&lang=js&":
/*!****************************************************************!*\
  !*** ./src/pages/login/sign/sign.vue?vue&type=script&lang=js& ***!
  \****************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_sign_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib!../../../../node_modules/vue-loader/lib??vue-loader-options!./sign.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/pages/login/sign/sign.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["a"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_sign_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]); 

/***/ }),

/***/ "./src/pages/login/sign/sign.vue?vue&type=template&id=13f30655&":
/*!**********************************************************************!*\
  !*** ./src/pages/login/sign/sign.vue?vue&type=template&id=13f30655& ***!
  \**********************************************************************/
/*! exports provided: render, staticRenderFns */
/*! exports used: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_sign_vue_vue_type_template_id_13f30655___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./sign.vue?vue&type=template&id=13f30655& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/pages/login/sign/sign.vue?vue&type=template&id=13f30655&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_sign_vue_vue_type_template_id_13f30655___WEBPACK_IMPORTED_MODULE_0__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "b", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_sign_vue_vue_type_template_id_13f30655___WEBPACK_IMPORTED_MODULE_0__["b"]; });



/***/ })

},[["./src/pages/login/sign/sign.vue","runtime","taro","vendors"]]]);
//# sourceMappingURL=sign.js.map