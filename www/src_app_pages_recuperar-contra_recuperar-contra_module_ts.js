"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_recuperar-contra_recuperar-contra_module_ts"],{

/***/ 5705:
/*!***************************************************************************!*\
  !*** ./src/app/pages/recuperar-contra/recuperar-contra-routing.module.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RecuperarContraPageRoutingModule": () => (/* binding */ RecuperarContraPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _recuperar_contra_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./recuperar-contra.page */ 9389);




const routes = [
    {
        path: '',
        component: _recuperar_contra_page__WEBPACK_IMPORTED_MODULE_0__.RecuperarContraPage
    }
];
let RecuperarContraPageRoutingModule = class RecuperarContraPageRoutingModule {
};
RecuperarContraPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], RecuperarContraPageRoutingModule);



/***/ }),

/***/ 6431:
/*!*******************************************************************!*\
  !*** ./src/app/pages/recuperar-contra/recuperar-contra.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RecuperarContraPageModule": () => (/* binding */ RecuperarContraPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _recuperar_contra_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./recuperar-contra-routing.module */ 5705);
/* harmony import */ var _recuperar_contra_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./recuperar-contra.page */ 9389);







let RecuperarContraPageModule = class RecuperarContraPageModule {
};
RecuperarContraPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _recuperar_contra_routing_module__WEBPACK_IMPORTED_MODULE_0__.RecuperarContraPageRoutingModule
        ],
        declarations: [_recuperar_contra_page__WEBPACK_IMPORTED_MODULE_1__.RecuperarContraPage]
    })
], RecuperarContraPageModule);



/***/ }),

/***/ 9389:
/*!*****************************************************************!*\
  !*** ./src/app/pages/recuperar-contra/recuperar-contra.page.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RecuperarContraPage": () => (/* binding */ RecuperarContraPage)
/* harmony export */ });
/* harmony import */ var _home_estb_Escritorio_Asistencia_AsistenciaAPP_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _recuperar_contra_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./recuperar-contra.page.html?ngResource */ 2136);
/* harmony import */ var _recuperar_contra_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./recuperar-contra.page.scss?ngResource */ 952);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var src_app_model_Usuario__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/model/Usuario */ 2844);




 // Las clases Router y NavigationExtras son necesarias para que la página login le pase
// el nombre de usuario a la página home

 // La clase ToastController sirve para mostrar mensajes emergente que duran un par de segundos



let RecuperarContraPage = class RecuperarContraPage {
  /*
    Para poder trabajar con Router y poder navegar hacia la página "home", debemos primero
    pasar como parámetro e instanciar un objeto de la clase "Router". Fijarse que el tipo
    de dato, que se pasa en el constructor es "Router" con mayúscula, porque se trata de
    una clase y éstas parten con letra mayúscula, mientras que "router" con minúscula es
    el objeto de esa clase, que usaremos para ejecutar el método "navigate".
  */
  constructor(router, toastController) {
    this.router = router;
    this.toastController = toastController;
    this.usuario = new src_app_model_Usuario__WEBPACK_IMPORTED_MODULE_3__.Usuario('', '', '', '', '');
    this.usuario.correo = '';
  }

  ngOnInit() {
    /*
      Las siguientes 3 líneas de código sirven para lo siguiente:
        Caso 1: Si las comentas, la página quedará lista para ingresar el nombre de
          usuario y la password
        Caso 2: Si dejas las instrucciones sin comentar, entonces entrará inmediatamente
          a la página home, usando el usuario por defecto "cgomezvega" con la
          password "123". Lo anterior es muy útil para el caso en que ya quedó lista
          la página de login y me interesa probar las otras páginas, de este modo se saltará
          el login y no tendrás que estar digitando los datos todo el tiempo.
    */
    // this.usuario.correo = 'cgomez';
    // this.usuario.password = '5678';
    // this.ingresar();
  }

  ingresarRecu() {
    if (!this.validarUsuarioRecu(this.usuario)) {
      return;
    }

    this.mostrarMensaje('¡Bienvenido!');
    const navigationExtras = {
      state: {
        usuario: this.usuario
      }
    }; // Navegamos hacia el Home y enviamos la información extra

    this.router.navigate(['/pregunta'], navigationExtras);
  }
  /*
    Usaremos validateModel para verificar que se cumplan las
    validaciones de los campos del formulario
  */


  validarUsuarioRecu(usuario) {
    const usu = this.usuario.buscarUsuarioValidoRecu(this.usuario.correo);

    if (usu) {
      this.usuario = usu;
      return true;
    } else {
      this.mostrarMensaje('Las credenciales no son correctas!');
      return false;
    }
  }
  /**
   * Muestra un toast al usuario
   *
   * @param mensaje Mensaje a presentar al usuario
   * @param duracion Duración el toast, este es opcional
   */


  mostrarMensaje(mensaje, duracion) {
    var _this = this;

    return (0,_home_estb_Escritorio_Asistencia_AsistenciaAPP_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const toast = yield _this.toastController.create({
        message: mensaje,
        duration: duracion ? duracion : 2000
      });
      toast.present();
    })();
  }

  goToLogin() {
    this.router.navigate(['/login']);
  }

};

