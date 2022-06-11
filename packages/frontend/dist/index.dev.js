/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ var __webpack_modules__ = ({

/***/ "./lib/index.js":
/*!**********************!*\
  !*** ./lib/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _snowblind_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @snowblind/core */ \"./node_modules/@snowblind/core/dist/snowblind.min.js\");\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module './style/main.css'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n\n\nfunction App(props) {\n    return _snowblind_core__WEBPACK_IMPORTED_MODULE_0__.Snowblind.make(\"div\", { class: \"header\" },\n        _snowblind_core__WEBPACK_IMPORTED_MODULE_0__.Snowblind.make(\"p\", null, \"Many\"));\n}\n_snowblind_core__WEBPACK_IMPORTED_MODULE_0__.Snowblind.render(document.body, _snowblind_core__WEBPACK_IMPORTED_MODULE_0__.Snowblind.make(App, null));\n//# sourceMappingURL=index.js.map\n\n//# sourceURL=webpack://@geaves/frontend/./lib/index.js?");

/***/ }),

/***/ "./node_modules/@snowblind/core/dist/snowblind.min.js":
/*!************************************************************!*\
  !*** ./node_modules/@snowblind/core/dist/snowblind.min.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Observable\": () => (/* binding */ f),\n/* harmony export */   \"Snowblind\": () => (/* binding */ p),\n/* harmony export */   \"SnowblindRef\": () => (/* binding */ b),\n/* harmony export */   \"applyChange\": () => (/* binding */ h),\n/* harmony export */   \"applyRef\": () => (/* binding */ v),\n/* harmony export */   \"applyState\": () => (/* binding */ m)\n/* harmony export */ });\nvar e={d:(t,n)=>{for(var s in n)e.o(n,s)&&!e.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:n[s]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)},t={};e.d(t,{y$:()=>n,KS:()=>l,tz:()=>s,vH:()=>a,bk:()=>c,Ei:()=>o});class n{constructor(e){this.value=e,this.subscribers=[]}next(e){this.value=e;for(const t of this.subscribers)t(e)}subscribe(e){this.subscribers.push(e)}complete(){this.subscribers=new Proxy([],{set:()=>{throw new Error(\"Observable has been closed.\")}})}restore(){this.subscribers=[],this.value=void 0}valueOf(){return this.value}toString(){return this.value.toString()}}class s{constructor(){this.current}}const r=new n;function o(e){const t=new n(e);return[t,e=>(t.next(e),e)]}const i=function e(t,n){if(t===n)return!0;if(!(t instanceof Object&&n instanceof Object))return!1;if(t.constructor!==n.constructor)return!1;for(var s in t)if(t.hasOwnProperty(s)){if(!n.hasOwnProperty(s))return!1;if(t[s]!==n[s]){if(\"object\"!=typeof t[s])return!1;if(!e(t[s],n[s]))return!1}}for(s in n)if(n.hasOwnProperty(s)&&!t.hasOwnProperty(s))return!1;return!0};function a(e,t=[]){var s=t.map((e=>e.valueOf()));const o=r.value,a=n=>{if(s.length>0){let r=!1;for(let e=0;e<s.length;e++)if(!i(s[e],t[e].valueOf())){r=!0;break}r&&(e(n),s=t.map((e=>e.valueOf())))}else e(n)};o.onComponentDidMount(a),o.onComponentDidUpdate(a),t.forEach((e=>{e instanceof n&&e.subscribe(a)}))}function c(){return new s}class u{constructor(e,t){this._didUpdateOnce=!1,this.props=e,this.generator=t,this.didMountCallbacks=[],this.didUpdateCallbacks=[],this.willUnmountCallbacks=[],r.next(this),r.restore()}render(){return this.node=this.generator(this.props),this.node}onComponentDidMount(e){this.didMountCallbacks.push(e)}onComponentDidUpdate(e){this.didUpdateCallbacks.push(e)}onComponentWillUnmount(e){this.willUnmountCallbacks.push(e)}didUpdate(){this._didUpdateOnce?this.didUpdateCallbacks.forEach((e=>e(this.node))):(this.didMountCallbacks.forEach((e=>e(this.node))),this._didUpdateOnce=!0)}}function d(e,t){r.next(t),e.appendChild(t.render()),t.didUpdate()}const l={Component:u,Fragment:function(){return document.createDocumentFragment()},make:function(e,t,...r){let o;if(\"function\"==typeof e)return new u(t,e);if(o=document.createElement(e),t)for(const[e,r]of Object.entries(t))if(\"function\"==typeof r){const t=e.replace(/^on/,\"\").toLowerCase();o.addEventListener(t,r)}else if(r instanceof n)r.subscribe((t=>{o.setAttribute(e,t)})),o.setAttribute(e,r.value);else if(\"ref\"===e||r instanceof s)r.current=o;else if(\"object\"==typeof r)if(\"style\"===e)for(const[e,t]of Object.entries(r))t instanceof n&&t.subscribe((t=>{o.style[e]=t})),o.style[e]=t;else if(\"props\"===e)for(const[e,t]of Object.entries(r))t instanceof n&&t.subscribe((t=>{o[e]=t})),o[e]=t;else o.setAttribute(e,JSON.stringify(r));else o.setAttribute(e,r.toString());for(const e of r.flat(1/0))if(e instanceof u)d(o,e),e.didUpdate();else if(e instanceof HTMLElement)o.appendChild(e);else if(e instanceof n){let t=document.createTextNode(e.value);e.subscribe((e=>{t.textContent=e})),o.appendChild(t)}else o.appendChild(document.createTextNode(e));return o},render:d,eventBus:{on(e,t){document.addEventListener(e,(e=>t(e instanceof CustomEvent?e.detail:void 0)))},dispatch(e,t){document.dispatchEvent(new CustomEvent(e,{detail:t}))},remove(e,t){document.removeEventListener(e,t)}}};var f=t.y$,p=t.KS,b=t.tz,h=t.vH,v=t.bk,m=t.Ei;\n\n//# sourceURL=webpack://@geaves/frontend/./node_modules/@snowblind/core/dist/snowblind.min.js?");

