"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_pregunta-incorrec_pregunta-incorrec_module_ts"],{

/***/ 8928:
/*!*****************************************************************************!*\
  !*** ./src/app/pages/pregunta-incorrec/pregunta-incorrec-routing.module.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PreguntaIncorrecPageRoutingModule": () => (/* binding */ PreguntaIncorrecPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _pregunta_incorrec_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pregunta-incorrec.page */ 7634);




const routes = [
    {
        path: '',
        component: _pregunta_incorrec_page__WEBPACK_IMPORTED_MODULE_0__.PreguntaIncorrecPage
    }
];
let PreguntaIncorrecPageRoutingModule = class PreguntaIncorrecPageRoutingModule {
};
PreguntaIncorrecPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], PreguntaIncorrecPageRoutingModule);



/***/ }),

/***/ 6415:
/*!*********************************************************************!*\
  !*** ./src/app/pages/pregunta-incorrec/pregunta-incorrec.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PreguntaIncorrecPageModule": () => (/* binding */ PreguntaIncorrecPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _pregunta_incorrec_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pregunta-incorrec-routing.module */ 8928);
/* harmony import */ var _pregunta_incorrec_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pregunta-incorrec.page */ 7634);







let PreguntaIncorrecPageModule = class PreguntaIncorrecPageModule {
};
PreguntaIncorrecPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _pregunta_incorrec_routing_module__WEBPACK_IMPORTED_MODULE_0__.PreguntaIncorrecPageRoutingModule
        ],
        declarations: [_pregunta_incorrec_page__WEBPACK_IMPORTED_MODULE_1__.PreguntaIncorrecPage]
    })
], PreguntaIncorrecPageModule);



/***/ }),

/***/ 7634:
/*!*******************************************************************!*\
  !*** ./src/app/pages/pregunta-incorrec/pregunta-incorrec.page.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PreguntaIncorrecPage": () => (/* binding */ PreguntaIncorrecPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _pregunta_incorrec_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pregunta-incorrec.page.html?ngResource */ 1877);
/* harmony import */ var _pregunta_incorrec_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pregunta-incorrec.page.scss?ngResource */ 6220);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_model_Usuario__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/model/Usuario */ 2844);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);






let PreguntaIncorrecPage = class PreguntaIncorrecPage {
    constructor(activeroute, router) {
        this.activeroute = activeroute;
        this.router = router;
        this.usuario = new src_app_model_Usuario__WEBPACK_IMPORTED_MODULE_2__.Usuario('', '', '', '', '');
        this.nombre = '';
    }
    ngOnInit() {
    }
    volverAlInicio() {
        this.router.navigate(['/login']);
    }
};
PreguntaIncorrecPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router }
];
PreguntaIncorrecPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-pregunta-incorrec',
        template: _pregunta_incorrec_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_pregunta_incorrec_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], PreguntaIncorrecPage);



/***/ }),

/***/ 6220:
/*!********************************************************************************!*\
  !*** ./src/app/pages/pregunta-incorrec/pregunta-incorrec.page.scss?ngResource ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcmVndW50YS1pbmNvcnJlYy5wYWdlLnNjc3MifQ== */";

/***/ }),

/***/ 1877:
/*!********************************************************************************!*\
  !*** ./src/app/pages/pregunta-incorrec/pregunta-incorrec.page.html?ngResource ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar color=\"black\">\n    <ion-title>Respuesta Incorrecta</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-card class=\"ion-text-center ion-padding-vertical\">\n    <img src=\"../../../assets/descarga (1).png\" alt=\"\">\n    <ion-card-content>\n      <ion-card-title *ngIf=\"usuario\">\n      </ion-card-title>\n      <h2>Tu Respuesta es Incorrecta</h2>\n      <h2>intentalo nuevamente</h2>\n      <h4>{{usuario.nombre}}</h4>\n    </ion-card-content>\n    <ion-button (click)=\"volverAlInicio()\" expand=\"block\" fill=\"clear\" shape=\"round\">\n      Volver Al Inicio\n    </ion-button>\n  </ion-card>\n\n</ion-content>\n\n<ion-footer style=\"margin: 10xp ;\">\n  <ion-toolbar color=\"primary\">\n    <ion-footer >\n\n    </ion-footer>\n  </ion-toolbar>\n</ion-footer>\n\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_pregunta-incorrec_pregunta-incorrec_module_ts.js.map