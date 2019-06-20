(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("K011");


/***/ }),

/***/ "0S4P":
/***/ (function(module, exports) {

module.exports = require("@angular/common");

/***/ }),

/***/ "47LT":
/***/ (function(module, exports) {

module.exports = require("@angular/platform-server");

/***/ }),

/***/ "9gj6":
/***/ (function(module, exports) {

module.exports = require("@angular/animations");

/***/ }),

/***/ "JAnZ":
/***/ (function(module, exports) {

module.exports = require("@angular/router");

/***/ }),

/***/ "K011":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "@angular/core"
var core_ = __webpack_require__("vOrQ");

// EXTERNAL MODULE: external "@angular/router"
var router_ = __webpack_require__("JAnZ");

// CONCATENATED MODULE: ./src/app/app-shell/app-shell.component.ts

class AppShellComponent {
    constructor() { }
    ngOnInit() {
    }
}

// CONCATENATED MODULE: ./src/app/app.server.module.ts


const routes = [{ path: 'shell', component: AppShellComponent }];
class AppServerModule {
}

// CONCATENATED MODULE: ./src/app/app.component.ts
class AppComponent {
    constructor() {
        this.title = 'pwa-angular-sample-app';
    }
}

// CONCATENATED MODULE: ./node_modules/@angular/router/router.ngfactory.js
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 


var RouterModuleNgFactory = core_["ɵcmf"](router_["RouterModule"], [], function (_l) { return core_["ɵmod"]([core_["ɵmpd"](512, core_["ComponentFactoryResolver"], core_["ɵCodegenComponentFactoryResolver"], [[8, [ɵangular_packages_router_router_lNgFactory]], [3, core_["ComponentFactoryResolver"]], core_["NgModuleRef"]]), core_["ɵmpd"](1073742336, router_["RouterModule"], router_["RouterModule"], [[2, router_["ɵangular_packages_router_router_a"]], [2, router_["Router"]]])]); });

var styles_ɵangular_packages_router_router_l = [];
var RenderType_ɵangular_packages_router_router_l = core_["ɵcrt"]({ encapsulation: 2, styles: styles_ɵangular_packages_router_router_l, data: {} });