/***/ })

/******/ });
/************************************************************************/
/******/ // The module cache
/******/ var __webpack_module_cache__ = {};
/******/ 
/******/ // The require function
/******/ function __webpack_require__(moduleId) {
/******/ 	// Check if module is in cache
/******/ 	var cachedModule = __webpack_module_cache__[moduleId];
/******/ 	if (cachedModule !== undefined) {
/******/ 		return cachedModule.exports;
/******/ 	}
/******/ 	// Create a new module (and put it into the cache)
/******/ 	var module = __webpack_module_cache__[moduleId] = {
/******/ 		// no module.id needed
/******/ 		// no module.loaded needed
/******/ 		exports: {}
/******/ 	};
/******/ 
/******/ 	// Execute the module function
/******/ 	__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 
/******/ 	// Return the exports of the module
/******/ 	return module.exports;
/******/ }
/******/ 
/************************************************************************/
/******/ /* webpack/runtime/define property getters */
/******/ (() => {
/******/ 	// define getter functions for harmony exports
/******/ 	__webpack_require__.d = (exports, definition) => {
/******/ 		for(var key in definition) {
/******/ 			if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 				Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 			}
/******/ 		}
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/hasOwnProperty shorthand */
/******/ (() => {
/******/ 	__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ })();
/******/ 
/******/ /* webpack/runtime/make namespace object */
/******/ (() => {
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = (exports) => {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/ })();
/******/ 
/************************************************************************/
/******/ 
/******/ // startup
/******/ // Load entry module and return exports
/******/ // This entry module can't be inlined because the eval devtool is used.
/******/ var __webpack_exports__ = __webpack_require__("./lib/index.js");
/******/ 