RecuperarContraPage.ctorParameters = () => [{
  type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ToastController
}];

RecuperarContraPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
  selector: 'app-recuperar-contra',
  template: _recuperar_contra_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_recuperar_contra_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], RecuperarContraPage);


/***/ }),

/***/ 952:
/*!******************************************************************************!*\
  !*** ./src/app/pages/recuperar-contra/recuperar-contra.page.scss?ngResource ***!
  \******************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZWN1cGVyYXItY29udHJhLnBhZ2Uuc2NzcyJ9 */";

/***/ }),

/***/ 2136:
/*!******************************************************************************!*\
  !*** ./src/app/pages/recuperar-contra/recuperar-contra.page.html?ngResource ***!
  \******************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar color=\"dark\">\n    <ion-title>Recuperacion de Contraseña</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"ion-padding-vertical\">\n    <!--\n      Se establece un card que contendrá un título\n      y un contenido\n    -->\n    <ion-card class=\"ion-text-center ion-padding-vertical\">\n\n      <div>\n        <img src=\"./assets/icon/Logo_DuocUC.png\" />\n      </div>\n      <ion-card-title class=\"ion-text-center\">\n        <ion-label>\n          <h2>Validacion para recuperar contraseña</h2>\n        </ion-label>\n      </ion-card-title>\n\n      <ion-card-content>\n        <ion-item>\n          <ion-label position=\"floating\" >Correo</ion-label>\n          <!-- Usamos ngModel para indicarle al input con que propiedad del controlador va a trabajar -->\n          <ion-input type=\"text\" [(ngModel)]=\"usuario.correo\"></ion-input>\n        </ion-item>\n        \n        <ion-row>\n          <ion-col col-6>\n            <!-- \n              Para usar un método de la clase controladora, hay que escribir el evento del control entre paréntesis y luego\n              indicar cual es el método a ejecutar; en este caso se trata de ingresar()\n            -->\n            <ion-button  color=\"warning\" shape=\"full\" (click)=\"ingresarRecu()\">Ingresar</ion-button>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col col-6>\n            <!-- \n              Para usar un método de la clase controladora, hay que escribir el evento del control entre paréntesis y luego\n              indicar cual es el método a ejecutar; en este caso se trata de ingresar()\n            -->\n            <ion-button  color=\"warning\" shape=\"\" (click)=\"goToLogin()\">INICIA SESION</ion-button>\n          </ion-col>\n        </ion-row>\n      </ion-card-content>\n    </ion-card>\n  </div>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_recuperar-contra_recuperar-contra_module_ts.js.map