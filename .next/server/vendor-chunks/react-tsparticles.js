"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/react-tsparticles";
exports.ids = ["vendor-chunks/react-tsparticles"];
exports.modules = {

/***/ "(ssr)/./node_modules/react-tsparticles/esm/Particles.js":
/*!*********************************************************!*\
  !*** ./node_modules/react-tsparticles/esm/Particles.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var tsparticles_engine__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tsparticles-engine */ \"(ssr)/./node_modules/tsparticles-engine/esm/index.js\");\n/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Utils */ \"(ssr)/./node_modules/react-tsparticles/esm/Utils.js\");\n\n\n\nconst defaultId = \"tsparticles\";\nclass Particles extends react__WEBPACK_IMPORTED_MODULE_0__.Component {\n    constructor(props){\n        super(props);\n        this.state = {\n            init: false,\n            library: undefined\n        };\n    }\n    destroy() {\n        if (!this.state.library) {\n            return;\n        }\n        this.state.library.destroy();\n        this.setState({\n            library: undefined\n        });\n    }\n    shouldComponentUpdate(nextProps) {\n        const nextOptions = nextProps.options ?? nextProps.params, currentOptions = this.props.options ?? this.props.params;\n        return nextProps.url !== this.props.url || nextProps.id !== this.props.id || nextProps.canvasClassName !== this.props.canvasClassName || nextProps.className !== this.props.className || nextProps.height !== this.props.height || nextProps.width !== this.props.width || !(0,_Utils__WEBPACK_IMPORTED_MODULE_1__.deepCompare)(nextProps.style, this.props.style) || nextProps.init !== this.props.init || nextProps.loaded !== this.props.loaded || !(0,_Utils__WEBPACK_IMPORTED_MODULE_1__.deepCompare)(nextOptions, currentOptions, (key)=>key.startsWith(\"_\"));\n    }\n    componentDidUpdate() {\n        this.refresh();\n    }\n    forceUpdate() {\n        this.refresh().then(()=>{\n            super.forceUpdate();\n        });\n    }\n    componentDidMount() {\n        (async ()=>{\n            if (this.props.init) {\n                await this.props.init(tsparticles_engine__WEBPACK_IMPORTED_MODULE_2__.tsParticles);\n            }\n            this.setState({\n                init: true\n            }, async ()=>{\n                await this.loadParticles();\n            });\n        })();\n    }\n    componentWillUnmount() {\n        this.destroy();\n    }\n    render() {\n        const { width, height, className, canvasClassName, id } = this.props;\n        return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n            className: className,\n            id: id\n        }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"canvas\", {\n            className: canvasClassName,\n            style: {\n                ...this.props.style,\n                width,\n                height\n            }\n        }));\n    }\n    async refresh() {\n        this.destroy();\n        await this.loadParticles();\n    }\n    async loadParticles() {\n        if (!this.state.init) {\n            return;\n        }\n        const id = this.props.id ?? Particles.defaultProps.id ?? defaultId, container = await tsparticles_engine__WEBPACK_IMPORTED_MODULE_2__.tsParticles.load({\n            url: this.props.url,\n            id,\n            options: this.props.options ?? this.props.params\n        });\n        if (this.props.container) {\n            this.props.container.current = container;\n        }\n        this.setState({\n            library: container\n        });\n        if (this.props.loaded) {\n            await this.props.loaded(container);\n        }\n    }\n}\nParticles.defaultProps = {\n    width: \"100%\",\n    height: \"100%\",\n    options: {},\n    style: {},\n    url: undefined,\n    id: defaultId\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Particles);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvcmVhY3QtdHNwYXJ0aWNsZXMvZXNtL1BhcnRpY2xlcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUF5QztBQUNRO0FBQ1g7QUFDdEMsTUFBTUksWUFBWTtBQUNsQixNQUFNQyxrQkFBa0JKLDRDQUFTQTtJQUM3QkssWUFBWUMsS0FBSyxDQUFFO1FBQ2YsS0FBSyxDQUFDQTtRQUNOLElBQUksQ0FBQ0MsS0FBSyxHQUFHO1lBQ1RDLE1BQU07WUFDTkMsU0FBU0M7UUFDYjtJQUNKO0lBQ0FDLFVBQVU7UUFDTixJQUFJLENBQUMsSUFBSSxDQUFDSixLQUFLLENBQUNFLE9BQU8sRUFBRTtZQUNyQjtRQUNKO1FBQ0EsSUFBSSxDQUFDRixLQUFLLENBQUNFLE9BQU8sQ0FBQ0UsT0FBTztRQUMxQixJQUFJLENBQUNDLFFBQVEsQ0FBQztZQUNWSCxTQUFTQztRQUNiO0lBQ0o7SUFDQUcsc0JBQXNCQyxTQUFTLEVBQUU7UUFDN0IsTUFBTUMsY0FBY0QsVUFBVUUsT0FBTyxJQUFJRixVQUFVRyxNQUFNLEVBQUVDLGlCQUFpQixJQUFJLENBQUNaLEtBQUssQ0FBQ1UsT0FBTyxJQUFJLElBQUksQ0FBQ1YsS0FBSyxDQUFDVyxNQUFNO1FBQ25ILE9BQVFILFVBQVVLLEdBQUcsS0FBSyxJQUFJLENBQUNiLEtBQUssQ0FBQ2EsR0FBRyxJQUNwQ0wsVUFBVU0sRUFBRSxLQUFLLElBQUksQ0FBQ2QsS0FBSyxDQUFDYyxFQUFFLElBQzlCTixVQUFVTyxlQUFlLEtBQUssSUFBSSxDQUFDZixLQUFLLENBQUNlLGVBQWUsSUFDeERQLFVBQVVRLFNBQVMsS0FBSyxJQUFJLENBQUNoQixLQUFLLENBQUNnQixTQUFTLElBQzVDUixVQUFVUyxNQUFNLEtBQUssSUFBSSxDQUFDakIsS0FBSyxDQUFDaUIsTUFBTSxJQUN0Q1QsVUFBVVUsS0FBSyxLQUFLLElBQUksQ0FBQ2xCLEtBQUssQ0FBQ2tCLEtBQUssSUFDcEMsQ0FBQ3RCLG1EQUFXQSxDQUFDWSxVQUFVVyxLQUFLLEVBQUUsSUFBSSxDQUFDbkIsS0FBSyxDQUFDbUIsS0FBSyxLQUM5Q1gsVUFBVU4sSUFBSSxLQUFLLElBQUksQ0FBQ0YsS0FBSyxDQUFDRSxJQUFJLElBQ2xDTSxVQUFVWSxNQUFNLEtBQUssSUFBSSxDQUFDcEIsS0FBSyxDQUFDb0IsTUFBTSxJQUN0QyxDQUFDeEIsbURBQVdBLENBQUNhLGFBQWFHLGdCQUFnQlMsQ0FBQUEsTUFBT0EsSUFBSUMsVUFBVSxDQUFDO0lBQ3hFO0lBQ0FDLHFCQUFxQjtRQUNqQixJQUFJLENBQUNDLE9BQU87SUFDaEI7SUFDQUMsY0FBYztRQUNWLElBQUksQ0FBQ0QsT0FBTyxHQUFHRSxJQUFJLENBQUM7WUFDaEIsS0FBSyxDQUFDRDtRQUNWO0lBQ0o7SUFDQUUsb0JBQW9CO1FBQ2Y7WUFDRyxJQUFJLElBQUksQ0FBQzNCLEtBQUssQ0FBQ0UsSUFBSSxFQUFFO2dCQUNqQixNQUFNLElBQUksQ0FBQ0YsS0FBSyxDQUFDRSxJQUFJLENBQUNQLDJEQUFXQTtZQUNyQztZQUNBLElBQUksQ0FBQ1csUUFBUSxDQUFDO2dCQUNWSixNQUFNO1lBQ1YsR0FBRztnQkFDQyxNQUFNLElBQUksQ0FBQzBCLGFBQWE7WUFDNUI7UUFDSjtJQUNKO0lBQ0FDLHVCQUF1QjtRQUNuQixJQUFJLENBQUN4QixPQUFPO0lBQ2hCO0lBQ0F5QixTQUFTO1FBQ0wsTUFBTSxFQUFFWixLQUFLLEVBQUVELE1BQU0sRUFBRUQsU0FBUyxFQUFFRCxlQUFlLEVBQUVELEVBQUUsRUFBRSxHQUFHLElBQUksQ0FBQ2QsS0FBSztRQUNwRSxxQkFBUVAsMERBQW1CLENBQUMsT0FBTztZQUFFdUIsV0FBV0E7WUFBV0YsSUFBSUE7UUFBRyxpQkFDOURyQiwwREFBbUIsQ0FBQyxVQUFVO1lBQUV1QixXQUFXRDtZQUFpQkksT0FBTztnQkFDM0QsR0FBRyxJQUFJLENBQUNuQixLQUFLLENBQUNtQixLQUFLO2dCQUNuQkQ7Z0JBQ0FEO1lBQ0o7UUFBRTtJQUNkO0lBQ0EsTUFBTU8sVUFBVTtRQUNaLElBQUksQ0FBQ25CLE9BQU87UUFDWixNQUFNLElBQUksQ0FBQ3VCLGFBQWE7SUFDNUI7SUFDQSxNQUFNQSxnQkFBZ0I7UUFDbEIsSUFBSSxDQUFDLElBQUksQ0FBQzNCLEtBQUssQ0FBQ0MsSUFBSSxFQUFFO1lBQ2xCO1FBQ0o7UUFDQSxNQUFNWSxLQUFLLElBQUksQ0FBQ2QsS0FBSyxDQUFDYyxFQUFFLElBQUloQixVQUFVa0MsWUFBWSxDQUFDbEIsRUFBRSxJQUFJakIsV0FBV29DLFlBQVksTUFBTXRDLDJEQUFXQSxDQUFDdUMsSUFBSSxDQUFDO1lBQ25HckIsS0FBSyxJQUFJLENBQUNiLEtBQUssQ0FBQ2EsR0FBRztZQUNuQkM7WUFDQUosU0FBUyxJQUFJLENBQUNWLEtBQUssQ0FBQ1UsT0FBTyxJQUFJLElBQUksQ0FBQ1YsS0FBSyxDQUFDVyxNQUFNO1FBQ3BEO1FBQ0EsSUFBSSxJQUFJLENBQUNYLEtBQUssQ0FBQ2lDLFNBQVMsRUFBRTtZQUN0QixJQUFJLENBQUNqQyxLQUFLLENBQUNpQyxTQUFTLENBQUNFLE9BQU8sR0FBR0Y7UUFDbkM7UUFDQSxJQUFJLENBQUMzQixRQUFRLENBQUM7WUFDVkgsU0FBUzhCO1FBQ2I7UUFDQSxJQUFJLElBQUksQ0FBQ2pDLEtBQUssQ0FBQ29CLE1BQU0sRUFBRTtZQUNuQixNQUFNLElBQUksQ0FBQ3BCLEtBQUssQ0FBQ29CLE1BQU0sQ0FBQ2E7UUFDNUI7SUFDSjtBQUNKO0FBQ0FuQyxVQUFVa0MsWUFBWSxHQUFHO0lBQ3JCZCxPQUFPO0lBQ1BELFFBQVE7SUFDUlAsU0FBUyxDQUFDO0lBQ1ZTLE9BQU8sQ0FBQztJQUNSTixLQUFLVDtJQUNMVSxJQUFJakI7QUFDUjtBQUNBLGlFQUFlQyxTQUFTQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXRzcGFydGljbGVzL2VzbS9QYXJ0aWNsZXMuanM/ZmQ3NSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB0c1BhcnRpY2xlcyB9IGZyb20gXCJ0c3BhcnRpY2xlcy1lbmdpbmVcIjtcbmltcG9ydCB7IGRlZXBDb21wYXJlIH0gZnJvbSBcIi4vVXRpbHNcIjtcbmNvbnN0IGRlZmF1bHRJZCA9IFwidHNwYXJ0aWNsZXNcIjtcbmNsYXNzIFBhcnRpY2xlcyBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgaW5pdDogZmFsc2UsXG4gICAgICAgICAgICBsaWJyYXJ5OiB1bmRlZmluZWQsXG4gICAgICAgIH07XG4gICAgfVxuICAgIGRlc3Ryb3koKSB7XG4gICAgICAgIGlmICghdGhpcy5zdGF0ZS5saWJyYXJ5KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zdGF0ZS5saWJyYXJ5LmRlc3Ryb3koKTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBsaWJyYXJ5OiB1bmRlZmluZWQsXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBzaG91bGRDb21wb25lbnRVcGRhdGUobmV4dFByb3BzKSB7XG4gICAgICAgIGNvbnN0IG5leHRPcHRpb25zID0gbmV4dFByb3BzLm9wdGlvbnMgPz8gbmV4dFByb3BzLnBhcmFtcywgY3VycmVudE9wdGlvbnMgPSB0aGlzLnByb3BzLm9wdGlvbnMgPz8gdGhpcy5wcm9wcy5wYXJhbXM7XG4gICAgICAgIHJldHVybiAobmV4dFByb3BzLnVybCAhPT0gdGhpcy5wcm9wcy51cmwgfHxcbiAgICAgICAgICAgIG5leHRQcm9wcy5pZCAhPT0gdGhpcy5wcm9wcy5pZCB8fFxuICAgICAgICAgICAgbmV4dFByb3BzLmNhbnZhc0NsYXNzTmFtZSAhPT0gdGhpcy5wcm9wcy5jYW52YXNDbGFzc05hbWUgfHxcbiAgICAgICAgICAgIG5leHRQcm9wcy5jbGFzc05hbWUgIT09IHRoaXMucHJvcHMuY2xhc3NOYW1lIHx8XG4gICAgICAgICAgICBuZXh0UHJvcHMuaGVpZ2h0ICE9PSB0aGlzLnByb3BzLmhlaWdodCB8fFxuICAgICAgICAgICAgbmV4dFByb3BzLndpZHRoICE9PSB0aGlzLnByb3BzLndpZHRoIHx8XG4gICAgICAgICAgICAhZGVlcENvbXBhcmUobmV4dFByb3BzLnN0eWxlLCB0aGlzLnByb3BzLnN0eWxlKSB8fFxuICAgICAgICAgICAgbmV4dFByb3BzLmluaXQgIT09IHRoaXMucHJvcHMuaW5pdCB8fFxuICAgICAgICAgICAgbmV4dFByb3BzLmxvYWRlZCAhPT0gdGhpcy5wcm9wcy5sb2FkZWQgfHxcbiAgICAgICAgICAgICFkZWVwQ29tcGFyZShuZXh0T3B0aW9ucywgY3VycmVudE9wdGlvbnMsIGtleSA9PiBrZXkuc3RhcnRzV2l0aChcIl9cIikpKTtcbiAgICB9XG4gICAgY29tcG9uZW50RGlkVXBkYXRlKCkge1xuICAgICAgICB0aGlzLnJlZnJlc2goKTtcbiAgICB9XG4gICAgZm9yY2VVcGRhdGUoKSB7XG4gICAgICAgIHRoaXMucmVmcmVzaCgpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgc3VwZXIuZm9yY2VVcGRhdGUoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICAoYXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJvcHMuaW5pdCkge1xuICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMucHJvcHMuaW5pdCh0c1BhcnRpY2xlcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBpbml0OiB0cnVlLFxuICAgICAgICAgICAgfSwgYXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMubG9hZFBhcnRpY2xlcygpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pKCk7XG4gICAgfVxuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgICB0aGlzLmRlc3Ryb3koKTtcbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB7IHdpZHRoLCBoZWlnaHQsIGNsYXNzTmFtZSwgY2FudmFzQ2xhc3NOYW1lLCBpZCB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBjbGFzc05hbWUsIGlkOiBpZCB9LFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiLCB7IGNsYXNzTmFtZTogY2FudmFzQ2xhc3NOYW1lLCBzdHlsZToge1xuICAgICAgICAgICAgICAgICAgICAuLi50aGlzLnByb3BzLnN0eWxlLFxuICAgICAgICAgICAgICAgICAgICB3aWR0aCxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0LFxuICAgICAgICAgICAgICAgIH0gfSkpKTtcbiAgICB9XG4gICAgYXN5bmMgcmVmcmVzaCgpIHtcbiAgICAgICAgdGhpcy5kZXN0cm95KCk7XG4gICAgICAgIGF3YWl0IHRoaXMubG9hZFBhcnRpY2xlcygpO1xuICAgIH1cbiAgICBhc3luYyBsb2FkUGFydGljbGVzKCkge1xuICAgICAgICBpZiAoIXRoaXMuc3RhdGUuaW5pdCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGlkID0gdGhpcy5wcm9wcy5pZCA/PyBQYXJ0aWNsZXMuZGVmYXVsdFByb3BzLmlkID8/IGRlZmF1bHRJZCwgY29udGFpbmVyID0gYXdhaXQgdHNQYXJ0aWNsZXMubG9hZCh7XG4gICAgICAgICAgICB1cmw6IHRoaXMucHJvcHMudXJsLFxuICAgICAgICAgICAgaWQsXG4gICAgICAgICAgICBvcHRpb25zOiB0aGlzLnByb3BzLm9wdGlvbnMgPz8gdGhpcy5wcm9wcy5wYXJhbXMsXG4gICAgICAgIH0pO1xuICAgICAgICBpZiAodGhpcy5wcm9wcy5jb250YWluZXIpIHtcbiAgICAgICAgICAgIHRoaXMucHJvcHMuY29udGFpbmVyLmN1cnJlbnQgPSBjb250YWluZXI7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBsaWJyYXJ5OiBjb250YWluZXIsXG4gICAgICAgIH0pO1xuICAgICAgICBpZiAodGhpcy5wcm9wcy5sb2FkZWQpIHtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMucHJvcHMubG9hZGVkKGNvbnRhaW5lcik7XG4gICAgICAgIH1cbiAgICB9XG59XG5QYXJ0aWNsZXMuZGVmYXVsdFByb3BzID0ge1xuICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgICBoZWlnaHQ6IFwiMTAwJVwiLFxuICAgIG9wdGlvbnM6IHt9LFxuICAgIHN0eWxlOiB7fSxcbiAgICB1cmw6IHVuZGVmaW5lZCxcbiAgICBpZDogZGVmYXVsdElkLFxufTtcbmV4cG9ydCBkZWZhdWx0IFBhcnRpY2xlcztcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsInRzUGFydGljbGVzIiwiZGVlcENvbXBhcmUiLCJkZWZhdWx0SWQiLCJQYXJ0aWNsZXMiLCJjb25zdHJ1Y3RvciIsInByb3BzIiwic3RhdGUiLCJpbml0IiwibGlicmFyeSIsInVuZGVmaW5lZCIsImRlc3Ryb3kiLCJzZXRTdGF0ZSIsInNob3VsZENvbXBvbmVudFVwZGF0ZSIsIm5leHRQcm9wcyIsIm5leHRPcHRpb25zIiwib3B0aW9ucyIsInBhcmFtcyIsImN1cnJlbnRPcHRpb25zIiwidXJsIiwiaWQiLCJjYW52YXNDbGFzc05hbWUiLCJjbGFzc05hbWUiLCJoZWlnaHQiLCJ3aWR0aCIsInN0eWxlIiwibG9hZGVkIiwia2V5Iiwic3RhcnRzV2l0aCIsImNvbXBvbmVudERpZFVwZGF0ZSIsInJlZnJlc2giLCJmb3JjZVVwZGF0ZSIsInRoZW4iLCJjb21wb25lbnREaWRNb3VudCIsImxvYWRQYXJ0aWNsZXMiLCJjb21wb25lbnRXaWxsVW5tb3VudCIsInJlbmRlciIsImNyZWF0ZUVsZW1lbnQiLCJkZWZhdWx0UHJvcHMiLCJjb250YWluZXIiLCJsb2FkIiwiY3VycmVudCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/react-tsparticles/esm/Particles.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/react-tsparticles/esm/Utils.js":
/*!*****************************************************!*\
  !*** ./node_modules/react-tsparticles/esm/Utils.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   deepCompare: () => (/* binding */ deepCompare)\n/* harmony export */ });\nconst isObject = (val)=>typeof val === \"object\" && val !== null;\nfunction deepCompare(obj1, obj2, excludeKeyFn = ()=>false) {\n    if (!isObject(obj1) || !isObject(obj2)) {\n        return obj1 === obj2;\n    }\n    const keys1 = Object.keys(obj1).filter((key)=>!excludeKeyFn(key)), keys2 = Object.keys(obj2).filter((key)=>!excludeKeyFn(key));\n    if (keys1.length !== keys2.length) {\n        return false;\n    }\n    for (const key of keys1){\n        const value1 = obj1[key], value2 = obj2[key];\n        if (isObject(value1) && isObject(value2)) {\n            if (value1 === obj2 && value2 === obj1) {\n                continue;\n            }\n            if (!deepCompare(value1, value2, excludeKeyFn)) {\n                return false;\n            }\n        } else if (Array.isArray(value1) && Array.isArray(value2)) {\n            if (!deepCompareArrays(value1, value2, excludeKeyFn)) {\n                return false;\n            }\n        } else if (value1 !== value2) {\n            return false;\n        }\n    }\n    return true;\n}\nfunction deepCompareArrays(arr1, arr2, excludeKeyFn) {\n    if (arr1.length !== arr2.length) {\n        return false;\n    }\n    for(let i = 0; i < arr1.length; i++){\n        const val1 = arr1[i], val2 = arr2[i];\n        if (Array.isArray(val1) && Array.isArray(val2)) {\n            if (!deepCompareArrays(val1, val2, excludeKeyFn)) {\n                return false;\n            }\n        } else if (isObject(val1) && isObject(val2)) {\n            if (!deepCompare(val1, val2, excludeKeyFn)) {\n                return false;\n            }\n        } else if (val1 !== val2) {\n            return false;\n        }\n    }\n    return true;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvcmVhY3QtdHNwYXJ0aWNsZXMvZXNtL1V0aWxzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQSxNQUFNQSxXQUFXLENBQUNDLE1BQVEsT0FBT0EsUUFBUSxZQUFZQSxRQUFRO0FBQ3RELFNBQVNDLFlBQVlDLElBQUksRUFBRUMsSUFBSSxFQUFFQyxlQUFlLElBQU0sS0FBSztJQUM5RCxJQUFJLENBQUNMLFNBQVNHLFNBQVMsQ0FBQ0gsU0FBU0ksT0FBTztRQUNwQyxPQUFPRCxTQUFTQztJQUNwQjtJQUNBLE1BQU1FLFFBQVFDLE9BQU9DLElBQUksQ0FBQ0wsTUFBTU0sTUFBTSxDQUFDQyxDQUFBQSxNQUFPLENBQUNMLGFBQWFLLE9BQU9DLFFBQVFKLE9BQU9DLElBQUksQ0FBQ0osTUFBTUssTUFBTSxDQUFDQyxDQUFBQSxNQUFPLENBQUNMLGFBQWFLO0lBQ3pILElBQUlKLE1BQU1NLE1BQU0sS0FBS0QsTUFBTUMsTUFBTSxFQUFFO1FBQy9CLE9BQU87SUFDWDtJQUNBLEtBQUssTUFBTUYsT0FBT0osTUFBTztRQUNyQixNQUFNTyxTQUFTVixJQUFJLENBQUNPLElBQUksRUFBRUksU0FBU1YsSUFBSSxDQUFDTSxJQUFJO1FBQzVDLElBQUlWLFNBQVNhLFdBQVdiLFNBQVNjLFNBQVM7WUFDdEMsSUFBSUQsV0FBV1QsUUFBUVUsV0FBV1gsTUFBTTtnQkFDcEM7WUFDSjtZQUNBLElBQUksQ0FBQ0QsWUFBWVcsUUFBUUMsUUFBUVQsZUFBZTtnQkFDNUMsT0FBTztZQUNYO1FBQ0osT0FDSyxJQUFJVSxNQUFNQyxPQUFPLENBQUNILFdBQVdFLE1BQU1DLE9BQU8sQ0FBQ0YsU0FBUztZQUNyRCxJQUFJLENBQUNHLGtCQUFrQkosUUFBUUMsUUFBUVQsZUFBZTtnQkFDbEQsT0FBTztZQUNYO1FBQ0osT0FDSyxJQUFJUSxXQUFXQyxRQUFRO1lBQ3hCLE9BQU87UUFDWDtJQUNKO0lBQ0EsT0FBTztBQUNYO0FBQ0EsU0FBU0csa0JBQWtCQyxJQUFJLEVBQUVDLElBQUksRUFBRWQsWUFBWTtJQUMvQyxJQUFJYSxLQUFLTixNQUFNLEtBQUtPLEtBQUtQLE1BQU0sRUFBRTtRQUM3QixPQUFPO0lBQ1g7SUFDQSxJQUFLLElBQUlRLElBQUksR0FBR0EsSUFBSUYsS0FBS04sTUFBTSxFQUFFUSxJQUFLO1FBQ2xDLE1BQU1DLE9BQU9ILElBQUksQ0FBQ0UsRUFBRSxFQUFFRSxPQUFPSCxJQUFJLENBQUNDLEVBQUU7UUFDcEMsSUFBSUwsTUFBTUMsT0FBTyxDQUFDSyxTQUFTTixNQUFNQyxPQUFPLENBQUNNLE9BQU87WUFDNUMsSUFBSSxDQUFDTCxrQkFBa0JJLE1BQU1DLE1BQU1qQixlQUFlO2dCQUM5QyxPQUFPO1lBQ1g7UUFDSixPQUNLLElBQUlMLFNBQVNxQixTQUFTckIsU0FBU3NCLE9BQU87WUFDdkMsSUFBSSxDQUFDcEIsWUFBWW1CLE1BQU1DLE1BQU1qQixlQUFlO2dCQUN4QyxPQUFPO1lBQ1g7UUFDSixPQUNLLElBQUlnQixTQUFTQyxNQUFNO1lBQ3BCLE9BQU87UUFDWDtJQUNKO0lBQ0EsT0FBTztBQUNYIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXRzcGFydGljbGVzL2VzbS9VdGlscy5qcz85ZjEyIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGlzT2JqZWN0ID0gKHZhbCkgPT4gdHlwZW9mIHZhbCA9PT0gXCJvYmplY3RcIiAmJiB2YWwgIT09IG51bGw7XG5leHBvcnQgZnVuY3Rpb24gZGVlcENvbXBhcmUob2JqMSwgb2JqMiwgZXhjbHVkZUtleUZuID0gKCkgPT4gZmFsc2UpIHtcbiAgICBpZiAoIWlzT2JqZWN0KG9iajEpIHx8ICFpc09iamVjdChvYmoyKSkge1xuICAgICAgICByZXR1cm4gb2JqMSA9PT0gb2JqMjtcbiAgICB9XG4gICAgY29uc3Qga2V5czEgPSBPYmplY3Qua2V5cyhvYmoxKS5maWx0ZXIoa2V5ID0+ICFleGNsdWRlS2V5Rm4oa2V5KSksIGtleXMyID0gT2JqZWN0LmtleXMob2JqMikuZmlsdGVyKGtleSA9PiAhZXhjbHVkZUtleUZuKGtleSkpO1xuICAgIGlmIChrZXlzMS5sZW5ndGggIT09IGtleXMyLmxlbmd0aCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGZvciAoY29uc3Qga2V5IG9mIGtleXMxKSB7XG4gICAgICAgIGNvbnN0IHZhbHVlMSA9IG9iajFba2V5XSwgdmFsdWUyID0gb2JqMltrZXldO1xuICAgICAgICBpZiAoaXNPYmplY3QodmFsdWUxKSAmJiBpc09iamVjdCh2YWx1ZTIpKSB7XG4gICAgICAgICAgICBpZiAodmFsdWUxID09PSBvYmoyICYmIHZhbHVlMiA9PT0gb2JqMSkge1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFkZWVwQ29tcGFyZSh2YWx1ZTEsIHZhbHVlMiwgZXhjbHVkZUtleUZuKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChBcnJheS5pc0FycmF5KHZhbHVlMSkgJiYgQXJyYXkuaXNBcnJheSh2YWx1ZTIpKSB7XG4gICAgICAgICAgICBpZiAoIWRlZXBDb21wYXJlQXJyYXlzKHZhbHVlMSwgdmFsdWUyLCBleGNsdWRlS2V5Rm4pKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHZhbHVlMSAhPT0gdmFsdWUyKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG59XG5mdW5jdGlvbiBkZWVwQ29tcGFyZUFycmF5cyhhcnIxLCBhcnIyLCBleGNsdWRlS2V5Rm4pIHtcbiAgICBpZiAoYXJyMS5sZW5ndGggIT09IGFycjIubGVuZ3RoKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnIxLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IHZhbDEgPSBhcnIxW2ldLCB2YWwyID0gYXJyMltpXTtcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkodmFsMSkgJiYgQXJyYXkuaXNBcnJheSh2YWwyKSkge1xuICAgICAgICAgICAgaWYgKCFkZWVwQ29tcGFyZUFycmF5cyh2YWwxLCB2YWwyLCBleGNsdWRlS2V5Rm4pKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGlzT2JqZWN0KHZhbDEpICYmIGlzT2JqZWN0KHZhbDIpKSB7XG4gICAgICAgICAgICBpZiAoIWRlZXBDb21wYXJlKHZhbDEsIHZhbDIsIGV4Y2x1ZGVLZXlGbikpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodmFsMSAhPT0gdmFsMikge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xufVxuIl0sIm5hbWVzIjpbImlzT2JqZWN0IiwidmFsIiwiZGVlcENvbXBhcmUiLCJvYmoxIiwib2JqMiIsImV4Y2x1ZGVLZXlGbiIsImtleXMxIiwiT2JqZWN0Iiwia2V5cyIsImZpbHRlciIsImtleSIsImtleXMyIiwibGVuZ3RoIiwidmFsdWUxIiwidmFsdWUyIiwiQXJyYXkiLCJpc0FycmF5IiwiZGVlcENvbXBhcmVBcnJheXMiLCJhcnIxIiwiYXJyMiIsImkiLCJ2YWwxIiwidmFsMiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/react-tsparticles/esm/Utils.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/react-tsparticles/esm/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/react-tsparticles/esm/index.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Particles: () => (/* reexport safe */ _Particles__WEBPACK_IMPORTED_MODULE_0__[\"default\"]),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Particles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Particles */ \"(ssr)/./node_modules/react-tsparticles/esm/Particles.js\");\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_Particles__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvcmVhY3QtdHNwYXJ0aWNsZXMvZXNtL2luZGV4LmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFvQztBQUNwQyxpRUFBZUEsa0RBQVNBLEVBQUM7QUFDSiIsInNvdXJjZXMiOlsid2VicGFjazovL3BvcnRmb2xpby8uL25vZGVfbW9kdWxlcy9yZWFjdC10c3BhcnRpY2xlcy9lc20vaW5kZXguanM/OTdhZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUGFydGljbGVzIGZyb20gXCIuL1BhcnRpY2xlc1wiO1xuZXhwb3J0IGRlZmF1bHQgUGFydGljbGVzO1xuZXhwb3J0IHsgUGFydGljbGVzIH07XG4iXSwibmFtZXMiOlsiUGFydGljbGVzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/react-tsparticles/esm/index.js\n");

/***/ })

};
;