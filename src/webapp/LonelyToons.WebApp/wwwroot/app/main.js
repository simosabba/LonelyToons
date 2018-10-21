(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_pages_home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/pages/home/home.component */ "./src/app/components/pages/home/home.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: _components_pages_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.page {\r\n    display: flex;\r\n    flex-direction: column;\r\n    height: 100vh;\r\n    background-image: url(/app/assets/img/background-sm.jpg);\r\n    background-size: cover;\r\n  }\r\n  \r\n  .content {\r\n    flex: 1 0 auto;\r\n    display: flex;\r\n    flex-direction: column;\r\n  }\r\n  \r\n  .header {\r\n    flex: 0 1 auto;\r\n  }\r\n  \r\n  .footer {\r\n    flex-shrink: 0;\r\n  }\r\n  "

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n\n  <div [hidden]=\"isLoading() === false\">\n    <app-loader></app-loader>\n  </div>\n\n  <div class=\"page\" [hidden]=\"isLoading() === true\">\n\n    <div class=\"content\">\n      <app-header class=\"header\"></app-header>\n      <router-outlet class=\"router-flex\" #o=\"outlet\"></router-outlet>\n    </div>\n\n    <div class=\"footer\">\n      <app-footer></app-footer>\n    </div>\n\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.isAppReady = false;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.isAppReady = true;
        }, 1500);
    };
    AppComponent.prototype.isLoading = function () {
        return !this.isAppReady;
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/layout/footer/footer.component */ "./src/app/components/layout/footer/footer.component.ts");
/* harmony import */ var _components_layout_header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/layout/header/header.component */ "./src/app/components/layout/header/header.component.ts");
/* harmony import */ var _components_layout_loader_loader_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/layout/loader/loader.component */ "./src/app/components/layout/loader/loader.component.ts");
/* harmony import */ var _components_pages_home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/pages/home/home.component */ "./src/app/components/pages/home/home.component.ts");
/* harmony import */ var _components_controls_webcam_webcam_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/controls/webcam/webcam.component */ "./src/app/components/controls/webcam/webcam.component.ts");
/* harmony import */ var _components_outputs_joke_joke_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/outputs/joke/joke.component */ "./src/app/components/outputs/joke/joke.component.ts");
/* harmony import */ var _components_outputs_memory_memory_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/outputs/memory/memory.component */ "./src/app/components/outputs/memory/memory.component.ts");
/* harmony import */ var _components_outputs_video_video_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/outputs/video/video.component */ "./src/app/components/outputs/video/video.component.ts");
/* harmony import */ var _components_outputs_karaoke_karaoke_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/outputs/karaoke/karaoke.component */ "./src/app/components/outputs/karaoke/karaoke.component.ts");
/* harmony import */ var _components_controls_my_assistant_my_assistant_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/controls/my-assistant/my-assistant.component */ "./src/app/components/controls/my-assistant/my-assistant.component.ts");
/* harmony import */ var _components_controls_assistant_loader_assistant_loader_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/controls/assistant-loader/assistant-loader.component */ "./src/app/components/controls/assistant-loader/assistant-loader.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _components_layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"],
                _components_layout_header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"],
                _components_layout_loader_loader_component__WEBPACK_IMPORTED_MODULE_6__["LoaderComponent"],
                _components_pages_home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
                _components_controls_webcam_webcam_component__WEBPACK_IMPORTED_MODULE_8__["WebcamComponent"],
                _components_outputs_joke_joke_component__WEBPACK_IMPORTED_MODULE_9__["JokeComponent"],
                _components_outputs_memory_memory_component__WEBPACK_IMPORTED_MODULE_10__["MemoryComponent"],
                _components_outputs_video_video_component__WEBPACK_IMPORTED_MODULE_11__["VideoComponent"],
                _components_outputs_karaoke_karaoke_component__WEBPACK_IMPORTED_MODULE_12__["KaraokeComponent"],
                _components_controls_my_assistant_my_assistant_component__WEBPACK_IMPORTED_MODULE_13__["MyAssistantComponent"],
                _components_controls_assistant_loader_assistant_loader_component__WEBPACK_IMPORTED_MODULE_14__["AssistantLoaderComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HttpClientModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/clients/analyzer-client.service.ts":
/*!****************************************************!*\
  !*** ./src/app/clients/analyzer-client.service.ts ***!
  \****************************************************/
/*! exports provided: AnalyzerClientService, AnalyzeRequest, AnalyzeResponse */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnalyzerClientService", function() { return AnalyzerClientService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnalyzeRequest", function() { return AnalyzeRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnalyzeResponse", function() { return AnalyzeResponse; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AnalyzerClientService = /** @class */ (function () {
    function AnalyzerClientService(http) {
        this.http = http;
        this.baseAddress = settings.endpoints.Analyzer;
    }
    AnalyzerClientService.prototype.analyze = function (request) {
        return this.http.post(this.getAddress('analyze'), request);
    };
    AnalyzerClientService.prototype.getAddress = function (path) {
        return this.baseAddress + path;
    };
    AnalyzerClientService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], AnalyzerClientService);
    return AnalyzerClientService;
}());

