/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/TinyReact/CreateElement.js":
/*!****************************************!*\
  !*** ./src/TinyReact/CreateElement.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CreateElement)
/* harmony export */ });
function CreateElement(type, props) {
  for (var _len = arguments.length, children = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    children[_key - 2] = arguments[_key];
  }

  return {
    type: type,
    props: props,
    children: children
  };
}

/***/ }),

/***/ "./src/TinyReact/index.js":
/*!********************************!*\
  !*** ./src/TinyReact/index.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CreateElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CreateElement */ "./src/TinyReact/CreateElement.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  CreateElement: _CreateElement__WEBPACK_IMPORTED_MODULE_0__.default
});

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TinyReact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TinyReact */ "./src/TinyReact/index.js");
 // const root = document.getElementById("root")

var virtualDOM = _TinyReact__WEBPACK_IMPORTED_MODULE_0__.default.createElement("div", {
  className: "container"
}, _TinyReact__WEBPACK_IMPORTED_MODULE_0__.default.createElement("h1", null, "\u4F60\u597D Tiny React"), _TinyReact__WEBPACK_IMPORTED_MODULE_0__.default.createElement("h2", {
  "data-test": "test"
}, "(\u7F16\u7801\u5FC5\u6740\u6280)"), _TinyReact__WEBPACK_IMPORTED_MODULE_0__.default.createElement("div", null, "\u5D4C\u59571 ", _TinyReact__WEBPACK_IMPORTED_MODULE_0__.default.createElement("div", null, "\u5D4C\u5957 1.1")), _TinyReact__WEBPACK_IMPORTED_MODULE_0__.default.createElement("h3", null, "(\u89C2\u5BDF: \u8FD9\u4E2A\u5C06\u4F1A\u88AB\u6539\u53D8)"),  false && 0,  true && _TinyReact__WEBPACK_IMPORTED_MODULE_0__.default.createElement("div", null, "2"), _TinyReact__WEBPACK_IMPORTED_MODULE_0__.default.createElement("span", null, "\u8FD9\u662F\u4E00\u6BB5\u5185\u5BB9"), _TinyReact__WEBPACK_IMPORTED_MODULE_0__.default.createElement("button", {
  onClick: function onClick() {
    return alert("你好");
  }
}, "\u70B9\u51FB\u6211"), _TinyReact__WEBPACK_IMPORTED_MODULE_0__.default.createElement("h3", null, "\u8FD9\u4E2A\u5C06\u4F1A\u88AB\u5220\u9664"), "2, 3", _TinyReact__WEBPACK_IMPORTED_MODULE_0__.default.createElement("input", {
  type: "text",
  value: "13"
}));
console.log(virtualDOM);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90aW55LXJlYWN0Ly4vc3JjL1RpbnlSZWFjdC9DcmVhdGVFbGVtZW50LmpzIiwid2VicGFjazovL3RpbnktcmVhY3QvLi9zcmMvVGlueVJlYWN0L2luZGV4LmpzIiwid2VicGFjazovL3RpbnktcmVhY3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdGlueS1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdGlueS1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RpbnktcmVhY3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90aW55LXJlYWN0Ly4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbIkNyZWF0ZUVsZW1lbnQiLCJ0eXBlIiwicHJvcHMiLCJjaGlsZHJlbiIsInZpcnR1YWxET00iLCJhbGVydCIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQWUsU0FBU0EsYUFBVCxDQUF1QkMsSUFBdkIsRUFBNkJDLEtBQTdCLEVBQWlEO0FBQUEsb0NBQVZDLFFBQVU7QUFBVkEsWUFBVTtBQUFBOztBQUU5RCxTQUFPO0FBQ0xGLFFBQUksRUFBSkEsSUFESztBQUVMQyxTQUFLLEVBQUxBLEtBRks7QUFHTEMsWUFBUSxFQUFSQTtBQUhLLEdBQVA7QUFLRCxDOzs7Ozs7Ozs7Ozs7Ozs7QUNQRDtBQUVBLGlFQUFlO0FBQ2RILGVBQWEsRUFBYkEsbURBQWFBO0FBREMsQ0FBZixFOzs7Ozs7VUNGQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHdDQUF3Qyx5Q0FBeUM7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEEsd0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0Esc0RBQXNELGtCQUFrQjtXQUN4RTtXQUNBLCtDQUErQyxjQUFjO1dBQzdELEU7Ozs7Ozs7Ozs7OztDQ0pBOztBQUVBLElBQU1JLFVBQVUsR0FDZDtBQUFLLFdBQVMsRUFBQztBQUFmLEdBQ0Usb0dBREYsRUFFRTtBQUFJLGVBQVU7QUFBZCxzQ0FGRixFQUdFLDZGQUNNLDhGQUROLENBSEYsRUFNRSx1SUFORixFQU9HLFVBQVUsQ0FQYixFQVFHLFNBQVUsK0VBUmIsRUFTRSxtSEFURixFQVVFO0FBQVEsU0FBTyxFQUFFO0FBQUEsV0FBTUMsS0FBSyxDQUFDLElBQUQsQ0FBWDtBQUFBO0FBQWpCLHdCQVZGLEVBV0UsdUhBWEYsVUFhRTtBQUFPLE1BQUksRUFBQyxNQUFaO0FBQW1CLE9BQUssRUFBQztBQUF6QixFQWJGLENBREY7QUFrQkFDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZSCxVQUFaLEUiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ3JlYXRlRWxlbWVudCh0eXBlLCBwcm9wcywgLi4uY2hpbGRyZW4pIHtcclxuICBcclxuICByZXR1cm4ge1xyXG4gICAgdHlwZSxcclxuICAgIHByb3BzLFxyXG4gICAgY2hpbGRyZW5cclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IENyZWF0ZUVsZW1lbnQgZnJvbSBcIi4vQ3JlYXRlRWxlbWVudFwiXHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcblx0Q3JlYXRlRWxlbWVudCxcclxufVxyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBUaW55UmVhY3QgZnJvbSAnLi9UaW55UmVhY3QnO1xyXG5cclxuLy8gY29uc3Qgcm9vdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicm9vdFwiKVxyXG5cclxuY29uc3QgdmlydHVhbERPTSA9IChcclxuICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgPGgxPuS9oOWlvSBUaW55IFJlYWN0PC9oMT5cclxuICAgIDxoMiBkYXRhLXRlc3Q9XCJ0ZXN0XCI+KOe8lueggeW/headgOaKgCk8L2gyPlxyXG4gICAgPGRpdj5cclxuICAgICAg5bWM5aWXMSA8ZGl2PuW1jOWllyAxLjE8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgPGgzPijop4Llr586IOi/meS4quWwhuS8muiiq+aUueWPmCk8L2gzPlxyXG4gICAgezIgPT0gMSAmJiA8ZGl2PuWmguaenDLlkowx55u4562J5riy5p+T5b2T5YmN5YaF5a65PC9kaXY+fVxyXG4gICAgezIgPT0gMiAmJiA8ZGl2PjI8L2Rpdj59XHJcbiAgICA8c3Bhbj7ov5nmmK/kuIDmrrXlhoXlrrk8L3NwYW4+XHJcbiAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGFsZXJ0KFwi5L2g5aW9XCIpfT7ngrnlh7vmiJE8L2J1dHRvbj5cclxuICAgIDxoMz7ov5nkuKrlsIbkvJrooqvliKDpmaQ8L2gzPlxyXG4gICAgMiwgM1xyXG4gICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgdmFsdWU9XCIxM1wiIC8+XHJcbiAgPC9kaXY+XHJcbilcclxuXHJcbmNvbnNvbGUubG9nKHZpcnR1YWxET00pOyJdLCJzb3VyY2VSb290IjoiIn0=