"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_respuestacorrecta_respuestacorrecta_module_ts"],{

/***/ 8195:
/*!*****************************************************************************!*\
  !*** ./src/app/pages/respuestacorrecta/respuestacorrecta-routing.module.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RespuestacorrectaPageRoutingModule": () => (/* binding */ RespuestacorrectaPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _respuestacorrecta_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./respuestacorrecta.page */ 8572);




const routes = [
    {
        path: '',
        component: _respuestacorrecta_page__WEBPACK_IMPORTED_MODULE_0__.RespuestacorrectaPage
    }
];
let RespuestacorrectaPageRoutingModule = class RespuestacorrectaPageRoutingModule {
};
RespuestacorrectaPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], RespuestacorrectaPageRoutingModule);



/***/ }),

/***/ 3300:
/*!*********************************************************************!*\
  !*** ./src/app/pages/respuestacorrecta/respuestacorrecta.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RespuestacorrectaPageModule": () => (/* binding */ RespuestacorrectaPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _respuestacorrecta_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./respuestacorrecta-routing.module */ 8195);
/* harmony import */ var _respuestacorrecta_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./respuestacorrecta.page */ 8572);







let RespuestacorrectaPageModule = class RespuestacorrectaPageModule {
};
RespuestacorrectaPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _respuestacorrecta_routing_module__WEBPACK_IMPORTED_MODULE_0__.RespuestacorrectaPageRoutingModule
        ],
        declarations: [_respuestacorrecta_page__WEBPACK_IMPORTED_MODULE_1__.RespuestacorrectaPage]
    })
], RespuestacorrectaPageModule);



/***/ }),

/***/ 8572:
/*!*******************************************************************!*\
  !*** ./src/app/pages/respuestacorrecta/respuestacorrecta.page.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RespuestacorrectaPage": () => (/* binding */ RespuestacorrectaPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _respuestacorrecta_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./respuestacorrecta.page.html?ngResource */ 3996);
/* harmony import */ var _respuestacorrecta_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./respuestacorrecta.page.scss?ngResource */ 8035);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);




let RespuestacorrectaPage = class RespuestacorrectaPage {
    constructor() { }
    ngOnInit() {
    }
};
RespuestacorrectaPage.ctorParameters = () => [];
RespuestacorrectaPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-respuestacorrecta',
        template: _respuestacorrecta_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_respuestacorrecta_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], RespuestacorrectaPage);



/***/ }),

/***/ 8035:
/*!********************************************************************************!*\
  !*** ./src/app/pages/respuestacorrecta/respuestacorrecta.page.scss?ngResource ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZXNwdWVzdGFjb3JyZWN0YS5wYWdlLnNjc3MifQ== */";

/***/ }),

/***/ 3996:
/*!********************************************************************************!*\
  !*** ./src/app/pages/respuestacorrecta/respuestacorrecta.page.html?ngResource ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>respuestacorrecta</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_respuestacorrecta_respuestacorrecta_module_ts.js.map