var AnalyzeRequest = /** @class */ (function () {
    function AnalyzeRequest() {
    }
    return AnalyzeRequest;
}());

var AnalyzeResponse = /** @class */ (function () {
    function AnalyzeResponse() {
    }
    return AnalyzeResponse;
}());



/***/ }),

/***/ "./src/app/components/controls/assistant-loader/assistant-loader.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/components/controls/assistant-loader/assistant-loader.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"loader-container vertical-centered-box\">\n    <div class=\"content\">\n      <div class=\"loader-circle\"></div>\n      <div class=\"loader-line-mask one\">\n        <div class=\"loader-line\"></div>\n      </div>\n      <div class=\"loader-line-mask two\">\n        <div class=\"loader-line\"></div>\n      </div>\n      <div class=\"loader-line-mask three\">\n        <div class=\"loader-line\"></div>\n      </div>\n      <div class=\"loader-line-mask four\">\n        <div class=\"loader-line\"></div>\n      </div>\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/components/controls/assistant-loader/assistant-loader.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/components/controls/assistant-loader/assistant-loader.component.scss ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\n  -webkit-user-select: none;\n  overflow: hidden; }\n\nbody .vertical-centered-box {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  text-align: center; }\n\nbody .vertical-centered-box:after {\n  content: '';\n  display: inline-block;\n  height: 100%;\n  vertical-align: middle;\n  margin-right: -0.25em; }\n\nbody .vertical-centered-box .content {\n  box-sizing: border-box;\n  -webkit-animation: fadein 1s 1.5s linear forwards;\n  animation: fadein 1s 1.5s linear forwards;\n  display: inline-block;\n  vertical-align: middle;\n  text-align: left;\n  font-size: 0;\n  opacity: 0; }\n\nbody {\n  background: #fff; }\n\n.loader-line-mask {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  width: 50px;\n  height: 100px;\n  margin-left: -50px;\n  margin-top: -50px;\n  overflow: hidden;\n  -webkit-transform-origin: 50px 50px;\n  transform-origin: 50px 50px;\n  -webkit-mask-image: -webkit-linear-gradient(top, #000000, rgba(0, 0, 0, 0));\n  mix-blend-mode: hard-light;\n  opacity: 0.8; }\n\n.loader-line-mask .loader-line {\n  width: 100px;\n  height: 100px;\n  border-radius: 50%; }\n\n.loader-line-mask.one {\n  -webkit-animation: rotate 2s infinite linear;\n  animation: rotate 2s infinite linear; }\n\n.loader-line-mask.one .loader-line {\n  box-shadow: inset 0 0 0 8px #77C170; }\n\n.loader-line-mask.two {\n  -webkit-animation: rotate 1.8s 0.5s infinite linear;\n  animation: rotate 1.8s 0.5s infinite linear; }\n\n.loader-line-mask.two .loader-line {\n  box-shadow: inset 0 0 0 8px #F25F5C; }\n\n.loader-line-mask.three {\n  -webkit-animation: rotate 2s 1s infinite linear;\n  animation: rotate 2s 1s infinite linear; }\n\n.loader-line-mask.three .loader-line {\n  box-shadow: inset 0 0 0 8px #FFE066; }\n\n.loader-line-mask.four {\n  -webkit-animation: rotate 1.8s 1.4s infinite linear;\n  animation: rotate 1.8s 1.4s infinite linear; }\n\n.loader-line-mask.four .loader-line {\n  box-shadow: inset 0 0 0 8px #247BA0; }\n\nlesshat-selector {\n  -lh-property: 0; }\n\n@-webkit-keyframes rotate {\n  0% {\n    -webkit-transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(360deg); } }\n\n@keyframes rotate {\n  0% {\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg); } }\n\n[not-existing] {\n  zoom: 1; }\n\nlesshat-selector {\n  -lh-property: 0; }\n\n@-webkit-keyframes fadein {\n  0% {\n    opacity: 0; }\n  100% {\n    opacity: 1; } }\n\n@keyframes fadein {\n  0% {\n    opacity: 0; }\n  100% {\n    opacity: 1; } }\n\n[not-existing] {\n  zoom: 1; }\n\n.loader-container {\n  min-height: 150px; }\n"

