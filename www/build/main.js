webpackJsonp([2],{

/***/ 107:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 107;

/***/ }),

/***/ 148:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/camapa/camapa.module": [
		267,
		1
	],
	"../pages/segunda-tela/segunda-tela.module": [
		268,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 148;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 192:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MaterialDeSalaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MaterialDeSalaPage = (function () {
    function MaterialDeSalaPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    return MaterialDeSalaPage;
}());
MaterialDeSalaPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-material-de-sala',template:/*ion-inline-start:"C:\Users\Nicholas Maestrello\Documents\GitHub\IonicAppFatec\src\pages\material-de-sala\material-de-sala.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>\n\n      Material de sala\n\n    </ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button icon-only solid>\n\n        <ion-icon name="add"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding id="page4"></ion-content>'/*ion-inline-end:"C:\Users\Nicholas Maestrello\Documents\GitHub\IonicAppFatec\src\pages\material-de-sala\material-de-sala.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
], MaterialDeSalaPage);

//# sourceMappingURL=material-de-sala.js.map

/***/ }),

/***/ 193:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AjudaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AjudaPage = (function () {
    function AjudaPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    return AjudaPage;
}());
AjudaPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-ajuda',template:/*ion-inline-start:"C:\Users\Nicholas Maestrello\Documents\GitHub\IonicAppFatec\src\pages\ajuda\ajuda.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>\n\n      Ajuda\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding id="page5">\n\n  <h1 id="ajuda-heading1" style="color:#000000;">\n\n    Como Usar\n\n  </h1>\n\n  <div id="ajuda-markdown2" class="show-list-numbers-and-dots">\n\n    <p style="color:#000000;">\n\n      Pellentesque pharetra quam ut ligula convallis pretium. Fusce mattis efficitur sodales. Pellentesque sit amet nibh nec purus suscipit tincidunt in sit amet ante. Sed eu diam odio. Fusce auctor ut erat quis venenatis. In vitae ultrices elit, vitae malesuada\n\n      mi.\n\n    </p>\n\n  </div>\n\n  <div class="spacer" style="height:10px;" id="ajuda-spacer1"></div>\n\n  <h3 id="ajuda-heading2" style="color:#000000;font-weight:400;">\n\n    Desenvolvido por\n\n  </h3>\n\n  <ion-card id="ajuda-card21">\n\n    <ion-list>\n\n      <ion-item color="none" id="ajuda-list-item14">\n\n        <ion-avatar item-left>\n\n          <img />\n\n        </ion-avatar>\n\n        <h2>\n\n          Vinicius Oliveira\n\n        </h2>\n\n      </ion-item>\n\n      <ion-item color="none" id="ajuda-list-item16">\n\n        <ion-avatar item-left>\n\n          <img />\n\n        </ion-avatar>\n\n        <h2>\n\n          Nicholas Maestrello\n\n        </h2>\n\n      </ion-item>\n\n    </ion-list>\n\n  </ion-card>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Nicholas Maestrello\Documents\GitHub\IonicAppFatec\src\pages\ajuda\ajuda.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
], AjudaPage);

//# sourceMappingURL=ajuda.js.map

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GerenciarMateriasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GerenciarMateriasPage = (function () {
    function GerenciarMateriasPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    return GerenciarMateriasPage;
}());
GerenciarMateriasPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-gerenciar-materias',template:/*ion-inline-start:"C:\Users\Nicholas Maestrello\Documents\GitHub\IonicAppFatec\src\pages\gerenciar-materias\gerenciar-materias.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>\n\n      Gerenciar Materias\n\n    </ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button icon-only solid>\n\n        <ion-icon name="add"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding id="page2">\n\n  <ion-list id="gerenciarMaterias-list2">\n\n    <ion-item color="none" id="gerenciarMaterias-list-item10">\n\n      Calculo I\n\n    </ion-item>\n\n    <ion-item color="none" id="gerenciarMaterias-list-item11">\n\n      Analise de Algoritmos\n\n    </ion-item>\n\n    <ion-item color="none" id="gerenciarMaterias-list-item12">\n\n      Estrutura de Dados\n\n    </ion-item>\n\n  </ion-list>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Nicholas Maestrello\Documents\GitHub\IonicAppFatec\src\pages\gerenciar-materias\gerenciar-materias.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
], GerenciarMateriasPage);

