"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_home_home_module_ts"],{

/***/ 6610:
/*!***************************************************!*\
  !*** ./src/app/pages/home/home-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageRoutingModule": () => (/* binding */ HomePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 678);




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], HomePageRoutingModule);



/***/ }),

/***/ 7994:
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageModule": () => (/* binding */ HomePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home-routing.module */ 6610);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.page */ 678);







let HomePageModule = class HomePageModule {
};
HomePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _home_routing_module__WEBPACK_IMPORTED_MODULE_0__.HomePageRoutingModule
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_1__.HomePage]
    })
], HomePageModule);



/***/ }),

/***/ 678:
/*!*****************************************!*\
  !*** ./src/app/pages/home/home.page.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePage": () => (/* binding */ HomePage)
/* harmony export */ });
/* harmony import */ var _home_estb_Escritorio_Asistencia_AsistenciaAPP_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _home_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.page.html?ngResource */ 8380);
/* harmony import */ var _home_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.page.scss?ngResource */ 2260);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _model_Persona__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../model/Persona */ 9139);









let HomePage = class HomePage {
  constructor(activeroute, router, alertController, animationController) {
    this.activeroute = activeroute;
    this.router = router;
    this.alertController = alertController;
    this.animationController = animationController;
    this.persona = new _model_Persona__WEBPACK_IMPORTED_MODULE_3__.Persona();
    this.activeroute.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.usuario = this.router.getCurrentNavigation().extras.state.usuario;
      } else {
        this.router.navigate(['/login']);
      }
    });
  }

  ngAfterViewInit() {
    const animation = this.animationController.create().addElement(this.titulo.nativeElement).iterations(1).duration(5000).fromTo('transform', 'translate(100%)', 'translate( 0%)').fromTo('opacity', 0.5, 1);
    animation.play();
  }

  ngOnInit() {}

  goToLogout() {
    this.router.navigate(['/']);
  }

  limpiarFormulario() {
    for (const [key, value] of Object.entries(this.persona)) {
      Object.defineProperty(this.persona, key, {
        value: ''
      });
    }
  }

  presentAlert(titulo, mensaje) {
    var _this = this;

    return (0,_home_estb_Escritorio_Asistencia_AsistenciaAPP_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this.alertController.create({
        header: titulo,
        message: mensaje,
        buttons: ['OK']
      });
      yield alert.present();
    })();
  }

  goToQR() {
    this.router.navigate(['/qrreader']);
  }

};

HomePage.ctorParameters = () => [{
  type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.AlertController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.AnimationController
}];

HomePage.propDecorators = {
  titulo: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ViewChild,
    args: ['titulo', {
      read: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ElementRef,
      static: true
    }]
  }]
};
HomePage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
  selector: 'app-home',
  template: _home_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_home_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], HomePage);


/***/ }),

/***/ 2260:
/*!******************************************************!*\
  !*** ./src/app/pages/home/home.page.scss?ngResource ***!
  \******************************************************/
/***/ ((module) => {

module.exports = "ion-header {\n  --padding-top: 20px;\n  --padding-bottom: 20px;\n  --padding-end: 20px;\n  --padding-start: 20px;\n}\n\nion-title {\n  font-size: 10em;\n  font-size: 18px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUJBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7QUFDSjs7QUFFRTtFQUNFLGVBQUE7RUFDQSxlQUFBO0FBQ0oiLCJmaWxlIjoiaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taGVhZGVyIHtcbiAgICAtLXBhZGRpbmctdG9wOiAyMHB4O1xuICAgIC0tcGFkZGluZy1ib3R0b206IDIwcHg7XG4gICAgLS1wYWRkaW5nLWVuZDogMjBweDtcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDIwcHg7XG4gIH1cbiAgXG4gIGlvbi10aXRsZSB7XG4gICAgZm9udC1zaXplOiAxMGVtO1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgfVxuXG4gIFxuICBcbiJdfQ== */";

/***/ }),

/***/ 8380:
/*!******************************************************!*\
  !*** ./src/app/pages/home/home.page.html?ngResource ***!
  \******************************************************/
/***/ ((module) => {

module.exports = "<!-- Comienza el Header -->\n<ion-header>\n  <ion-toolbar color=\"dark\">\n    <ion-title #titulo class=\"ion-text-left ion-text\">\n      <div class=\"titulo\">\n        Sistema de asistencia DUOC       \n      </div>      \n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n<!-- Termina el Header -->\n\n<!-- Comienza el Content -->\n<ion-content [fullscreen]=\"true\" class=\"ion-padding-horizontal\">\n  <ion-title class=\"ion-padding-top\">\n      <!-- {{interpolacion}} \n          Permite mostrar los datos desde el script a la visual\n          verificar el data en el home.page.ts\n        -->\n\n        <ion-card>\n          <ion-card-header>\n            <ion-card-title class=\"ion-text-center\">Datos del Usuario</ion-card-title>\n            <br>\n            <ion-card-subtitle class=\"ion-text-center\" *ngIf=\"usuario\">Nombre del Usuario</ion-card-subtitle>\n            <ion-card-subtitle class=\"ion-text-center\" *ngIf=\"usuario\">{{ usuario.nombre }}</ion-card-subtitle>\n            <br>\n            <ion-card-subtitle class=\"ion-text-center\" *ngIf=\"usuario\">Correo del Usuario: {{ usuario.correo }}</ion-card-subtitle>\n          </ion-card-header>\n        </ion-card>\n        <hr>\n  </ion-title>\n  \n  <ion-grid>\n    <ion-row>\n      <ion-col col-6>\n        <ion-button color=\"warning\"shape=\"block\" (click)=\"goToQR()\">\n          QR\n        </ion-button>\n      </ion-col>\n      <ion-col col-6>\n        <ion-button color=\"dark\" shape=\"block\" (click)=\"goToLogout()\">\n          CERRAR SESION\n        </ion-button>\n      </ion-col>\n    </ion-row>    \n    \n  </ion-grid>\n<!-- Termina el Content -->\n\n<!-- Comienza el Footer -->\n<!-- Termina el Header -->";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_home_home_module_ts.js.map