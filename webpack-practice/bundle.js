/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\n// entry.js\nvar add = __webpack_require__(1);\nconsole.log('9876 + 1546 = ', add(9876, 1546));//@ sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9lbnRyeS5qcz9mN2IwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGVudHJ5LmpzXG52YXIgYWRkID0gcmVxdWlyZSgnLi9hZGQnKTtcbmNvbnNvbGUubG9nKCc5ODc2ICsgMTU0NiA9ICcsIGFkZCg5ODc2LCAxNTQ2KSk7XG5cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIGVudHJ5LmpzXG4gKiovIl0sIm1hcHBpbmdzIjoiOzs7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=");

/***/ },
/* 1 */
/***/ function(module, exports) {

	eval("\"use strict\";\n\n// add.js\nmodule.exports = function (a, b) {\n  return a + b;\n};//@ sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9hZGQuanM/NzBjNCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBhZGQuanNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oYSwgYikgeyByZXR1cm4gYSArIGI7IH1cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBhZGQuanNcbiAqKi8iXSwibWFwcGluZ3MiOiI7OztBQUNBO0FBQUE7QUFBQSIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ }
/******/ ]);