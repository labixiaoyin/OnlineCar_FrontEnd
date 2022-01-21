(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/profile/profile"],{

/***/ "./node_modules/@tarojs/taro-loader/lib/raw.js!./src/pages/profile/profile.vue":
/*!*************************************************************************************!*\
  !*** ./node_modules/@tarojs/taro-loader/lib/raw.js!./src/pages/profile/profile.vue ***!
  \*************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _profile_vue_vue_type_template_id_c010c622___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile.vue?vue&type=template&id=c010c622& */ "./src/pages/profile/profile.vue?vue&type=template&id=c010c622&");
/* harmony import */ var _profile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile.vue?vue&type=script&lang=js& */ "./src/pages/profile/profile.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(
  _profile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"],
  _profile_vue_vue_type_template_id_c010c622___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _profile_vue_vue_type_template_id_c010c622___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  null,
  null,
  "269f5142"
  
)

component.options.__file = "src/pages/profile/profile.vue"
/* harmony default export */ __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/pages/profile/profile.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/profile/profile.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _profile_less__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile.less */ "./src/pages/profile/profile.less");
/* harmony import */ var _profile_less__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_profile_less__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_global_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/global_data */ "./src/utils/global_data.js");
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
      userInfo: {
        account: "",
        avatar: "../images/usericon.png",
        nickname: "用户名",
        pkId: 0
      }
    };
  },
  onLoad: function onLoad() {
    this.userInfo = Object(_utils_global_data__WEBPACK_IMPORTED_MODULE_1__[/* get */ "a"])("userInfo");
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/pages/profile/profile.vue?vue&type=template&id=c010c622&":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/profile/profile.vue?vue&type=template&id=c010c622& ***!
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
    _c("view", { staticClass: "info" }, [
      _c("view", { staticClass: "avatar" }, [
        _c("image", {
          staticClass: "img",
          attrs: { src: _vm.userInfo.avatar },
        }),
      ]),
      _c("view", { staticClass: "username" }, [
        _vm._v(_vm._s(_vm.userInfo.nickname)),
      ]),
    ]),
    _c("view", { staticClass: "middle" }, [
      _c("view", { staticClass: "item" }, [
        _c("image", {
          staticClass: "middle_image",
          attrs: { src: __webpack_require__(/*! ../images/personal.png */ "./src/pages/images/personal.png") },
        }),
        _c("text", { staticStyle: { "padding-left": "10px" } }, [
          _vm._v("个人资料"),
        ]),
        _c("image", {
          staticClass: "arrow_right",
          attrs: { src: __webpack_require__(/*! ../images/right.png */ "./src/pages/images/right.png") },
        }),
      ]),
      _c("view", { staticClass: "item" }, [
        _c("image", {
          staticClass: "middle_image",
          attrs: { src: __webpack_require__(/*! ../images/history.png */ "./src/pages/images/history.png") },
        }),
        _c("text", { staticStyle: { "padding-left": "10px" } }, [
          _vm._v("历史订单"),
        ]),
        _c("image", {
          staticClass: "arrow_right",
          attrs: { src: __webpack_require__(/*! ../images/right.png */ "./src/pages/images/right.png") },
        }),
      ]),
      _c("view", { staticClass: "item" }, [
        _c("image", {
          staticClass: "middle_image",
          attrs: { src: __webpack_require__(/*! ../images/wallet.png */ "./src/pages/images/wallet.png") },
        }),
        _c("text", { staticStyle: { "padding-left": "10px" } }, [
          _vm._v("钱包"),
        ]),
        _c("image", {
          staticClass: "arrow_right",
          attrs: { src: __webpack_require__(/*! ../images/right.png */ "./src/pages/images/right.png") },
        }),
      ]),
      _c("view", { staticClass: "item_last" }, [
        _c("image", {
          staticClass: "middle_image",
          attrs: { src: __webpack_require__(/*! ../images/config.png */ "./src/pages/images/config.png") },
        }),
        _c("text", { staticStyle: { "padding-left": "10px" } }, [
          _vm._v("设置"),
        ]),
        _c("image", {
          staticClass: "arrow_right",
          attrs: { src: __webpack_require__(/*! ../images/right.png */ "./src/pages/images/right.png") },
        }),
      ]),
    ]),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./src/pages/images/config.png":
/*!*************************************!*\
  !*** ./src/pages/images/config.png ***!
  \*************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pages/images/config.png";

/***/ }),

/***/ "./src/pages/images/history.png":
/*!**************************************!*\
  !*** ./src/pages/images/history.png ***!
  \**************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pages/images/history.png";

/***/ }),

/***/ "./src/pages/images/personal.png":
/*!***************************************!*\
  !*** ./src/pages/images/personal.png ***!
  \***************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pages/images/personal.png";

/***/ }),

/***/ "./src/pages/images/right.png":
/*!************************************!*\
  !*** ./src/pages/images/right.png ***!
  \************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pages/images/right.png";

/***/ }),

/***/ "./src/pages/images/wallet.png":
/*!*************************************!*\
  !*** ./src/pages/images/wallet.png ***!
  \*************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pages/images/wallet.png";

/***/ }),

/***/ "./src/pages/profile/profile.less":
/*!****************************************!*\
  !*** ./src/pages/profile/profile.less ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/pages/profile/profile.vue":
/*!***************************************!*\
  !*** ./src/pages/profile/profile.vue ***!
  \***************************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js");
/* harmony import */ var _node_modules_tarojs_taro_loader_lib_raw_js_profile_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/@tarojs/taro-loader/lib/raw.js!./profile.vue */ "./node_modules/@tarojs/taro-loader/lib/raw.js!./src/pages/profile/profile.vue");


var config = {};


var inst = Page(Object(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_node_modules_tarojs_taro_loader_lib_raw_js_profile_vue__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], 'pages/profile/profile', {root:{cn:[]}}, config || {}))



/***/ }),

/***/ "./src/pages/profile/profile.vue?vue&type=script&lang=js&":
/*!****************************************************************!*\
  !*** ./src/pages/profile/profile.vue?vue&type=script&lang=js& ***!
  \****************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_profile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib!../../../node_modules/vue-loader/lib??vue-loader-options!./profile.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/pages/profile/profile.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["a"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_profile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]); 

/***/ }),

/***/ "./src/pages/profile/profile.vue?vue&type=template&id=c010c622&":
/*!**********************************************************************!*\
  !*** ./src/pages/profile/profile.vue?vue&type=template&id=c010c622& ***!
  \**********************************************************************/
/*! exports provided: render, staticRenderFns */
/*! exports used: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_profile_vue_vue_type_template_id_c010c622___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./profile.vue?vue&type=template&id=c010c622& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/pages/profile/profile.vue?vue&type=template&id=c010c622&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_profile_vue_vue_type_template_id_c010c622___WEBPACK_IMPORTED_MODULE_0__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "b", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_profile_vue_vue_type_template_id_c010c622___WEBPACK_IMPORTED_MODULE_0__["b"]; });



/***/ })

},[["./src/pages/profile/profile.vue","runtime","taro","vendors","common"]]]);
//# sourceMappingURL=profile.js.map