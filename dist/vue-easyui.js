(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("vue-easyui", [], factory);
	else if(typeof exports === 'object')
		exports["vue-easyui"] = factory();
	else
		root["vue-easyui"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var layout = __webpack_require__(1)
	
	
	function plugin(Vue, options) {
	    if (plugin.installed) {
	        console.warn('already installed.')
	        return
	    }
	
	    Vue.directive('e-layout', layout)
	
	}
	
	plugin.version = '0.1'
	
	module.exports = plugin
	
	if (typeof window !== 'undefined' && window.Vue) {
	    console.log('auto install vueasyui.')
	    window.Vue.use(plugin)
	}

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = {
	    bind: function () {
	    },
	    inserted: function (el, binding, vnode, oldVnode) {
	        var modifiers = binding.modifiers
	        var fit = !!modifiers.fit
	        $(el).layout({
	            fit: fit
	        })
	    },
	    update: function () {
	    },
	    componentUpdated: function () {
	    },
	    unbind: function () {
	    }
	}

/***/ }
/******/ ])
});
;
//# sourceMappingURL=vue-easyui.js.map