/***/ }),

/***/ "./src/app/components/controls/assistant-loader/assistant-loader.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/components/controls/assistant-loader/assistant-loader.component.ts ***!
  \************************************************************************************/
/*! exports provided: AssistantLoaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssistantLoaderComponent", function() { return AssistantLoaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AssistantLoaderComponent = /** @class */ (function () {
    function AssistantLoaderComponent() {
    }
    AssistantLoaderComponent.prototype.ngOnInit = function () {
    };
    AssistantLoaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-assistant-loader',
            template: __webpack_require__(/*! ./assistant-loader.component.html */ "./src/app/components/controls/assistant-loader/assistant-loader.component.html"),
            styles: [__webpack_require__(/*! ./assistant-loader.component.scss */ "./src/app/components/controls/assistant-loader/assistant-loader.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AssistantLoaderComponent);
    return AssistantLoaderComponent;
}());



/***/ }),

/***/ "./src/app/components/controls/my-assistant/my-assistant.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/components/controls/my-assistant/my-assistant.component.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/controls/my-assistant/my-assistant.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/components/controls/my-assistant/my-assistant.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div>\n  <div [hidden]=\"isLoading === false\">\n      <app-assistant-loader></app-assistant-loader>\n  </div>\n  <div *ngIf=\"!isLoading && isOk\">\n    OK\n  </div>\n  <div *ngIf=\"!isLoading && !isOk\">\n    <app-joke></app-joke>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/controls/my-assistant/my-assistant.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/components/controls/my-assistant/my-assistant.component.ts ***!
  \****************************************************************************/
/*! exports provided: MyAssistantComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyAssistantComponent", function() { return MyAssistantComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_analyzer_analyzer_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/analyzer/analyzer.service */ "./src/app/services/analyzer/analyzer.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MyAssistantComponent = /** @class */ (function () {
    function MyAssistantComponent(analyzerService) {
        this.analyzerService = analyzerService;
        this.isLoading = true;
        this.isOk = true;
    }
    MyAssistantComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.analyzerService.statusEmitter.subscribe(function (x) {
            _this.processStatus(x);
        });
    };
    MyAssistantComponent.prototype.processStatus = function (response) {
        switch (response.status) {
            case 'ok':
                this.isLoading = true;
                this.isOk = true;
                break;
        }
    };
    MyAssistantComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-my-assistant',
            template: __webpack_require__(/*! ./my-assistant.component.html */ "./src/app/components/controls/my-assistant/my-assistant.component.html"),
            styles: [__webpack_require__(/*! ./my-assistant.component.css */ "./src/app/components/controls/my-assistant/my-assistant.component.css")]
        }),
        __metadata("design:paramtypes", [_services_analyzer_analyzer_service__WEBPACK_IMPORTED_MODULE_1__["AnalyzerService"]])
    ], MyAssistantComponent);
    return MyAssistantComponent;
}());



/***/ }),

/***/ "./src/app/components/controls/webcam/webcam.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/components/controls/webcam/webcam.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/controls/webcam/webcam.component.html":
/*!******************************************************************!*\
  !*** ./src/app/components/controls/webcam/webcam.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"app\">\n  <div><video #video id=\"video\" width=\"100%\" height=\"100%\" autoplay></video></div>\n  <div class=\"text-center\"><button class=\"btn\" id=\"snap\" (click)=\"capture()\">Snap Photo</button></div>\n  <canvas hidden class=\"my-2\" #canvas id=\"canvas\" width=\"100%\" height=\"100%\"></canvas>\n  <!-- <div class=\"pt-2\">\n      <div *ngFor=\"let c of captures\">\n          <img [src]=\"c\" height=\"50\" />\n      </div>\n  </div> -->\n</div>"

/***/ }),

