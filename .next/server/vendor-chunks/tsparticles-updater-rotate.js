"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/tsparticles-updater-rotate";
exports.ids = ["vendor-chunks/tsparticles-updater-rotate"];
exports.modules = {

/***/ "(ssr)/./node_modules/tsparticles-updater-rotate/esm/Options/Classes/Rotate.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/tsparticles-updater-rotate/esm/Options/Classes/Rotate.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Rotate: () => (/* binding */ Rotate)\n/* harmony export */ });\n/* harmony import */ var tsparticles_engine__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tsparticles-engine */ \"(ssr)/./node_modules/tsparticles-engine/esm/Options/Classes/ValueWithRandom.js\");\n/* harmony import */ var _RotateAnimation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RotateAnimation */ \"(ssr)/./node_modules/tsparticles-updater-rotate/esm/Options/Classes/RotateAnimation.js\");\n\n\nclass Rotate extends tsparticles_engine__WEBPACK_IMPORTED_MODULE_0__.ValueWithRandom {\n    constructor(){\n        super();\n        this.animation = new _RotateAnimation__WEBPACK_IMPORTED_MODULE_1__.RotateAnimation();\n        this.direction = \"clockwise\";\n        this.path = false;\n        this.value = 0;\n    }\n    load(data) {\n        if (!data) {\n            return;\n        }\n        super.load(data);\n        if (data.direction !== undefined) {\n            this.direction = data.direction;\n        }\n        this.animation.load(data.animation);\n        if (data.path !== undefined) {\n            this.path = data.path;\n        }\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdHNwYXJ0aWNsZXMtdXBkYXRlci1yb3RhdGUvZXNtL09wdGlvbnMvQ2xhc3Nlcy9Sb3RhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQXNEO0FBQ0Y7QUFDN0MsTUFBTUUsZUFBZUYsK0RBQWVBO0lBQ3ZDRyxhQUFjO1FBQ1YsS0FBSztRQUNMLElBQUksQ0FBQ0MsU0FBUyxHQUFHLElBQUlILDZEQUFlQTtRQUNwQyxJQUFJLENBQUNJLFNBQVMsR0FBRztRQUNqQixJQUFJLENBQUNDLElBQUksR0FBRztRQUNaLElBQUksQ0FBQ0MsS0FBSyxHQUFHO0lBQ2pCO0lBQ0FDLEtBQUtDLElBQUksRUFBRTtRQUNQLElBQUksQ0FBQ0EsTUFBTTtZQUNQO1FBQ0o7UUFDQSxLQUFLLENBQUNELEtBQUtDO1FBQ1gsSUFBSUEsS0FBS0osU0FBUyxLQUFLSyxXQUFXO1lBQzlCLElBQUksQ0FBQ0wsU0FBUyxHQUFHSSxLQUFLSixTQUFTO1FBQ25DO1FBQ0EsSUFBSSxDQUFDRCxTQUFTLENBQUNJLElBQUksQ0FBQ0MsS0FBS0wsU0FBUztRQUNsQyxJQUFJSyxLQUFLSCxJQUFJLEtBQUtJLFdBQVc7WUFDekIsSUFBSSxDQUFDSixJQUFJLEdBQUdHLEtBQUtILElBQUk7UUFDekI7SUFDSjtBQUNKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vbm9kZV9tb2R1bGVzL3RzcGFydGljbGVzLXVwZGF0ZXItcm90YXRlL2VzbS9PcHRpb25zL0NsYXNzZXMvUm90YXRlLmpzP2ZiZDciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVmFsdWVXaXRoUmFuZG9tLCB9IGZyb20gXCJ0c3BhcnRpY2xlcy1lbmdpbmVcIjtcbmltcG9ydCB7IFJvdGF0ZUFuaW1hdGlvbiB9IGZyb20gXCIuL1JvdGF0ZUFuaW1hdGlvblwiO1xuZXhwb3J0IGNsYXNzIFJvdGF0ZSBleHRlbmRzIFZhbHVlV2l0aFJhbmRvbSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuYW5pbWF0aW9uID0gbmV3IFJvdGF0ZUFuaW1hdGlvbigpO1xuICAgICAgICB0aGlzLmRpcmVjdGlvbiA9IFwiY2xvY2t3aXNlXCI7XG4gICAgICAgIHRoaXMucGF0aCA9IGZhbHNlO1xuICAgICAgICB0aGlzLnZhbHVlID0gMDtcbiAgICB9XG4gICAgbG9hZChkYXRhKSB7XG4gICAgICAgIGlmICghZGF0YSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHN1cGVyLmxvYWQoZGF0YSk7XG4gICAgICAgIGlmIChkYXRhLmRpcmVjdGlvbiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLmRpcmVjdGlvbiA9IGRhdGEuZGlyZWN0aW9uO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuYW5pbWF0aW9uLmxvYWQoZGF0YS5hbmltYXRpb24pO1xuICAgICAgICBpZiAoZGF0YS5wYXRoICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRoaXMucGF0aCA9IGRhdGEucGF0aDtcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdLCJuYW1lcyI6WyJWYWx1ZVdpdGhSYW5kb20iLCJSb3RhdGVBbmltYXRpb24iLCJSb3RhdGUiLCJjb25zdHJ1Y3RvciIsImFuaW1hdGlvbiIsImRpcmVjdGlvbiIsInBhdGgiLCJ2YWx1ZSIsImxvYWQiLCJkYXRhIiwidW5kZWZpbmVkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/tsparticles-updater-rotate/esm/Options/Classes/Rotate.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/tsparticles-updater-rotate/esm/Options/Classes/RotateAnimation.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/tsparticles-updater-rotate/esm/Options/Classes/RotateAnimation.js ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   RotateAnimation: () => (/* binding */ RotateAnimation)\n/* harmony export */ });\n/* harmony import */ var tsparticles_engine__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tsparticles-engine */ \"(ssr)/./node_modules/tsparticles-engine/esm/Utils/NumberUtils.js\");\n\nclass RotateAnimation {\n    constructor(){\n        this.enable = false;\n        this.speed = 0;\n        this.decay = 0;\n        this.sync = false;\n    }\n    load(data) {\n        if (!data) {\n            return;\n        }\n        if (data.enable !== undefined) {\n            this.enable = data.enable;\n        }\n        if (data.speed !== undefined) {\n            this.speed = (0,tsparticles_engine__WEBPACK_IMPORTED_MODULE_0__.setRangeValue)(data.speed);\n        }\n        if (data.decay !== undefined) {\n            this.decay = (0,tsparticles_engine__WEBPACK_IMPORTED_MODULE_0__.setRangeValue)(data.decay);\n        }\n        if (data.sync !== undefined) {\n            this.sync = data.sync;\n        }\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdHNwYXJ0aWNsZXMtdXBkYXRlci1yb3RhdGUvZXNtL09wdGlvbnMvQ2xhc3Nlcy9Sb3RhdGVBbmltYXRpb24uanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBbUQ7QUFDNUMsTUFBTUM7SUFDVEMsYUFBYztRQUNWLElBQUksQ0FBQ0MsTUFBTSxHQUFHO1FBQ2QsSUFBSSxDQUFDQyxLQUFLLEdBQUc7UUFDYixJQUFJLENBQUNDLEtBQUssR0FBRztRQUNiLElBQUksQ0FBQ0MsSUFBSSxHQUFHO0lBQ2hCO0lBQ0FDLEtBQUtDLElBQUksRUFBRTtRQUNQLElBQUksQ0FBQ0EsTUFBTTtZQUNQO1FBQ0o7UUFDQSxJQUFJQSxLQUFLTCxNQUFNLEtBQUtNLFdBQVc7WUFDM0IsSUFBSSxDQUFDTixNQUFNLEdBQUdLLEtBQUtMLE1BQU07UUFDN0I7UUFDQSxJQUFJSyxLQUFLSixLQUFLLEtBQUtLLFdBQVc7WUFDMUIsSUFBSSxDQUFDTCxLQUFLLEdBQUdKLGlFQUFhQSxDQUFDUSxLQUFLSixLQUFLO1FBQ3pDO1FBQ0EsSUFBSUksS0FBS0gsS0FBSyxLQUFLSSxXQUFXO1lBQzFCLElBQUksQ0FBQ0osS0FBSyxHQUFHTCxpRUFBYUEsQ0FBQ1EsS0FBS0gsS0FBSztRQUN6QztRQUNBLElBQUlHLEtBQUtGLElBQUksS0FBS0csV0FBVztZQUN6QixJQUFJLENBQUNILElBQUksR0FBR0UsS0FBS0YsSUFBSTtRQUN6QjtJQUNKO0FBQ0oiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9ub2RlX21vZHVsZXMvdHNwYXJ0aWNsZXMtdXBkYXRlci1yb3RhdGUvZXNtL09wdGlvbnMvQ2xhc3Nlcy9Sb3RhdGVBbmltYXRpb24uanM/ZTg3MiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBzZXRSYW5nZVZhbHVlIH0gZnJvbSBcInRzcGFydGljbGVzLWVuZ2luZVwiO1xuZXhwb3J0IGNsYXNzIFJvdGF0ZUFuaW1hdGlvbiB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuZW5hYmxlID0gZmFsc2U7XG4gICAgICAgIHRoaXMuc3BlZWQgPSAwO1xuICAgICAgICB0aGlzLmRlY2F5ID0gMDtcbiAgICAgICAgdGhpcy5zeW5jID0gZmFsc2U7XG4gICAgfVxuICAgIGxvYWQoZGF0YSkge1xuICAgICAgICBpZiAoIWRhdGEpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZGF0YS5lbmFibGUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhpcy5lbmFibGUgPSBkYXRhLmVuYWJsZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZGF0YS5zcGVlZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLnNwZWVkID0gc2V0UmFuZ2VWYWx1ZShkYXRhLnNwZWVkKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZGF0YS5kZWNheSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLmRlY2F5ID0gc2V0UmFuZ2VWYWx1ZShkYXRhLmRlY2F5KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZGF0YS5zeW5jICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRoaXMuc3luYyA9IGRhdGEuc3luYztcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdLCJuYW1lcyI6WyJzZXRSYW5nZVZhbHVlIiwiUm90YXRlQW5pbWF0aW9uIiwiY29uc3RydWN0b3IiLCJlbmFibGUiLCJzcGVlZCIsImRlY2F5Iiwic3luYyIsImxvYWQiLCJkYXRhIiwidW5kZWZpbmVkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/tsparticles-updater-rotate/esm/Options/Classes/RotateAnimation.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/tsparticles-updater-rotate/esm/RotateUpdater.js":
/*!**********************************************************************!*\
  !*** ./node_modules/tsparticles-updater-rotate/esm/RotateUpdater.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   RotateUpdater: () => (/* binding */ RotateUpdater)\n/* harmony export */ });\n/* harmony import */ var tsparticles_engine__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tsparticles-engine */ \"(ssr)/./node_modules/tsparticles-engine/esm/Utils/NumberUtils.js\");\n/* harmony import */ var _Options_Classes_Rotate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Options/Classes/Rotate */ \"(ssr)/./node_modules/tsparticles-updater-rotate/esm/Options/Classes/Rotate.js\");\n\n\nfunction updateRotate(particle, delta) {\n    const rotate = particle.rotate, rotateOptions = particle.options.rotate;\n    if (!rotate || !rotateOptions) {\n        return;\n    }\n    const rotateAnimation = rotateOptions.animation, speed = (rotate.velocity ?? 0) * delta.factor, max = 2 * Math.PI, decay = rotate.decay ?? 1;\n    if (!rotateAnimation.enable) {\n        return;\n    }\n    switch(rotate.status){\n        case \"increasing\":\n            rotate.value += speed;\n            if (rotate.value > max) {\n                rotate.value -= max;\n            }\n            break;\n        case \"decreasing\":\n        default:\n            rotate.value -= speed;\n            if (rotate.value < 0) {\n                rotate.value += max;\n            }\n            break;\n    }\n    if (rotate.velocity && decay !== 1) {\n        rotate.velocity *= decay;\n    }\n}\nclass RotateUpdater {\n    constructor(container){\n        this.container = container;\n    }\n    init(particle) {\n        const rotateOptions = particle.options.rotate;\n        if (!rotateOptions) {\n            return;\n        }\n        particle.rotate = {\n            enable: rotateOptions.animation.enable,\n            value: (0,tsparticles_engine__WEBPACK_IMPORTED_MODULE_0__.getRangeValue)(rotateOptions.value) * Math.PI / 180\n        };\n        particle.pathRotation = rotateOptions.path;\n        let rotateDirection = rotateOptions.direction;\n        if (rotateDirection === \"random\") {\n            const index = Math.floor((0,tsparticles_engine__WEBPACK_IMPORTED_MODULE_0__.getRandom)() * 2);\n            rotateDirection = index > 0 ? \"counter-clockwise\" : \"clockwise\";\n        }\n        switch(rotateDirection){\n            case \"counter-clockwise\":\n            case \"counterClockwise\":\n                particle.rotate.status = \"decreasing\";\n                break;\n            case \"clockwise\":\n                particle.rotate.status = \"increasing\";\n                break;\n        }\n        const rotateAnimation = rotateOptions.animation;\n        if (rotateAnimation.enable) {\n            particle.rotate.decay = 1 - (0,tsparticles_engine__WEBPACK_IMPORTED_MODULE_0__.getRangeValue)(rotateAnimation.decay);\n            particle.rotate.velocity = (0,tsparticles_engine__WEBPACK_IMPORTED_MODULE_0__.getRangeValue)(rotateAnimation.speed) / 360 * this.container.retina.reduceFactor;\n            if (!rotateAnimation.sync) {\n                particle.rotate.velocity *= (0,tsparticles_engine__WEBPACK_IMPORTED_MODULE_0__.getRandom)();\n            }\n        }\n        particle.rotation = particle.rotate.value;\n    }\n    isEnabled(particle) {\n        const rotate = particle.options.rotate;\n        if (!rotate) {\n            return false;\n        }\n        return !particle.destroyed && !particle.spawning && rotate.animation.enable && !rotate.path;\n    }\n    loadOptions(options, ...sources) {\n        if (!options.rotate) {\n            options.rotate = new _Options_Classes_Rotate__WEBPACK_IMPORTED_MODULE_1__.Rotate();\n        }\n        for (const source of sources){\n            options.rotate.load(source?.rotate);\n        }\n    }\n    update(particle, delta) {\n        if (!this.isEnabled(particle)) {\n            return;\n        }\n        updateRotate(particle, delta);\n        particle.rotation = particle.rotate?.value ?? 0;\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdHNwYXJ0aWNsZXMtdXBkYXRlci1yb3RhdGUvZXNtL1JvdGF0ZVVwZGF0ZXIuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQStEO0FBQ2I7QUFDbEQsU0FBU0csYUFBYUMsUUFBUSxFQUFFQyxLQUFLO0lBQ2pDLE1BQU1DLFNBQVNGLFNBQVNFLE1BQU0sRUFBRUMsZ0JBQWdCSCxTQUFTSSxPQUFPLENBQUNGLE1BQU07SUFDdkUsSUFBSSxDQUFDQSxVQUFVLENBQUNDLGVBQWU7UUFDM0I7SUFDSjtJQUNBLE1BQU1FLGtCQUFrQkYsY0FBY0csU0FBUyxFQUFFQyxRQUFRLENBQUNMLE9BQU9NLFFBQVEsSUFBSSxLQUFLUCxNQUFNUSxNQUFNLEVBQUVDLE1BQU0sSUFBSUMsS0FBS0MsRUFBRSxFQUFFQyxRQUFRWCxPQUFPVyxLQUFLLElBQUk7SUFDM0ksSUFBSSxDQUFDUixnQkFBZ0JTLE1BQU0sRUFBRTtRQUN6QjtJQUNKO0lBQ0EsT0FBUVosT0FBT2EsTUFBTTtRQUNqQixLQUFLO1lBQ0RiLE9BQU9jLEtBQUssSUFBSVQ7WUFDaEIsSUFBSUwsT0FBT2MsS0FBSyxHQUFHTixLQUFLO2dCQUNwQlIsT0FBT2MsS0FBSyxJQUFJTjtZQUNwQjtZQUNBO1FBQ0osS0FBSztRQUNMO1lBQ0lSLE9BQU9jLEtBQUssSUFBSVQ7WUFDaEIsSUFBSUwsT0FBT2MsS0FBSyxHQUFHLEdBQUc7Z0JBQ2xCZCxPQUFPYyxLQUFLLElBQUlOO1lBQ3BCO1lBQ0E7SUFDUjtJQUNBLElBQUlSLE9BQU9NLFFBQVEsSUFBSUssVUFBVSxHQUFHO1FBQ2hDWCxPQUFPTSxRQUFRLElBQUlLO0lBQ3ZCO0FBQ0o7QUFDTyxNQUFNSTtJQUNUQyxZQUFZQyxTQUFTLENBQUU7UUFDbkIsSUFBSSxDQUFDQSxTQUFTLEdBQUdBO0lBQ3JCO0lBQ0FDLEtBQUtwQixRQUFRLEVBQUU7UUFDWCxNQUFNRyxnQkFBZ0JILFNBQVNJLE9BQU8sQ0FBQ0YsTUFBTTtRQUM3QyxJQUFJLENBQUNDLGVBQWU7WUFDaEI7UUFDSjtRQUNBSCxTQUFTRSxNQUFNLEdBQUc7WUFDZFksUUFBUVgsY0FBY0csU0FBUyxDQUFDUSxNQUFNO1lBQ3RDRSxPQUFPLGtFQUFlYixjQUFjYSxLQUFLLElBQUlMLEtBQUtDLEVBQUUsR0FBSTtRQUM1RDtRQUNBWixTQUFTcUIsWUFBWSxHQUFHbEIsY0FBY21CLElBQUk7UUFDMUMsSUFBSUMsa0JBQWtCcEIsY0FBY3FCLFNBQVM7UUFDN0MsSUFBSUQsb0JBQW9CLFVBQVU7WUFDOUIsTUFBTUUsUUFBUWQsS0FBS2UsS0FBSyxDQUFDOUIsNkRBQVNBLEtBQUs7WUFDdkMyQixrQkFBa0JFLFFBQVEsSUFBSSxzQkFBc0I7UUFDeEQ7UUFDQSxPQUFRRjtZQUNKLEtBQUs7WUFDTCxLQUFLO2dCQUNEdkIsU0FBU0UsTUFBTSxDQUFDYSxNQUFNLEdBQUc7Z0JBQ3pCO1lBQ0osS0FBSztnQkFDRGYsU0FBU0UsTUFBTSxDQUFDYSxNQUFNLEdBQUc7Z0JBQ3pCO1FBQ1I7UUFDQSxNQUFNVixrQkFBa0JGLGNBQWNHLFNBQVM7UUFDL0MsSUFBSUQsZ0JBQWdCUyxNQUFNLEVBQUU7WUFDeEJkLFNBQVNFLE1BQU0sQ0FBQ1csS0FBSyxHQUFHLElBQUloQixpRUFBYUEsQ0FBQ1EsZ0JBQWdCUSxLQUFLO1lBQy9EYixTQUFTRSxNQUFNLENBQUNNLFFBQVEsR0FDcEIsa0VBQWVILGdCQUFnQkUsS0FBSyxJQUFJLE1BQU8sSUFBSSxDQUFDWSxTQUFTLENBQUNRLE1BQU0sQ0FBQ0MsWUFBWTtZQUNyRixJQUFJLENBQUN2QixnQkFBZ0J3QixJQUFJLEVBQUU7Z0JBQ3ZCN0IsU0FBU0UsTUFBTSxDQUFDTSxRQUFRLElBQUlaLDZEQUFTQTtZQUN6QztRQUNKO1FBQ0FJLFNBQVM4QixRQUFRLEdBQUc5QixTQUFTRSxNQUFNLENBQUNjLEtBQUs7SUFDN0M7SUFDQWUsVUFBVS9CLFFBQVEsRUFBRTtRQUNoQixNQUFNRSxTQUFTRixTQUFTSSxPQUFPLENBQUNGLE1BQU07UUFDdEMsSUFBSSxDQUFDQSxRQUFRO1lBQ1QsT0FBTztRQUNYO1FBQ0EsT0FBTyxDQUFDRixTQUFTZ0MsU0FBUyxJQUFJLENBQUNoQyxTQUFTaUMsUUFBUSxJQUFJL0IsT0FBT0ksU0FBUyxDQUFDUSxNQUFNLElBQUksQ0FBQ1osT0FBT29CLElBQUk7SUFDL0Y7SUFDQVksWUFBWTlCLE9BQU8sRUFBRSxHQUFHK0IsT0FBTyxFQUFFO1FBQzdCLElBQUksQ0FBQy9CLFFBQVFGLE1BQU0sRUFBRTtZQUNqQkUsUUFBUUYsTUFBTSxHQUFHLElBQUlKLDJEQUFNQTtRQUMvQjtRQUNBLEtBQUssTUFBTXNDLFVBQVVELFFBQVM7WUFDMUIvQixRQUFRRixNQUFNLENBQUNtQyxJQUFJLENBQUNELFFBQVFsQztRQUNoQztJQUNKO0lBQ0FvQyxPQUFPdEMsUUFBUSxFQUFFQyxLQUFLLEVBQUU7UUFDcEIsSUFBSSxDQUFDLElBQUksQ0FBQzhCLFNBQVMsQ0FBQy9CLFdBQVc7WUFDM0I7UUFDSjtRQUNBRCxhQUFhQyxVQUFVQztRQUN2QkQsU0FBUzhCLFFBQVEsR0FBRzlCLFNBQVNFLE1BQU0sRUFBRWMsU0FBUztJQUNsRDtBQUNKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vbm9kZV9tb2R1bGVzL3RzcGFydGljbGVzLXVwZGF0ZXItcm90YXRlL2VzbS9Sb3RhdGVVcGRhdGVyLmpzPzIwZjAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ2V0UmFuZG9tLCBnZXRSYW5nZVZhbHVlLCB9IGZyb20gXCJ0c3BhcnRpY2xlcy1lbmdpbmVcIjtcbmltcG9ydCB7IFJvdGF0ZSB9IGZyb20gXCIuL09wdGlvbnMvQ2xhc3Nlcy9Sb3RhdGVcIjtcbmZ1bmN0aW9uIHVwZGF0ZVJvdGF0ZShwYXJ0aWNsZSwgZGVsdGEpIHtcbiAgICBjb25zdCByb3RhdGUgPSBwYXJ0aWNsZS5yb3RhdGUsIHJvdGF0ZU9wdGlvbnMgPSBwYXJ0aWNsZS5vcHRpb25zLnJvdGF0ZTtcbiAgICBpZiAoIXJvdGF0ZSB8fCAhcm90YXRlT3B0aW9ucykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHJvdGF0ZUFuaW1hdGlvbiA9IHJvdGF0ZU9wdGlvbnMuYW5pbWF0aW9uLCBzcGVlZCA9IChyb3RhdGUudmVsb2NpdHkgPz8gMCkgKiBkZWx0YS5mYWN0b3IsIG1heCA9IDIgKiBNYXRoLlBJLCBkZWNheSA9IHJvdGF0ZS5kZWNheSA/PyAxO1xuICAgIGlmICghcm90YXRlQW5pbWF0aW9uLmVuYWJsZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHN3aXRjaCAocm90YXRlLnN0YXR1cykge1xuICAgICAgICBjYXNlIFwiaW5jcmVhc2luZ1wiOlxuICAgICAgICAgICAgcm90YXRlLnZhbHVlICs9IHNwZWVkO1xuICAgICAgICAgICAgaWYgKHJvdGF0ZS52YWx1ZSA+IG1heCkge1xuICAgICAgICAgICAgICAgIHJvdGF0ZS52YWx1ZSAtPSBtYXg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcImRlY3JlYXNpbmdcIjpcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJvdGF0ZS52YWx1ZSAtPSBzcGVlZDtcbiAgICAgICAgICAgIGlmIChyb3RhdGUudmFsdWUgPCAwKSB7XG4gICAgICAgICAgICAgICAgcm90YXRlLnZhbHVlICs9IG1heDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBpZiAocm90YXRlLnZlbG9jaXR5ICYmIGRlY2F5ICE9PSAxKSB7XG4gICAgICAgIHJvdGF0ZS52ZWxvY2l0eSAqPSBkZWNheTtcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgUm90YXRlVXBkYXRlciB7XG4gICAgY29uc3RydWN0b3IoY29udGFpbmVyKSB7XG4gICAgICAgIHRoaXMuY29udGFpbmVyID0gY29udGFpbmVyO1xuICAgIH1cbiAgICBpbml0KHBhcnRpY2xlKSB7XG4gICAgICAgIGNvbnN0IHJvdGF0ZU9wdGlvbnMgPSBwYXJ0aWNsZS5vcHRpb25zLnJvdGF0ZTtcbiAgICAgICAgaWYgKCFyb3RhdGVPcHRpb25zKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgcGFydGljbGUucm90YXRlID0ge1xuICAgICAgICAgICAgZW5hYmxlOiByb3RhdGVPcHRpb25zLmFuaW1hdGlvbi5lbmFibGUsXG4gICAgICAgICAgICB2YWx1ZTogKGdldFJhbmdlVmFsdWUocm90YXRlT3B0aW9ucy52YWx1ZSkgKiBNYXRoLlBJKSAvIDE4MCxcbiAgICAgICAgfTtcbiAgICAgICAgcGFydGljbGUucGF0aFJvdGF0aW9uID0gcm90YXRlT3B0aW9ucy5wYXRoO1xuICAgICAgICBsZXQgcm90YXRlRGlyZWN0aW9uID0gcm90YXRlT3B0aW9ucy5kaXJlY3Rpb247XG4gICAgICAgIGlmIChyb3RhdGVEaXJlY3Rpb24gPT09IFwicmFuZG9tXCIpIHtcbiAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gTWF0aC5mbG9vcihnZXRSYW5kb20oKSAqIDIpO1xuICAgICAgICAgICAgcm90YXRlRGlyZWN0aW9uID0gaW5kZXggPiAwID8gXCJjb3VudGVyLWNsb2Nrd2lzZVwiIDogXCJjbG9ja3dpc2VcIjtcbiAgICAgICAgfVxuICAgICAgICBzd2l0Y2ggKHJvdGF0ZURpcmVjdGlvbikge1xuICAgICAgICAgICAgY2FzZSBcImNvdW50ZXItY2xvY2t3aXNlXCI6XG4gICAgICAgICAgICBjYXNlIFwiY291bnRlckNsb2Nrd2lzZVwiOlxuICAgICAgICAgICAgICAgIHBhcnRpY2xlLnJvdGF0ZS5zdGF0dXMgPSBcImRlY3JlYXNpbmdcIjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJjbG9ja3dpc2VcIjpcbiAgICAgICAgICAgICAgICBwYXJ0aWNsZS5yb3RhdGUuc3RhdHVzID0gXCJpbmNyZWFzaW5nXCI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgcm90YXRlQW5pbWF0aW9uID0gcm90YXRlT3B0aW9ucy5hbmltYXRpb247XG4gICAgICAgIGlmIChyb3RhdGVBbmltYXRpb24uZW5hYmxlKSB7XG4gICAgICAgICAgICBwYXJ0aWNsZS5yb3RhdGUuZGVjYXkgPSAxIC0gZ2V0UmFuZ2VWYWx1ZShyb3RhdGVBbmltYXRpb24uZGVjYXkpO1xuICAgICAgICAgICAgcGFydGljbGUucm90YXRlLnZlbG9jaXR5ID1cbiAgICAgICAgICAgICAgICAoZ2V0UmFuZ2VWYWx1ZShyb3RhdGVBbmltYXRpb24uc3BlZWQpIC8gMzYwKSAqIHRoaXMuY29udGFpbmVyLnJldGluYS5yZWR1Y2VGYWN0b3I7XG4gICAgICAgICAgICBpZiAoIXJvdGF0ZUFuaW1hdGlvbi5zeW5jKSB7XG4gICAgICAgICAgICAgICAgcGFydGljbGUucm90YXRlLnZlbG9jaXR5ICo9IGdldFJhbmRvbSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHBhcnRpY2xlLnJvdGF0aW9uID0gcGFydGljbGUucm90YXRlLnZhbHVlO1xuICAgIH1cbiAgICBpc0VuYWJsZWQocGFydGljbGUpIHtcbiAgICAgICAgY29uc3Qgcm90YXRlID0gcGFydGljbGUub3B0aW9ucy5yb3RhdGU7XG4gICAgICAgIGlmICghcm90YXRlKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuICFwYXJ0aWNsZS5kZXN0cm95ZWQgJiYgIXBhcnRpY2xlLnNwYXduaW5nICYmIHJvdGF0ZS5hbmltYXRpb24uZW5hYmxlICYmICFyb3RhdGUucGF0aDtcbiAgICB9XG4gICAgbG9hZE9wdGlvbnMob3B0aW9ucywgLi4uc291cmNlcykge1xuICAgICAgICBpZiAoIW9wdGlvbnMucm90YXRlKSB7XG4gICAgICAgICAgICBvcHRpb25zLnJvdGF0ZSA9IG5ldyBSb3RhdGUoKTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGNvbnN0IHNvdXJjZSBvZiBzb3VyY2VzKSB7XG4gICAgICAgICAgICBvcHRpb25zLnJvdGF0ZS5sb2FkKHNvdXJjZT8ucm90YXRlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICB1cGRhdGUocGFydGljbGUsIGRlbHRhKSB7XG4gICAgICAgIGlmICghdGhpcy5pc0VuYWJsZWQocGFydGljbGUpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdXBkYXRlUm90YXRlKHBhcnRpY2xlLCBkZWx0YSk7XG4gICAgICAgIHBhcnRpY2xlLnJvdGF0aW9uID0gcGFydGljbGUucm90YXRlPy52YWx1ZSA/PyAwO1xuICAgIH1cbn1cbiJdLCJuYW1lcyI6WyJnZXRSYW5kb20iLCJnZXRSYW5nZVZhbHVlIiwiUm90YXRlIiwidXBkYXRlUm90YXRlIiwicGFydGljbGUiLCJkZWx0YSIsInJvdGF0ZSIsInJvdGF0ZU9wdGlvbnMiLCJvcHRpb25zIiwicm90YXRlQW5pbWF0aW9uIiwiYW5pbWF0aW9uIiwic3BlZWQiLCJ2ZWxvY2l0eSIsImZhY3RvciIsIm1heCIsIk1hdGgiLCJQSSIsImRlY2F5IiwiZW5hYmxlIiwic3RhdHVzIiwidmFsdWUiLCJSb3RhdGVVcGRhdGVyIiwiY29uc3RydWN0b3IiLCJjb250YWluZXIiLCJpbml0IiwicGF0aFJvdGF0aW9uIiwicGF0aCIsInJvdGF0ZURpcmVjdGlvbiIsImRpcmVjdGlvbiIsImluZGV4IiwiZmxvb3IiLCJyZXRpbmEiLCJyZWR1Y2VGYWN0b3IiLCJzeW5jIiwicm90YXRpb24iLCJpc0VuYWJsZWQiLCJkZXN0cm95ZWQiLCJzcGF3bmluZyIsImxvYWRPcHRpb25zIiwic291cmNlcyIsInNvdXJjZSIsImxvYWQiLCJ1cGRhdGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/tsparticles-updater-rotate/esm/RotateUpdater.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/tsparticles-updater-rotate/esm/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/tsparticles-updater-rotate/esm/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadRotateUpdater: () => (/* binding */ loadRotateUpdater)\n/* harmony export */ });\n/* harmony import */ var _RotateUpdater__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RotateUpdater */ \"(ssr)/./node_modules/tsparticles-updater-rotate/esm/RotateUpdater.js\");\n\nasync function loadRotateUpdater(engine, refresh = true) {\n    await engine.addParticleUpdater(\"rotate\", (container)=>new _RotateUpdater__WEBPACK_IMPORTED_MODULE_0__.RotateUpdater(container), refresh);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdHNwYXJ0aWNsZXMtdXBkYXRlci1yb3RhdGUvZXNtL2luZGV4LmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQWdEO0FBQ3pDLGVBQWVDLGtCQUFrQkMsTUFBTSxFQUFFQyxVQUFVLElBQUk7SUFDMUQsTUFBTUQsT0FBT0Usa0JBQWtCLENBQUMsVUFBVSxDQUFDQyxZQUFjLElBQUlMLHlEQUFhQSxDQUFDSyxZQUFZRjtBQUMzRiIsInNvdXJjZXMiOlsid2VicGFjazovL3BvcnRmb2xpby8uL25vZGVfbW9kdWxlcy90c3BhcnRpY2xlcy11cGRhdGVyLXJvdGF0ZS9lc20vaW5kZXguanM/Y2ZmMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSb3RhdGVVcGRhdGVyIH0gZnJvbSBcIi4vUm90YXRlVXBkYXRlclwiO1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxvYWRSb3RhdGVVcGRhdGVyKGVuZ2luZSwgcmVmcmVzaCA9IHRydWUpIHtcbiAgICBhd2FpdCBlbmdpbmUuYWRkUGFydGljbGVVcGRhdGVyKFwicm90YXRlXCIsIChjb250YWluZXIpID0+IG5ldyBSb3RhdGVVcGRhdGVyKGNvbnRhaW5lciksIHJlZnJlc2gpO1xufVxuIl0sIm5hbWVzIjpbIlJvdGF0ZVVwZGF0ZXIiLCJsb2FkUm90YXRlVXBkYXRlciIsImVuZ2luZSIsInJlZnJlc2giLCJhZGRQYXJ0aWNsZVVwZGF0ZXIiLCJjb250YWluZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/tsparticles-updater-rotate/esm/index.js\n");

/***/ })

};
;