//# sourceMappingURL=gerenciar-materias.js.map

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataDasProvasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DataDasProvasPage = (function () {
    function DataDasProvasPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    return DataDasProvasPage;
}());
DataDasProvasPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-data-das-provas',template:/*ion-inline-start:"C:\Users\Nicholas Maestrello\Documents\GitHub\IonicAppFatec\src\pages\data-das-provas\data-das-provas.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>\n\n      Data das provas\n\n    </ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button icon-only solid>\n\n        <ion-icon name="add"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding id="page3">\n\n  <form id="dataDasProvas-form3">\n\n    <ion-item id="dataDasProvas-select1">\n\n      <ion-label>\n\n        Calculo I\n\n      </ion-label>\n\n      <ion-select name="">\n\n        <ion-option>\n\n          25/6\n\n        </ion-option>\n\n        <ion-option>\n\n          29/7\n\n        </ion-option>\n\n        <ion-option>\n\n          16/9\n\n        </ion-option>\n\n      </ion-select>\n\n    </ion-item>\n\n    <ion-item id="dataDasProvas-select2">\n\n      <ion-label>\n\n        Analide De Algoritmos\n\n      </ion-label>\n\n      <ion-select name="">\n\n        <ion-option>\n\n          30/6\n\n        </ion-option>\n\n        <ion-option>\n\n          21/8\n\n        </ion-option>\n\n        <ion-option>\n\n          27/9\n\n        </ion-option>\n\n      </ion-select>\n\n    </ion-item>\n\n    <ion-item id="dataDasProvas-select3">\n\n      <ion-label>\n\n        Estrutura de Dados\n\n      </ion-label>\n\n      <ion-select name="">\n\n        <ion-option>\n\n          26/6\n\n        </ion-option>\n\n        <ion-option>\n\n          12/8\n\n        </ion-option>\n\n        <ion-option>\n\n          29/9\n\n        </ion-option>\n\n      </ion-select>\n\n    </ion-item>\n\n  </form>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Nicholas Maestrello\Documents\GitHub\IonicAppFatec\src\pages\data-das-provas\data-das-provas.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
], DataDasProvasPage);