/***/ "./src/app/components/controls/webcam/webcam.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/components/controls/webcam/webcam.component.ts ***!
  \****************************************************************/
/*! exports provided: WebcamComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebcamComponent", function() { return WebcamComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_analyzer_analyzer_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/analyzer/analyzer.service */ "./src/app/services/analyzer/analyzer.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WebcamComponent = /** @class */ (function () {
    function WebcamComponent(analyzerService) {
        this.analyzerService = analyzerService;
        this.captures = [];
    }
    WebcamComponent.prototype.ngOnInit = function () { };
    WebcamComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
            navigator.mediaDevices.getUserMedia({ video: true }).then(function (stream) {
                _this.video.nativeElement.src = window.URL.createObjectURL(stream);
                _this.video.nativeElement.play();
            });
        }
    };
    WebcamComponent.prototype.capture = function () {
        var context = this.canvas.nativeElement.getContext('2d').drawImage(this.video.nativeElement, 0, 0, 640, 480);
        var image = this.canvas.nativeElement.toDataURL('image/png');
        this.captures.push(image);
        this.analyzerService.sendImage(image);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('video'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], WebcamComponent.prototype, "video", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('canvas'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], WebcamComponent.prototype, "canvas", void 0);
    WebcamComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-webcam',
            template: __webpack_require__(/*! ./webcam.component.html */ "./src/app/components/controls/webcam/webcam.component.html"),
            styles: [__webpack_require__(/*! ./webcam.component.css */ "./src/app/components/controls/webcam/webcam.component.css")]
        }),
        __metadata("design:paramtypes", [_services_analyzer_analyzer_service__WEBPACK_IMPORTED_MODULE_1__["AnalyzerService"]])
    ], WebcamComponent);
    return WebcamComponent;
}());



/***/ }),

/***/ "./src/app/components/layout/footer/footer.component.css":
/*!***************************************************************!*\
  !*** ./src/app/components/layout/footer/footer.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/layout/footer/footer.component.html":
/*!****************************************************************!*\
  !*** ./src/app/components/layout/footer/footer.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "    <!-- Footer -->\n    <footer class=\"py-3 bg-light\">\n      <div class=\"container\">\n        <p class=\"m-0 text-center\">Copyright &copy; Cyli {{year}}</p>\n      </div>\n    </footer>\n    "

/***/ }),

/***/ "./src/app/components/layout/footer/footer.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/components/layout/footer/footer.component.ts ***!
  \**************************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
        this.year = new Date().getFullYear();
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/components/layout/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/components/layout/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/components/layout/header/header.component.css":
/*!***************************************************************!*\
  !*** ./src/app/components/layout/header/header.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".nav-link,\r\n.dropdown-item {\r\n    cursor: pointer;\r\n}"

/***/ }),

/***/ "./src/app/components/layout/header/header.component.html":
/*!****************************************************************!*\
  !*** ./src/app/components/layout/header/header.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light bg-light\" id=\"mainNav\">\n  <div class=\"container\">\n    <a class=\"navbar-brand js-scroll-trigger\" routerLink=\"/\">Loonly Toons</a>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarResponsive\" aria-controls=\"navbarResponsive\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <div class=\"collapse navbar-collapse\" id=\"navbarResponsive\">\n      <ul class=\"navbar-nav ml-auto\">\n        \n      </ul>\n    </div>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/components/layout/header/header.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/components/layout/header/header.component.ts ***!
  \**************************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/components/layout/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/components/layout/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/components/layout/loader/loader.component.html":
/*!****************************************************************!*\
  !*** ./src/app/components/layout/loader/loader.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"loader\"></div>\n<div class=\"shadow\"></div>\n"

/***/ }),

