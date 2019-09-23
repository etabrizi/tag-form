/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// JavaScript Document\n\napp = function () {\n\n    // let taste = `Emyr is the ${initalValue.length} king`  \n\n    let initalValue = ['tom'];\n\n    let length = initalValue.length;\n\n    add = (value) => {\n        // Add either a string or an array of values to the collection\n        typeof (value) === \"object\" ? initalValue = [...initalValue, ...value] : initalValue = [...initalValue, value];\n    }\n\n    remove = (name) => {\n        // Filter out the required names and update the collection\n        if (typeof (name) !== \"object\") {\n            initalValue = initalValue.filter((item) => item !== name);\n        } else {\n            // Filter out the required names from an array of values from the collection\n            for (i = 0; i < name.length; i++) {\n                initalValue = initalValue.filter((item) => item !== name[i]);\n            }\n        }\n    }\n\n    now = () => {\n        // whats the latest collection values\n        return initalValue;\n    }\n\n    reset = () => {\n        //Reset the collection to the original values\n        initalValue = app.initalValue;\n    }\n\n    format = (name) => {\n        return name.map((item, i) => `<li><span>${item}</span><button id=${i} class='remove' href='#'>x</button></li>`).join('');\n    }\n\n    size = () => {\n        //Get back the size of the array\n        return initalValue.length\n    }\n\n    hasWhiteSpace = (name) => {\n        return name.indexOf(' ') >= 0;\n    }\n\n    return {\n        // Public API methods   \n        initalValue: initalValue,\n        length: length,\n        add: add,\n        remove: remove,\n        now: now,\n        size: size,\n        reset: reset,\n        format: format,\n        hasWhiteSpace: hasWhiteSpace\n    }\n}();\n\nconst addForm = document.forms['add-user'];\nconst removeForm = document.forms['remove-user'];\n\n// Apply events to the document object model\n\ndocument.getElementById(\"button\").addEventListener(\"click\", function () {\n    app.reset();\n    document.getElementById(\"message\").innerHTML = app.format(app.now());\n});\n\ndocument.getElementById(\"message\").addEventListener(\"click\", function (e) {\n    if (e.target && e.target.matches(\".remove\")) {\n        app.remove(e.target.parentNode.childNodes[0].textContent);\n        document.getElementById(\"message\").innerHTML = app.format(app.now());\n    }\n});\n\n// Forms have a 'submit' event that we can listen for. They also refresh the page by default\n// That explains e.preventDefault(); below\n\naddForm.addEventListener('submit', function (e) {\n    e.preventDefault();\n    let value = addForm.querySelector('input[type=\"text\"]').value;\n    let collection = value.split(\" \");\n    let filteredCollection = collection.filter((str) => /\\S/.test(str));\n    app.hasWhiteSpace(value) && value.split(\" \")[1].length > 0 ? app.add(filteredCollection) : app.add(value.trim());\n    addForm.reset();\n    document.getElementById(\"message\").innerHTML = app.format(app.now());\n});\n\nremoveForm.addEventListener('submit', function (e) {\n    e.preventDefault();\n    let value = removeForm.querySelector('input[type=\"text\"]').value;\n    app.hasWhiteSpace(value) ? app.remove(value.split(\" \")) : app.remove(value);\n    removeForm.reset();\n    document.getElementById(\"message\").innerHTML = app.format(app.now());\n});\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });