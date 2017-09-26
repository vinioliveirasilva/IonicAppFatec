webpackJsonp([0],{

/***/ 106:
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
webpackEmptyAsyncContext.id = 106;

/***/ }),

/***/ 147:
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
webpackEmptyAsyncContext.id = 147;

/***/ }),

/***/ 191:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MaterialDeSalaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
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
        selector: 'page-material-de-sala',template:/*ion-inline-start:"C:\Users\ViniO\OneDrive - Centro Paula Souza - FATEC\Projetos\AppFatec\IonicAppFatec\src\pages\material-de-sala\material-de-sala.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      Material de sala\n    </ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only solid>\n        <ion-icon name="add"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page4"></ion-content>'/*ion-inline-end:"C:\Users\ViniO\OneDrive - Centro Paula Souza - FATEC\Projetos\AppFatec\IonicAppFatec\src\pages\material-de-sala\material-de-sala.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
], MaterialDeSalaPage);

//# sourceMappingURL=material-de-sala.js.map

/***/ }),

/***/ 192:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AjudaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
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
        selector: 'page-ajuda',template:/*ion-inline-start:"C:\Users\ViniO\OneDrive - Centro Paula Souza - FATEC\Projetos\AppFatec\IonicAppFatec\src\pages\ajuda\ajuda.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      Ajuda\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page5">\n  <h1 id="ajuda-heading1" style="color:#000000;">\n    Como Usar\n  </h1>\n  <div id="ajuda-markdown2" class="show-list-numbers-and-dots">\n    <p style="color:#000000;">\n      Pellentesque pharetra quam ut ligula convallis pretium. Fusce mattis efficitur sodales. Pellentesque sit amet nibh nec purus suscipit tincidunt in sit amet ante. Sed eu diam odio. Fusce auctor ut erat quis venenatis. In vitae ultrices elit, vitae malesuada\n      mi.\n    </p>\n  </div>\n  <div class="spacer" style="height:10px;" id="ajuda-spacer1"></div>\n  <h3 id="ajuda-heading2" style="color:#000000;font-weight:400;">\n    Desenvolvido por\n  </h3>\n  <ion-card id="ajuda-card21">\n    <ion-list>\n      <ion-item color="none" id="ajuda-list-item14">\n        <ion-avatar item-left>\n          <img />\n        </ion-avatar>\n        <h2>\n          Vinicius Oliveira\n        </h2>\n      </ion-item>\n      <ion-item color="none" id="ajuda-list-item16">\n        <ion-avatar item-left>\n          <img />\n        </ion-avatar>\n        <h2>\n          Nicholas Maestrelo\n        </h2>\n      </ion-item>\n    </ion-list>\n  </ion-card>\n</ion-content>'/*ion-inline-end:"C:\Users\ViniO\OneDrive - Centro Paula Souza - FATEC\Projetos\AppFatec\IonicAppFatec\src\pages\ajuda\ajuda.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
], AjudaPage);

//# sourceMappingURL=ajuda.js.map

/***/ }),

/***/ 193:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GerenciarMateriasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
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
        selector: 'page-gerenciar-materias',template:/*ion-inline-start:"C:\Users\ViniO\OneDrive - Centro Paula Souza - FATEC\Projetos\AppFatec\IonicAppFatec\src\pages\gerenciar-materias\gerenciar-materias.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      Gerenciar Materias\n    </ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only solid>\n        <ion-icon name="add"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page2">\n  <ion-list id="gerenciarMaterias-list2">\n    <ion-item color="none" id="gerenciarMaterias-list-item10">\n      Calculo I\n    </ion-item>\n    <ion-item color="none" id="gerenciarMaterias-list-item11">\n      Analise de Algoritmos\n    </ion-item>\n    <ion-item color="none" id="gerenciarMaterias-list-item12">\n      Estrutura de Dados\n    </ion-item>\n  </ion-list>\n</ion-content>'/*ion-inline-end:"C:\Users\ViniO\OneDrive - Centro Paula Souza - FATEC\Projetos\AppFatec\IonicAppFatec\src\pages\gerenciar-materias\gerenciar-materias.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
], GerenciarMateriasPage);

//# sourceMappingURL=gerenciar-materias.js.map

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataDasProvasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
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
        selector: 'page-data-das-provas',template:/*ion-inline-start:"C:\Users\ViniO\OneDrive - Centro Paula Souza - FATEC\Projetos\AppFatec\IonicAppFatec\src\pages\data-das-provas\data-das-provas.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      Data das provas\n    </ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only solid>\n        <ion-icon name="add"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page3">\n  <form id="dataDasProvas-form3">\n    <ion-item id="dataDasProvas-select1">\n      <ion-label>\n        Calculo I\n      </ion-label>\n      <ion-select name="">\n        <ion-option>\n          25/6\n        </ion-option>\n        <ion-option>\n          29/7\n        </ion-option>\n        <ion-option>\n          16/9\n        </ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item id="dataDasProvas-select2">\n      <ion-label>\n        Analide De Algoritmos\n      </ion-label>\n      <ion-select name="">\n        <ion-option>\n          30/6\n        </ion-option>\n        <ion-option>\n          21/8\n        </ion-option>\n        <ion-option>\n          27/9\n        </ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item id="dataDasProvas-select3">\n      <ion-label>\n        Estrutura de Dados\n      </ion-label>\n      <ion-select name="">\n        <ion-option>\n          26/6\n        </ion-option>\n        <ion-option>\n          12/8\n        </ion-option>\n        <ion-option>\n          29/9\n        </ion-option>\n      </ion-select>\n    </ion-item>\n  </form>\n</ion-content>'/*ion-inline-end:"C:\Users\ViniO\OneDrive - Centro Paula Souza - FATEC\Projetos\AppFatec\IonicAppFatec\src\pages\data-das-provas\data-das-provas.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
], DataDasProvasPage);

//# sourceMappingURL=data-das-provas.js.map

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
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
        selector: 'page-home',template:/*ion-inline-start:"C:\Users\ViniO\OneDrive - Centro Paula Souza - FATEC\Projetos\AppFatec\IonicAppFatec\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      Home\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page1">\n  <form id="home-form2">\n    <ion-searchbar placeholder="" name="" id="home-search2"></ion-searchbar>\n  </form>\n  <div>\n    <img src="assets/img/4vlRV62nQcCy0ZJYSXxK_MapaBase.png" style="display:block;width:100%;height:auto;margin-left:auto;margin-right:auto;" />\n  </div>\n</ion-content>'/*ion-inline-end:"C:\Users\ViniO\OneDrive - Centro Paula Souza - FATEC\Projetos\AppFatec\IonicAppFatec\src\pages\home\home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(215);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 215:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(256);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_gerenciar_materias_gerenciar_materias__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_data_das_provas_data_das_provas__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_material_de_sala_material_de_sala__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_ajuda_ajuda__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_status_bar__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_splash_screen__ = __webpack_require__(190);
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
            __WEBPACK_IMPORTED_MODULE_8__pages_ajuda_ajuda__["a" /* AjudaPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */])
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_5__pages_gerenciar_materias_gerenciar_materias__["a" /* GerenciarMateriasPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_data_das_provas_data_das_provas__["a" /* DataDasProvasPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_material_de_sala_material_de_sala__["a" /* MaterialDeSalaPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_ajuda_ajuda__["a" /* AjudaPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_9__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_10__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 256:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_material_de_sala_material_de_sala__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_ajuda_ajuda__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_gerenciar_materias_gerenciar_materias__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_data_das_provas_data_das_provas__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_home_home__ = __webpack_require__(195);
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
        this.rootPage = __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */];
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
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */]);
    };
    MyApp.prototype.goToDataDasProvas = function (params) {
        if (!params)
            params = {};
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__pages_data_das_provas_data_das_provas__["a" /* DataDasProvasPage */]);
    };
    return MyApp;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Nav */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Nav */])
], MyApp.prototype, "navCtrl", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\Users\ViniO\OneDrive - Centro Paula Souza - FATEC\Projetos\AppFatec\IonicAppFatec\src\app\app.html"*/'<ion-menu [content]="mainContent">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>\n        Menu\n      </ion-title>\n    </ion-toolbar>\n  </ion-header>\n  <ion-content id="side-menu21" style="background-color:#C5CECA;">\n    <ion-list id="menu-list1">\n      <ion-item-sliding>\n        <ion-item color="none" menuClose="" on-click="goToHome()" id="menu-list-item2">\n          <ion-icon name="home" item-left></ion-icon>\n          Mapa\n        </ion-item>\n        <ion-item-options side="left">\n          <button ion-button color="positive">\n            Teste\n          </button>\n        </ion-item-options>\n      </ion-item-sliding>\n      <ion-item-sliding>\n        <ion-item color="none" menuClose="" on-click="goToGerenciarMaterias()" id="menu-list-item6">\n          <ion-icon name="briefcase" item-left></ion-icon>\n          Gerenciar Materias\n        </ion-item>\n        <ion-item-options side="left">\n          <button ion-button color="positive">\n            Teste\n          </button>\n          <button ion-button color="light"></button>\n        </ion-item-options>\n      </ion-item-sliding>\n      <ion-item-sliding>\n        <ion-item color="none" menuClose="" on-click="goToDataDasProvas()" id="menu-list-item3">\n          <ion-icon name="calendar" item-left></ion-icon>\n          Data das Provas\n        </ion-item>\n        <ion-item-options side="left">\n          <button ion-button color="assertive">\n            Proxima\n          </button>\n        </ion-item-options>\n      </ion-item-sliding>\n      <ion-item color="none" menuClose="" on-click="goToMaterialDeSala()" id="menu-list-item5">\n        <ion-icon name="document" item-left></ion-icon>\n        Material de Sala\n      </ion-item>\n      <ion-item color="none" menuClose="" on-click="goToAjuda()" id="menu-list-item4">\n        <ion-icon name="information-circle" item-left></ion-icon>\n        Ajuda\n      </ion-item>\n    </ion-list>\n  </ion-content>\n</ion-menu>\n\n<ion-nav #mainContent [root]="rootPage"></ion-nav>'/*ion-inline-end:"C:\Users\ViniO\OneDrive - Centro Paula Souza - FATEC\Projetos\AppFatec\IonicAppFatec\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ })

},[196]);
//# sourceMappingURL=main.js.map