/***/ "./src/app/components/layout/loader/loader.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/components/layout/loader/loader.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@-webkit-keyframes mainAnimation {\n  0% {\n    width: 50px;\n    -webkit-transform: translateX(0px) translateY(0px) rotate(0deg);\n            transform: translateX(0px) translateY(0px) rotate(0deg); }\n  20% {\n    width: 50px;\n    -webkit-transform: translateX(0px) translateY(0px) rotate(0deg);\n            transform: translateX(0px) translateY(0px) rotate(0deg); }\n  40% {\n    width: 150px;\n    -webkit-transform: translateX(-50px) translateY(0px) rotate(0deg);\n            transform: translateX(-50px) translateY(0px) rotate(0deg); }\n  60% {\n    width: 150px;\n    -webkit-transform-origin: bottom right;\n            transform-origin: bottom right;\n    -webkit-transform: translateX(-150px) translateY(0px) rotate(90deg);\n            transform: translateX(-150px) translateY(0px) rotate(90deg); }\n  80% {\n    width: 50px;\n    -webkit-transform: translateX(-25px) translateY(0px) rotate(90deg);\n            transform: translateX(-25px) translateY(0px) rotate(90deg); }\n  100% {\n    width: 50px;\n    -webkit-transform: translateX(-50px) translateY(0px) rotate(90deg);\n            transform: translateX(-50px) translateY(0px) rotate(90deg); } }\n\n@keyframes mainAnimation {\n  0% {\n    width: 50px;\n    -webkit-transform: translateX(0px) translateY(0px) rotate(0deg);\n            transform: translateX(0px) translateY(0px) rotate(0deg); }\n  20% {\n    width: 50px;\n    -webkit-transform: translateX(0px) translateY(0px) rotate(0deg);\n            transform: translateX(0px) translateY(0px) rotate(0deg); }\n  40% {\n    width: 150px;\n    -webkit-transform: translateX(-50px) translateY(0px) rotate(0deg);\n            transform: translateX(-50px) translateY(0px) rotate(0deg); }\n  60% {\n    width: 150px;\n    -webkit-transform-origin: bottom right;\n            transform-origin: bottom right;\n    -webkit-transform: translateX(-150px) translateY(0px) rotate(90deg);\n            transform: translateX(-150px) translateY(0px) rotate(90deg); }\n  80% {\n    width: 50px;\n    -webkit-transform: translateX(-25px) translateY(0px) rotate(90deg);\n            transform: translateX(-25px) translateY(0px) rotate(90deg); }\n  100% {\n    width: 50px;\n    -webkit-transform: translateX(-50px) translateY(0px) rotate(90deg);\n            transform: translateX(-50px) translateY(0px) rotate(90deg); } }\n\n@-webkit-keyframes secundaryAnimation {\n  0% {\n    -webkit-transform: translateX(0px) translateY(0px) rotate(0deg);\n            transform: translateX(0px) translateY(0px) rotate(0deg); }\n  20% {\n    -webkit-transform: translateX(0px) translateY(0px) rotate(180deg);\n            transform: translateX(0px) translateY(0px) rotate(180deg); }\n  40% {\n    -webkit-transform: translateX(0px) translateY(0px) rotate(180deg);\n            transform: translateX(0px) translateY(0px) rotate(180deg); }\n  60% {\n    -webkit-transform: translateX(0px) translateY(0px) rotate(0deg);\n            transform: translateX(0px) translateY(0px) rotate(0deg); }\n  80% {\n    -webkit-transform: translateX(0px) translateY(0px) rotate(0deg);\n            transform: translateX(0px) translateY(0px) rotate(0deg); }\n  100% {\n    -webkit-transform: translateX(0px) translateY(0px) rotate(180deg);\n            transform: translateX(0px) translateY(0px) rotate(180deg); } }\n\n@keyframes secundaryAnimation {\n  0% {\n    -webkit-transform: translateX(0px) translateY(0px) rotate(0deg);\n            transform: translateX(0px) translateY(0px) rotate(0deg); }\n  20% {\n    -webkit-transform: translateX(0px) translateY(0px) rotate(180deg);\n            transform: translateX(0px) translateY(0px) rotate(180deg); }\n  40% {\n    -webkit-transform: translateX(0px) translateY(0px) rotate(180deg);\n            transform: translateX(0px) translateY(0px) rotate(180deg); }\n  60% {\n    -webkit-transform: translateX(0px) translateY(0px) rotate(0deg);\n            transform: translateX(0px) translateY(0px) rotate(0deg); }\n  80% {\n    -webkit-transform: translateX(0px) translateY(0px) rotate(0deg);\n            transform: translateX(0px) translateY(0px) rotate(0deg); }\n  100% {\n    -webkit-transform: translateX(0px) translateY(0px) rotate(180deg);\n            transform: translateX(0px) translateY(0px) rotate(180deg); } }\n\n@-webkit-keyframes shadowAnimation {\n  0% {\n    width: 150px;\n    -webkit-transform: translateX(-25px) translateY(0px) rotate(0deg);\n            transform: translateX(-25px) translateY(0px) rotate(0deg); }\n  20% {\n    width: 75px;\n    -webkit-transform: translateX(37.5px) translateY(0px) rotate(0deg);\n            transform: translateX(37.5px) translateY(0px) rotate(0deg); }\n  40% {\n    width: 200px;\n    -webkit-transform: translateX(-25px) translateY(0px) rotate(0deg);\n            transform: translateX(-25px) translateY(0px) rotate(0deg); }\n  60% {\n    width: 75px;\n    -webkit-transform: translateX(37.5px) translateY(0px) rotate(0deg);\n            transform: translateX(37.5px) translateY(0px) rotate(0deg); }\n  80% {\n    width: 75px;\n    -webkit-transform: translateX(37.5px) translateY(0px) rotate(0deg);\n            transform: translateX(37.5px) translateY(0px) rotate(0deg); }\n  100% {\n    width: 150px;\n    -webkit-transform: translateX(-25px) translateY(0px) rotate(0deg);\n            transform: translateX(-25px) translateY(0px) rotate(0deg); } }\n\n@keyframes shadowAnimation {\n  0% {\n    width: 150px;\n    -webkit-transform: translateX(-25px) translateY(0px) rotate(0deg);\n            transform: translateX(-25px) translateY(0px) rotate(0deg); }\n  20% {\n    width: 75px;\n    -webkit-transform: translateX(37.5px) translateY(0px) rotate(0deg);\n            transform: translateX(37.5px) translateY(0px) rotate(0deg); }\n  40% {\n    width: 200px;\n    -webkit-transform: translateX(-25px) translateY(0px) rotate(0deg);\n            transform: translateX(-25px) translateY(0px) rotate(0deg); }\n  60% {\n    width: 75px;\n    -webkit-transform: translateX(37.5px) translateY(0px) rotate(0deg);\n            transform: translateX(37.5px) translateY(0px) rotate(0deg); }\n  80% {\n    width: 75px;\n    -webkit-transform: translateX(37.5px) translateY(0px) rotate(0deg);\n            transform: translateX(37.5px) translateY(0px) rotate(0deg); }\n  100% {\n    width: 150px;\n    -webkit-transform: translateX(-25px) translateY(0px) rotate(0deg);\n            transform: translateX(-25px) translateY(0px) rotate(0deg); } }\n\n@-webkit-keyframes float {\n  0% {\n    top: 50%; }\n  50% {\n    top: 51%; }\n  100% {\n    top: 50%; } }\n\n@keyframes float {\n  0% {\n    top: 50%; }\n  50% {\n    top: 51%; }\n  100% {\n    top: 50%; } }\n\nhtml, body {\n  height: 100%; }\n\nbody {\n  position: relative;\n  background: #99d2e4;\n  background: linear-gradient(135deg, #99d2e4 0%, #ffd4da 100%); }\n\n.loader {\n  position: absolute;\n  width: 50px;\n  height: 50px;\n  top: 50%;\n  left: 50%;\n  margin-top: -25px;\n  margin-left: -25px;\n  background-color: #FFF5A5;\n  -webkit-transform: translateX(0px) translateY(0px) rotate(0deg);\n          transform: translateX(0px) translateY(0px) rotate(0deg);\n  -webkit-animation: mainAnimation 2.6s ease 0s infinite forwards;\n          animation: mainAnimation 2.6s ease 0s infinite forwards;\n  z-index: 2; }\n\n.loader:after {\n    content: '';\n    display: inline-block;\n    position: absolute;\n    width: 50px;\n    height: 50px;\n    top: 0;\n    left: -50px;\n    background-color: #FFF5A5;\n    -webkit-transform-origin: top right;\n            transform-origin: top right;\n    -webkit-transform: translateX(0px) translateY(0px) rotate(0deg);\n            transform: translateX(0px) translateY(0px) rotate(0deg);\n    -webkit-animation: secundaryAnimation 2.6s ease 0s infinite forwards;\n            animation: secundaryAnimation 2.6s ease 0s infinite forwards; }\n\n.shadow {\n  position: absolute;\n  width: 100px;\n  height: 10px;\n  top: 50%;\n  left: 50%;\n  margin-top: 50px;\n  margin-left: -75px;\n  border-radius: 50%;\n  background-color: #95a5a6;\n  -webkit-transform: translateX(0px) translateY(0px) rotate(0deg);\n          transform: translateX(0px) translateY(0px) rotate(0deg);\n  -webkit-animation: shadowAnimation 2.6s ease 0s infinite forwards,\r float 5s ease-in-out 0s infinite forwards;\n          animation: shadowAnimation 2.6s ease 0s infinite forwards,\r float 5s ease-in-out 0s infinite forwards;\n  z-index: 1; }\n\n.logo {\n  position: absolute;\n  bottom: 20px;\n  left: 50%;\n  width: 42px;\n  height: 42px;\n  padding: 12px 5px;\n  margin-left: -21px;\n  box-sizing: border-box;\n  background-color: white;\n  border-radius: 50%;\n  transition: -webkit-transform 500ms cubic-bezier(0.68, -0.55, 0.265, 1.55);\n  transition: transform 500ms cubic-bezier(0.68, -0.55, 0.265, 1.55);\n  transition: transform 500ms cubic-bezier(0.68, -0.55, 0.265, 1.55), -webkit-transform 500ms cubic-bezier(0.68, -0.55, 0.265, 1.55); }\n\n.logo:hover {\n    -webkit-transform: scale(1.4);\n            transform: scale(1.4); }\n\n.logo img {\n    width: 100%;\n    height: auto;\n    margin: 0 auto; }\n"