function View_ɵangular_packages_router_router_l_0(_l) { return core_["ɵvid"](0, [(_l()(), core_["ɵeld"](0, 16777216, null, null, 1, "router-outlet", [], null, null, null, null, null)), core_["ɵdid"](1, 212992, null, 0, router_["RouterOutlet"], [router_["ChildrenOutletContexts"], core_["ViewContainerRef"], core_["ComponentFactoryResolver"], [8, null], core_["ChangeDetectorRef"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
function View_ɵangular_packages_router_router_l_Host_0(_l) { return core_["ɵvid"](0, [(_l()(), core_["ɵeld"](0, 0, null, null, 1, "ng-component", [], null, null, null, View_ɵangular_packages_router_router_l_0, RenderType_ɵangular_packages_router_router_l)), core_["ɵdid"](1, 49152, null, 0, router_["ɵangular_packages_router_router_l"], [], null, null)], null, null); }
var ɵangular_packages_router_router_lNgFactory = core_["ɵccf"]("ng-component", router_["ɵangular_packages_router_router_l"], View_ɵangular_packages_router_router_l_Host_0, {}, {}, []);


// CONCATENATED MODULE: ./src/app/app.component.sass.shim.ngstyle.js
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = [""];


// CONCATENATED MODULE: ./src/app/app.component.ngfactory.js
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 




var styles_AppComponent = [styles];
var RenderType_AppComponent = core_["ɵcrt"]({ encapsulation: 0, styles: styles_AppComponent, data: {} });

function View_AppComponent_0(_l) { return core_["ɵvid"](0, [(_l()(), core_["ɵeld"](0, 0, null, null, 3, "div", [["style", "text-align:center"]], null, null, null, null, null)), (_l()(), core_["ɵeld"](1, 0, null, null, 1, "h1", [], null, null, null, null, null)), (_l()(), core_["ɵted"](2, null, [" Welcome to ", "! "])), (_l()(), core_["ɵeld"](3, 0, null, null, 0, "img", [["alt", "Angular Logo"], ["src", "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg=="], ["width", "300"]], null, null, null, null, null)), (_l()(), core_["ɵeld"](4, 0, null, null, 1, "h2", [], null, null, null, null, null)), (_l()(), core_["ɵted"](-1, null, ["Here are some links to help you start: "])), (_l()(), core_["ɵeld"](6, 0, null, null, 12, "ul", [], null, null, null, null, null)), (_l()(), core_["ɵeld"](7, 0, null, null, 3, "li", [], null, null, null, null, null)), (_l()(), core_["ɵeld"](8, 0, null, null, 2, "h2", [], null, null, null, null, null)), (_l()(), core_["ɵeld"](9, 0, null, null, 1, "a", [["href", "https://angular.io/tutorial"], ["rel", "noopener"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), core_["ɵted"](-1, null, ["Tour of Heroes"])), (_l()(), core_["ɵeld"](11, 0, null, null, 3, "li", [], null, null, null, null, null)), (_l()(), core_["ɵeld"](12, 0, null, null, 2, "h2", [], null, null, null, null, null)), (_l()(), core_["ɵeld"](13, 0, null, null, 1, "a", [["href", "https://angular.io/cli"], ["rel", "noopener"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), core_["ɵted"](-1, null, ["CLI Documentation"])), (_l()(), core_["ɵeld"](15, 0, null, null, 3, "li", [], null, null, null, null, null)), (_l()(), core_["ɵeld"](16, 0, null, null, 2, "h2", [], null, null, null, null, null)), (_l()(), core_["ɵeld"](17, 0, null, null, 1, "a", [["href", "https://blog.angular.io/"], ["rel", "noopener"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), core_["ɵted"](-1, null, ["Angular blog"])), (_l()(), core_["ɵeld"](19, 16777216, null, null, 1, "router-outlet", [], null, null, null, null, null)), core_["ɵdid"](20, 212992, null, 0, router_["RouterOutlet"], [router_["ChildrenOutletContexts"], core_["ViewContainerRef"], core_["ComponentFactoryResolver"], [8, null], core_["ChangeDetectorRef"]], null, null)], function (_ck, _v) { _ck(_v, 20, 0); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.title; _ck(_v, 2, 0, currVal_0); }); }
function View_AppComponent_Host_0(_l) { return core_["ɵvid"](0, [(_l()(), core_["ɵeld"](0, 0, null, null, 1, "app-root", [], null, null, null, View_AppComponent_0, RenderType_AppComponent)), core_["ɵdid"](1, 49152, null, 0, AppComponent, [], null, null)], null, null); }
var AppComponentNgFactory = core_["ɵccf"]("app-root", AppComponent, View_AppComponent_Host_0, {}, {}, []);


// CONCATENATED MODULE: ./src/app/app-shell/app-shell.component.css.shim.ngstyle.js
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var app_shell_component_css_shim_ngstyle_styles = [""];


// CONCATENATED MODULE: ./src/app/app-shell/app-shell.component.ngfactory.js
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 



var styles_AppShellComponent = [app_shell_component_css_shim_ngstyle_styles];
var RenderType_AppShellComponent = core_["ɵcrt"]({ encapsulation: 0, styles: styles_AppShellComponent, data: {} });

function View_AppShellComponent_0(_l) { return core_["ɵvid"](0, [(_l()(), core_["ɵeld"](0, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), core_["ɵted"](-1, null, [" app-shell works!\n"]))], null, null); }
function View_AppShellComponent_Host_0(_l) { return core_["ɵvid"](0, [(_l()(), core_["ɵeld"](0, 0, null, null, 1, "app-app-shell", [], null, null, null, View_AppShellComponent_0, RenderType_AppShellComponent)), core_["ɵdid"](1, 114688, null, 0, AppShellComponent, [], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var AppShellComponentNgFactory = core_["ɵccf"]("app-app-shell", AppShellComponent, View_AppShellComponent_Host_0, {}, {}, []);


// EXTERNAL MODULE: external "@angular/common"
var common_ = __webpack_require__("0S4P");

// EXTERNAL MODULE: external "@angular/platform-browser"
var platform_browser_ = __webpack_require__("vG+p");

// EXTERNAL MODULE: external "@angular/platform-server"
var platform_server_ = __webpack_require__("47LT");

// EXTERNAL MODULE: external "@angular/animations/browser"
var browser_ = __webpack_require__("v5i9");

// EXTERNAL MODULE: external "@angular/platform-browser/animations"
var animations_ = __webpack_require__("Xwin");

// EXTERNAL MODULE: external "@angular/service-worker"
var service_worker_ = __webpack_require__("W1sg");

// EXTERNAL MODULE: external "@angular/common/http"
var http_ = __webpack_require__("jyyq");

// EXTERNAL MODULE: external "@angular/animations"
var external_angular_animations_ = __webpack_require__("9gj6");

// CONCATENATED MODULE: ./src/app/app-routing.module.ts

const app_routing_module_routes = [];
class AppRoutingModule {
}

// CONCATENATED MODULE: ./src/app/app.module.ts
class AppModule {
}

// CONCATENATED MODULE: ./src/app/app.server.module.ngfactory.js
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 


















var AppServerModuleNgFactory = core_["ɵcmf"](AppServerModule, [AppComponent], function (_l) { return core_["ɵmod"]([core_["ɵmpd"](512, core_["ComponentFactoryResolver"], core_["ɵCodegenComponentFactoryResolver"], [[8, [ɵangular_packages_router_router_lNgFactory, AppComponentNgFactory, AppShellComponentNgFactory]], [3, core_["ComponentFactoryResolver"]], core_["NgModuleRef"]]), core_["ɵmpd"](5120, core_["LOCALE_ID"], core_["ɵangular_packages_core_core_q"], [[3, core_["LOCALE_ID"]]]), core_["ɵmpd"](4608, common_["NgLocalization"], common_["NgLocaleLocalization"], [core_["LOCALE_ID"], [2, common_["ɵangular_packages_common_common_a"]]]), core_["ɵmpd"](5120, core_["ɵangular_packages_core_core_bb"], core_["ɵangular_packages_core_core_s"], [core_["NgZone"]]), core_["ɵmpd"](5120, core_["IterableDiffers"], core_["ɵangular_packages_core_core_o"], []), core_["ɵmpd"](5120, core_["KeyValueDiffers"], core_["ɵangular_packages_core_core_p"], []), core_["ɵmpd"](4608, platform_browser_["DomSanitizer"], platform_browser_["ɵDomSanitizerImpl"], [common_["DOCUMENT"]]), core_["ɵmpd"](6144, core_["Sanitizer"], null, [platform_browser_["DomSanitizer"]]), core_["ɵmpd"](4608, platform_browser_["HAMMER_GESTURE_CONFIG"], platform_browser_["HammerGestureConfig"], []), core_["ɵmpd"](5120, platform_browser_["EVENT_MANAGER_PLUGINS"], function (p0_0, p0_1, p0_2, p1_0, p2_0, p2_1, p2_2, p2_3, p3_0) { return [new platform_browser_["ɵDomEventsPlugin"](p0_0, p0_1, p0_2), new platform_browser_["ɵKeyEventsPlugin"](p1_0), new platform_browser_["ɵHammerGesturesPlugin"](p2_0, p2_1, p2_2, p2_3), new platform_server_["ɵangular_packages_platform_server_platform_server_d"](p3_0)]; }, [common_["DOCUMENT"], core_["NgZone"], core_["PLATFORM_ID"], common_["DOCUMENT"], common_["DOCUMENT"], platform_browser_["HAMMER_GESTURE_CONFIG"], core_["ɵConsole"], [2, platform_browser_["HAMMER_LOADER"]], common_["DOCUMENT"]]), core_["ɵmpd"](4608, platform_browser_["EventManager"], platform_browser_["EventManager"], [platform_browser_["EVENT_MANAGER_PLUGINS"], core_["NgZone"]]), core_["ɵmpd"](135680, platform_browser_["ɵDomSharedStylesHost"], platform_browser_["ɵDomSharedStylesHost"], [common_["DOCUMENT"]]), core_["ɵmpd"](4608, platform_browser_["ɵDomRendererFactory2"], platform_browser_["ɵDomRendererFactory2"], [platform_browser_["EventManager"], platform_browser_["ɵDomSharedStylesHost"], core_["APP_ID"]]), core_["ɵmpd"](4608, platform_server_["ɵangular_packages_platform_server_platform_server_c"], platform_server_["ɵangular_packages_platform_server_platform_server_c"], [common_["DOCUMENT"], [2, platform_browser_["ɵTRANSITION_ID"]]]), core_["ɵmpd"](6144, platform_browser_["ɵSharedStylesHost"], null, [platform_server_["ɵangular_packages_platform_server_platform_server_c"]]), core_["ɵmpd"](4608, platform_server_["ɵServerRendererFactory2"], platform_server_["ɵServerRendererFactory2"], [platform_browser_["EventManager"], core_["NgZone"], common_["DOCUMENT"], platform_browser_["ɵSharedStylesHost"]]), core_["ɵmpd"](4608, browser_["AnimationDriver"], browser_["ɵNoopAnimationDriver"], []), core_["ɵmpd"](5120, browser_["ɵAnimationStyleNormalizer"], animations_["ɵangular_packages_platform_browser_animations_animations_b"], []), core_["ɵmpd"](4608, browser_["ɵAnimationEngine"], animations_["ɵInjectableAnimationEngine"], [common_["DOCUMENT"], browser_["AnimationDriver"], browser_["ɵAnimationStyleNormalizer"]]), core_["ɵmpd"](5120, core_["RendererFactory2"], platform_server_["ɵangular_packages_platform_server_platform_server_a"], [platform_server_["ɵServerRendererFactory2"], browser_["ɵAnimationEngine"], core_["NgZone"]]), core_["ɵmpd"](4352, core_["Testability"], null, []), core_["ɵmpd"](5120, router_["ActivatedRoute"], router_["ɵangular_packages_router_router_g"], [router_["Router"]]), core_["ɵmpd"](4608, router_["NoPreloading"], router_["NoPreloading"], []), core_["ɵmpd"](6144, router_["PreloadingStrategy"], null, [router_["NoPreloading"]]), core_["ɵmpd"](135680, router_["RouterPreloader"], router_["RouterPreloader"], [router_["Router"], core_["NgModuleFactoryLoader"], core_["Compiler"], core_["Injector"], router_["PreloadingStrategy"]]), core_["ɵmpd"](4608, router_["PreloadAllModules"], router_["PreloadAllModules"], []), core_["ɵmpd"](4608, common_["ViewportScroller"], common_["ɵNullViewportScroller"], []), core_["ɵmpd"](5120, router_["ɵangular_packages_router_router_o"], router_["ɵangular_packages_router_router_c"], [router_["Router"], common_["ViewportScroller"], router_["ROUTER_CONFIGURATION"]]), core_["ɵmpd"](5120, router_["ROUTER_INITIALIZER"], router_["ɵangular_packages_router_router_j"], [router_["ɵangular_packages_router_router_h"]]), core_["ɵmpd"](5120, core_["APP_BOOTSTRAP_LISTENER"], function (p0_0, p1_0) { return [p0_0, p1_0]; }, [router_["ROUTER_INITIALIZER"], router_["ROUTER_INITIALIZER"]]), core_["ɵmpd"](5120, service_worker_["ɵangular_packages_service_worker_service_worker_a"], service_worker_["ɵangular_packages_service_worker_service_worker_d"], [service_worker_["SwRegistrationOptions"], core_["PLATFORM_ID"]]), core_["ɵmpd"](4608, service_worker_["SwPush"], service_worker_["SwPush"], [service_worker_["ɵangular_packages_service_worker_service_worker_a"]]), core_["ɵmpd"](4608, service_worker_["SwUpdate"], service_worker_["SwUpdate"], [service_worker_["ɵangular_packages_service_worker_service_worker_a"]]), core_["ɵmpd"](4608, http_["HttpXsrfTokenExtractor"], http_["ɵangular_packages_common_http_http_g"], [common_["DOCUMENT"], core_["PLATFORM_ID"], http_["ɵangular_packages_common_http_http_e"]]), core_["ɵmpd"](4608, http_["ɵangular_packages_common_http_http_h"], http_["ɵangular_packages_common_http_http_h"], [http_["HttpXsrfTokenExtractor"], http_["ɵangular_packages_common_http_http_f"]]), core_["ɵmpd"](5120, http_["HTTP_INTERCEPTORS"], function (p0_0) { return [p0_0]; }, [http_["ɵangular_packages_common_http_http_h"]]), core_["ɵmpd"](4608, http_["XhrFactory"], platform_server_["ɵangular_packages_platform_server_platform_server_e"], []), core_["ɵmpd"](4608, http_["HttpXhrBackend"], http_["HttpXhrBackend"], [http_["XhrFactory"]]), core_["ɵmpd"](6144, http_["HttpBackend"], null, [http_["HttpXhrBackend"]]), core_["ɵmpd"](5120, http_["HttpHandler"], platform_server_["ɵangular_packages_platform_server_platform_server_f"], [http_["HttpBackend"], core_["Injector"]]), core_["ɵmpd"](4608, http_["HttpClient"], http_["HttpClient"], [http_["HttpHandler"]]), core_["ɵmpd"](4608, http_["ɵangular_packages_common_http_http_d"], http_["ɵangular_packages_common_http_http_d"], []), core_["ɵmpd"](4608, external_angular_animations_["AnimationBuilder"], animations_["ɵBrowserAnimationBuilder"], [core_["RendererFactory2"], common_["DOCUMENT"]]), core_["ɵmpd"](1073742336, common_["CommonModule"], common_["CommonModule"], []), core_["ɵmpd"](1024, core_["ErrorHandler"], platform_browser_["ɵangular_packages_platform_browser_platform_browser_a"], []), core_["ɵmpd"](1024, core_["NgProbeToken"], function () { return [router_["ɵangular_packages_router_router_b"](), router_["ɵangular_packages_router_router_b"]()]; }, []), core_["ɵmpd"](512, router_["ɵangular_packages_router_router_h"], router_["ɵangular_packages_router_router_h"], [core_["Injector"]]), core_["ɵmpd"](256, core_["APP_ID"], "serverApp", []), core_["ɵmpd"](2048, platform_browser_["ɵTRANSITION_ID"], null, [core_["APP_ID"]]), core_["ɵmpd"](256, service_worker_["ɵangular_packages_service_worker_service_worker_b"], "ngsw-worker.js", []), core_["ɵmpd"](256, service_worker_["SwRegistrationOptions"], { enabled: true }, []), core_["ɵmpd"](1024, core_["APP_INITIALIZER"], function (p0_0, p1_0, p2_0, p2_1, p2_2, p3_0, p3_1, p3_2, p3_3, p4_0) { return [platform_browser_["ɵangular_packages_platform_browser_platform_browser_j"](p0_0), router_["ɵangular_packages_router_router_i"](p1_0), platform_browser_["ɵangular_packages_platform_browser_platform_browser_h"](p2_0, p2_1, p2_2), service_worker_["ɵangular_packages_service_worker_service_worker_c"](p3_0, p3_1, p3_2, p3_3), router_["ɵangular_packages_router_router_i"](p4_0)]; }, [[2, core_["NgProbeToken"]], router_["ɵangular_packages_router_router_h"], platform_browser_["ɵTRANSITION_ID"], common_["DOCUMENT"], core_["Injector"], core_["Injector"], service_worker_["ɵangular_packages_service_worker_service_worker_b"], service_worker_["SwRegistrationOptions"], core_["PLATFORM_ID"], router_["ɵangular_packages_router_router_h"]]), core_["ɵmpd"](512, core_["ApplicationInitStatus"], core_["ApplicationInitStatus"], [[2, core_["APP_INITIALIZER"]]]), core_["ɵmpd"](131584, core_["ApplicationRef"], core_["ApplicationRef"], [core_["NgZone"], core_["ɵConsole"], core_["Injector"], core_["ErrorHandler"], core_["ComponentFactoryResolver"], core_["ApplicationInitStatus"]]), core_["ɵmpd"](1073742336, core_["ApplicationModule"], core_["ApplicationModule"], [core_["ApplicationRef"]]), core_["ɵmpd"](1073742336, platform_browser_["BrowserModule"], platform_browser_["BrowserModule"], [[3, platform_browser_["BrowserModule"]]]), core_["ɵmpd"](1024, router_["ɵangular_packages_router_router_a"], router_["ɵangular_packages_router_router_e"], [[3, router_["Router"]]]), core_["ɵmpd"](512, router_["UrlSerializer"], router_["DefaultUrlSerializer"], []), core_["ɵmpd"](512, router_["ChildrenOutletContexts"], router_["ChildrenOutletContexts"], []), core_["ɵmpd"](256, router_["ROUTER_CONFIGURATION"], {}, []), core_["ɵmpd"](1024, common_["LocationStrategy"], router_["ɵangular_packages_router_router_d"], [common_["PlatformLocation"], [2, common_["APP_BASE_HREF"]], router_["ROUTER_CONFIGURATION"]]), core_["ɵmpd"](512, common_["Location"], common_["Location"], [common_["LocationStrategy"], common_["PlatformLocation"]]), core_["ɵmpd"](512, core_["Compiler"], core_["Compiler"], []), core_["ɵmpd"](512, core_["NgModuleFactoryLoader"], core_["SystemJsNgModuleLoader"], [core_["Compiler"], [2, core_["SystemJsNgModuleLoaderConfig"]]]), core_["ɵmpd"](1024, router_["ROUTES"], function () { return [[], [{ path: "shell", component: AppShellComponent }]]; }, []), core_["ɵmpd"](1024, router_["Router"], router_["ɵangular_packages_router_router_f"], [core_["ApplicationRef"], router_["UrlSerializer"], router_["ChildrenOutletContexts"], common_["Location"], core_["Injector"], core_["NgModuleFactoryLoader"], core_["Compiler"], router_["ROUTES"], router_["ROUTER_CONFIGURATION"], [2, router_["UrlHandlingStrategy"]], [2, router_["RouteReuseStrategy"]]]), core_["ɵmpd"](1073742336, router_["RouterModule"], router_["RouterModule"], [[2, router_["ɵangular_packages_router_router_a"]], [2, router_["Router"]]]), core_["ɵmpd"](1073742336, AppRoutingModule, AppRoutingModule, []), core_["ɵmpd"](1073742336, service_worker_["ServiceWorkerModule"], service_worker_["ServiceWorkerModule"], []), core_["ɵmpd"](1073742336, AppModule, AppModule, []), core_["ɵmpd"](1073742336, http_["HttpClientXsrfModule"], http_["HttpClientXsrfModule"], []), core_["ɵmpd"](1073742336, http_["HttpClientModule"], http_["HttpClientModule"], []), core_["ɵmpd"](1073742336, animations_["NoopAnimationsModule"], animations_["NoopAnimationsModule"], []), core_["ɵmpd"](1073742336, platform_server_["ServerModule"], platform_server_["ServerModule"], []), core_["ɵmpd"](1073742336, AppServerModule, AppServerModule, []), core_["ɵmpd"](256, core_["ɵAPP_ROOT"], true, []), core_["ɵmpd"](256, http_["ɵangular_packages_common_http_http_e"], "XSRF-TOKEN", []), core_["ɵmpd"](256, http_["ɵangular_packages_common_http_http_f"], "X-XSRF-TOKEN", []), core_["ɵmpd"](256, animations_["ANIMATION_MODULE_TYPE"], "NoopAnimations", [])]); });


// CONCATENATED MODULE: ./src/environments/environment.ts
const environment = {
    production: true
};

// CONCATENATED MODULE: ./src/main.server.ts
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LAZY_MODULE_MAP", function() { return LAZY_MODULE_MAP; });
/* concated harmony reexport AppServerModuleNgFactory */__webpack_require__.d(__webpack_exports__, "AppServerModuleNgFactory", function() { return AppServerModuleNgFactory; });
/* concated harmony reexport AppServerModule */__webpack_require__.d(__webpack_exports__, "AppServerModule", function() { return AppServerModule; });



if (environment.production) {
    Object(core_["enableProdMode"])();
}

var LAZY_MODULE_MAP = {};


/***/ }),

/***/ "W1sg":
/***/ (function(module, exports) {

module.exports = require("@angular/service-worker");

/***/ }),

/***/ "Xwin":
/***/ (function(module, exports) {

module.exports = require("@angular/platform-browser/animations");

/***/ }),

/***/ "jyyq":
/***/ (function(module, exports) {

module.exports = require("@angular/common/http");

/***/ }),

/***/ "v5i9":
/***/ (function(module, exports) {

module.exports = require("@angular/animations/browser");

/***/ }),

/***/ "vG+p":
/***/ (function(module, exports) {

module.exports = require("@angular/platform-browser");

/***/ }),

/***/ "vOrQ":
/***/ (function(module, exports) {

module.exports = require("@angular/core");

/***/ })

/******/ })));