//# sourceMappingURL=data-das-provas.js.map

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomePage = (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"C:\Users\Nicholas Maestrello\Documents\GitHub\IonicAppFatec\src\pages\home\home.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n      </button>\n\n    <ion-searchbar placeholder="" name="" id="home-search2"></ion-searchbar>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content id="page1">\n\n  <img id="imagem" src="assets/img/4vlRV62nQcCy0ZJYSXxK_MapaBase.png"  />\n\n</ion-content>'/*ion-inline-end:"C:\Users\Nicholas Maestrello\Documents\GitHub\IonicAppFatec\src\pages\home\home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(216);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 216:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(257);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_gerenciar_materias_gerenciar_materias__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_data_das_provas_data_das_provas__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_material_de_sala_material_de_sala__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_ajuda_ajuda__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_camapa_camapa__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_canvas_draw_canvas_draw__ = __webpack_require__(266);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_status_bar__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_splash_screen__ = __webpack_require__(191);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_5__pages_gerenciar_materias_gerenciar_materias__["a" /* GerenciarMateriasPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_data_das_provas_data_das_provas__["a" /* DataDasProvasPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_material_de_sala_material_de_sala__["a" /* MaterialDeSalaPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_ajuda_ajuda__["a" /* AjudaPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_camapa_camapa__["a" /* CamapaPage */],
            __WEBPACK_IMPORTED_MODULE_10__components_canvas_draw_canvas_draw__["a" /* CanvasDrawComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../pages/camapa/camapa.module#CamapaPageModule', name: 'CamapaPage', segment: 'camapa', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/segunda-tela/segunda-tela.module#SegundaTelaPageModule', name: 'SegundaTelaPage', segment: 'segunda-tela', priority: 'low', defaultHistory: [] }
                ]
            })
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_5__pages_gerenciar_materias_gerenciar_materias__["a" /* GerenciarMateriasPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_data_das_provas_data_das_provas__["a" /* DataDasProvasPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_material_de_sala_material_de_sala__["a" /* MaterialDeSalaPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_ajuda_ajuda__["a" /* AjudaPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_camapa_camapa__["a" /* CamapaPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_11__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_12__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 257:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_material_de_sala_material_de_sala__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_ajuda_ajuda__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_gerenciar_materias_gerenciar_materias__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_data_das_provas_data_das_provas__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_camapa_camapa__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_home_home__ = __webpack_require__(196);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_9__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp.prototype.goToMaterialDeSala = function (params) {
        if (!params)
            params = {};
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__pages_material_de_sala_material_de_sala__["a" /* MaterialDeSalaPage */]);
    };
    MyApp.prototype.goToAjuda = function (params) {
        if (!params)
            params = {};
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__pages_ajuda_ajuda__["a" /* AjudaPage */]);
    };
    MyApp.prototype.goToGerenciarMaterias = function (params) {
        if (!params)
            params = {};
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__pages_gerenciar_materias_gerenciar_materias__["a" /* GerenciarMateriasPage */]);
    };
    MyApp.prototype.goToHome = function (params) {
        if (!params)
            params = {};
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_9__pages_home_home__["a" /* HomePage */]);
    };
    MyApp.prototype.goToDataDasProvas = function (params) {
        if (!params)
            params = {};
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__pages_data_das_provas_data_das_provas__["a" /* DataDasProvasPage */]);
    };
    MyApp.prototype.goToCamapa = function (params) {
        if (!params)
            params = {};
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_8__pages_camapa_camapa__["a" /* CamapaPage */]);
    };
    return MyApp;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */])
], MyApp.prototype, "navCtrl", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\Users\Nicholas Maestrello\Documents\GitHub\IonicAppFatec\src\app\app.html"*/'<ion-menu [content]="mainContent">\n\n  <ion-header>\n\n    <ion-toolbar>\n\n      <ion-title>\n\n        Menu\n\n      </ion-title>\n\n    </ion-toolbar>\n\n  </ion-header>\n\n  <ion-content id="side-menu21" style="background-color:#C5CECA;">\n\n    <ion-list id="menu-list1">\n\n      <ion-item-sliding>\n\n        <ion-item color="none" menuClose="" on-click="goToHome()" id="menu-list-item2">\n\n          <ion-icon name="home" item-left></ion-icon>\n\n          Mapa\n\n        </ion-item>\n\n        <ion-item-options side="left">\n\n          <button ion-button color="positive">\n\n            Teste\n\n          </button>\n\n        </ion-item-options>\n\n      </ion-item-sliding>\n\n      <ion-item-sliding>\n\n        <ion-item color="none" menuClose="" on-click="goToGerenciarMaterias()" id="menu-list-item6">\n\n          <ion-icon name="briefcase" item-left></ion-icon>\n\n          Gerenciar Materias\n\n        </ion-item>\n\n        <ion-item-options side="left">\n\n          <button ion-button color="positive">\n\n            Teste\n\n          </button>\n\n          <button ion-button color="light"></button>\n\n        </ion-item-options>\n\n      </ion-item-sliding>\n\n      <ion-item-sliding>\n\n        <ion-item color="none" menuClose="" on-click="goToDataDasProvas()" id="menu-list-item3">\n\n          <ion-icon name="calendar" item-left></ion-icon>\n\n          Data das Provas\n\n        </ion-item>\n\n        <ion-item-options side="left">\n\n          <button ion-button color="assertive">\n\n            Proxima\n\n          </button>\n\n        </ion-item-options>\n\n      </ion-item-sliding>\n\n      <ion-item color="none" menuClose="" on-click="goToMaterialDeSala()" id="menu-list-item5">\n\n        <ion-icon name="document" item-left></ion-icon>\n\n        Material de Sala\n\n      </ion-item>\n\n      <ion-item color="none" menuClose="" on-click="goToAjuda()" id="menu-list-item4">\n\n        <ion-icon name="information-circle" item-left></ion-icon>\n\n        Ajuda\n\n      </ion-item>\n\n      <ion-item color="none" menuClose="" on-click="goToCamapa()" id="menu-list-item4">\n\n        <ion-icon name="aperture" item-left></ion-icon>\n\n        teste\n\n      </ion-item>\n\n    </ion-list>\n\n  </ion-content>\n\n</ion-menu>\n\n\n\n<ion-nav #mainContent [root]="rootPage"></ion-nav>'/*ion-inline-end:"C:\Users\Nicholas Maestrello\Documents\GitHub\IonicAppFatec\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 266:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CanvasDrawComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CanvasDrawComponent = (function () {
    function CanvasDrawComponent(platform, renderer) {
        this.platform = platform;
        this.renderer = renderer;
        this.currentColour = '#1abc9c';
        this.brushSize = 5;
        //imagem = "https://mdn.mozillademos.org/files/5397/rhino.jp"
        this.imagem = '../../assets/img/asdf.png';
        console.log('Hello CanvasDraw Component');
    }
    CanvasDrawComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.canvasElement = this.canvas.nativeElement;
        //this.renderer.setElementAttribute(this.canvasElement, 'width', this.platform.width() + '');
        //this.renderer.setElementAttribute(this.canvasElement, 'height', this.platform.height() + '');
        var ctx = this.canvasElement.getContext('2d');
        var source = new Image();
        source.crossOrigin = 'Anonymous';
        source.onload = function () {
            //this.canvasElement.height = source.height - 50
            //this.canvasElement.width = source.width - 50
            ctx.drawImage(source, 1, 1, _this.canvasElement.width, _this.canvasElement.height);
        };
        source.src = this.imagem;
        //img.src = '../../assets/img/asdf.png'
    };
    CanvasDrawComponent.prototype.handleStart = function (ev) {
        //console.log(ev)
        this.lastX = ev.touches[0].pageX;
        this.lastY = ev.touches[0].pageY;
    };
    CanvasDrawComponent.prototype.handleMove = function (ev) {
        var ctx = this.canvasElement.getContext('2d');
        var currentX = ev.touches[0].pageX;
        var currentY = ev.touches[0].pageY;
        var x = currentX + 1;
        var y = currentY + 1;
        //console.log(ctx.getImageData(x, y, 1,1))
        /*
               ctx.beginPath();
               ctx.lineJoin = "round";
               ctx.moveTo(this.lastX, this.lastY);
               ctx.lineTo(currentX, currentY);
               ctx.closePath();
               ctx.strokeStyle = this.currentColour;
               ctx.lineWidth = this.brushSize;
               ctx.stroke();  */
        this.lastX = currentX;
        this.lastY = currentY;
    };
    CanvasDrawComponent.prototype.clearCanvas = function () {
        var ctx = this.canvasElement.getContext('2d');
        ctx.clearRect(0, 0, this.canvasElement.width, this.canvasElement.height);
    };
    CanvasDrawComponent.prototype.zoomIn = function () {
        console.log("clicou");
        var ctx = this.canvasElement.getContext('2d');
        this.clearCanvas();
        var source = new Image();
        ctx.scale(2, 2);
        source.onload = function () {
            //this.canvasElement.height = source.height - 50
            //this.canvasElement.width = source.width - 50
            ctx.drawImage(source, 1, 1, 100, 100);
        };
        source.src = this.imagem;
    };
    CanvasDrawComponent.prototype.zoomOut = function () {
        console.log("clicou");
        var ctx = this.canvasElement.getContext('2d');
        this.clearCanvas();
        var source = new Image();
        ctx.scale(0.5, 0.5);
        source.onload = function () {
            //this.canvasElement.height = source.height - 50
            //this.canvasElement.width = source.width - 50
            ctx.drawImage(source, 1, 1, 100, 100);
        };
        source.src = this.imagem;
    };
    CanvasDrawComponent.prototype.drawlingImage = function () {
    };
    return CanvasDrawComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('myCanvas'),
    __metadata("design:type", Object)
], CanvasDrawComponent.prototype, "canvas", void 0);
CanvasDrawComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'canvas-draw',template:/*ion-inline-start:"C:\Users\Nicholas Maestrello\Documents\GitHub\IonicAppFatec\src\components\canvas-draw\canvas-draw.html"*/'<ion-toolbar id="top-toolbar">\n  Cabeçalho do mapa\n</ion-toolbar>\n\n<canvas id="canvas" #myCanvas (touchstart)="handleStart($event)" (touchmove)="handleMove($event)"></canvas>\n\n<ion-toolbar id="bottom-toolbar">\n  <ion-buttons left>\n      <button ion-button (click)="zoomIn()" >Zoom in</button>\n  </ion-buttons>\n  <ion-buttons right>\n      <button ion-button (click)="zoomOut()" >Zoom out</button>\n  </ion-buttons>\n</ion-toolbar>'/*ion-inline-end:"C:\Users\Nicholas Maestrello\Documents\GitHub\IonicAppFatec\src\components\canvas-draw\canvas-draw.html"*/
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Renderer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Renderer */]) === "function" && _b || Object])
], CanvasDrawComponent);

var _a, _b;
//# sourceMappingURL=canvas-draw.js.map

/***/ }),

/***/ 98:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CamapaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the CamapaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CamapaPage = (function () {
    function CamapaPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    CamapaPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CamapaPage');
    };
    return CamapaPage;
}());
CamapaPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-camapa',template:/*ion-inline-start:"C:\Users\Nicholas Maestrello\Documents\GitHub\IonicAppFatec\src\pages\camapa\camapa.html"*/'<!--\n  Generated template for the CamapaPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>camapa</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content no-bounce>\n  <div id="back">\n    <canvas-draw></canvas-draw>\n  </div>\n</ion-content>'/*ion-inline-end:"C:\Users\Nicholas Maestrello\Documents\GitHub\IonicAppFatec\src\pages\camapa\camapa.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
], CamapaPage);

//# sourceMappingURL=camapa.js.map

/***/ })

},[197]);
//# sourceMappingURL=main.js.map