/***/ }),

/***/ "./src/app/components/layout/loader/loader.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/components/layout/loader/loader.component.ts ***!
  \**************************************************************/
/*! exports provided: LoaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaderComponent", function() { return LoaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoaderComponent = /** @class */ (function () {
    function LoaderComponent() {
    }
    LoaderComponent.prototype.ngOnInit = function () {
    };
    LoaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-loader',
            template: __webpack_require__(/*! ./loader.component.html */ "./src/app/components/layout/loader/loader.component.html"),
            styles: [__webpack_require__(/*! ./loader.component.scss */ "./src/app/components/layout/loader/loader.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], LoaderComponent);
    return LoaderComponent;
}());



/***/ }),

/***/ "./src/app/components/outputs/joke/joke.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/outputs/joke/joke.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/outputs/joke/joke.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/outputs/joke/joke.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"text-center\">\n  <div class=\"joke\"></div>\n</div>"

/***/ }),

/***/ "./src/app/components/outputs/joke/joke.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/outputs/joke/joke.component.ts ***!
  \***********************************************************/
/*! exports provided: JokeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JokeComponent", function() { return JokeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var JokeComponent = /** @class */ (function () {
    function JokeComponent() {
        this.jokes = [
            'What is an astronaut\'s favorite place on a computer?                           <br/>The space bar.'
        ];
    }
    JokeComponent.prototype.ngOnInit = function () {
        this.showJoke();
    };
    JokeComponent.prototype.showJoke = function () {
        var typed = new Typed('.joke', {
            strings: [this.getRandomJoke()],
            typeSpeed: 40
        });
    };
    JokeComponent.prototype.getRandomJoke = function () {
        return this.jokes[Math.floor(Math.random() * this.jokes.length)];
    };
    JokeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-joke',
            template: __webpack_require__(/*! ./joke.component.html */ "./src/app/components/outputs/joke/joke.component.html"),
            styles: [__webpack_require__(/*! ./joke.component.css */ "./src/app/components/outputs/joke/joke.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], JokeComponent);
    return JokeComponent;
}());



/***/ }),

/***/ "./src/app/components/outputs/karaoke/karaoke.component.css":
/*!******************************************************************!*\
  !*** ./src/app/components/outputs/karaoke/karaoke.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/outputs/karaoke/karaoke.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/outputs/karaoke/karaoke.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  karaoke works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/outputs/karaoke/karaoke.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/outputs/karaoke/karaoke.component.ts ***!
  \*****************************************************************/
/*! exports provided: KaraokeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KaraokeComponent", function() { return KaraokeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var KaraokeComponent = /** @class */ (function () {
    function KaraokeComponent() {
    }
    KaraokeComponent.prototype.ngOnInit = function () {
    };
    KaraokeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-karaoke',
            template: __webpack_require__(/*! ./karaoke.component.html */ "./src/app/components/outputs/karaoke/karaoke.component.html"),
            styles: [__webpack_require__(/*! ./karaoke.component.css */ "./src/app/components/outputs/karaoke/karaoke.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], KaraokeComponent);
    return KaraokeComponent;
}());



/***/ }),

/***/ "./src/app/components/outputs/memory/memory.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/outputs/memory/memory.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/outputs/memory/memory.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/outputs/memory/memory.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  memory works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/outputs/memory/memory.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/outputs/memory/memory.component.ts ***!
  \***************************************************************/
/*! exports provided: MemoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MemoryComponent", function() { return MemoryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MemoryComponent = /** @class */ (function () {
    function MemoryComponent() {
    }
    MemoryComponent.prototype.ngOnInit = function () {
    };
    MemoryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-memory',
            template: __webpack_require__(/*! ./memory.component.html */ "./src/app/components/outputs/memory/memory.component.html"),
            styles: [__webpack_require__(/*! ./memory.component.css */ "./src/app/components/outputs/memory/memory.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MemoryComponent);
    return MemoryComponent;
}());



/***/ }),

/***/ "./src/app/components/outputs/video/video.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/outputs/video/video.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/outputs/video/video.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/outputs/video/video.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  video works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/outputs/video/video.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/outputs/video/video.component.ts ***!
  \*************************************************************/
/*! exports provided: VideoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoComponent", function() { return VideoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var VideoComponent = /** @class */ (function () {
    function VideoComponent() {
    }
    VideoComponent.prototype.ngOnInit = function () {
    };
    VideoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-video',
            template: __webpack_require__(/*! ./video.component.html */ "./src/app/components/outputs/video/video.component.html"),
            styles: [__webpack_require__(/*! ./video.component.css */ "./src/app/components/outputs/video/video.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], VideoComponent);
    return VideoComponent;
}());



/***/ }),

/***/ "./src/app/components/pages/home/home.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/pages/home/home.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/pages/home/home.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/pages/home/home.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container align-self-center\">\n  <div>\n    <h1 class=\"text-white text-center my-2 pt-2\">Hi!</h1>\n  </div>\n  <div class=\"row justify-content-center\">\n    <div class=\"col-md-4 col-sm-10\">\n      <div class=\"card p-4 my-4\">\n        <app-webcam></app-webcam>\n      </div>\n    </div>\n  </div>\n  <div class=\"row justify-content-center\">\n      <div class=\"col-md-6 col-sm-10\">\n        <div class=\"card p-4 my-4\">\n          <app-my-assistant></app-my-assistant>\n        </div>\n      </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/components/pages/home/home.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/pages/home/home.component.ts ***!
  \*********************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/pages/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/components/pages/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/services/analyzer/analyzer.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/services/analyzer/analyzer.service.ts ***!
  \*******************************************************/
/*! exports provided: AnalyzerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnalyzerService", function() { return AnalyzerService; });
/* harmony import */ var _clients_analyzer_client_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../clients/analyzer-client.service */ "./src/app/clients/analyzer-client.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AnalyzerService = /** @class */ (function () {
    function AnalyzerService(analyzerClient) {
        this.analyzerClient = analyzerClient;
        this.statusEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    AnalyzerService.prototype.sendImage = function (image) {
        var _this = this;
        var request = new _clients_analyzer_client_service__WEBPACK_IMPORTED_MODULE_0__["AnalyzeRequest"]();
        request.imageContent = image;
        this.analyzerClient.analyze(request).subscribe(function (x) {
            _this.statusEmitter.emit(x);
        });
    };
    AnalyzerService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_clients_analyzer_client_service__WEBPACK_IMPORTED_MODULE_0__["AnalyzerClientService"]])
    ], AnalyzerService);
    return AnalyzerService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Workspace\LonelyToons\src\webapp\LonelyToons.Angular\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map