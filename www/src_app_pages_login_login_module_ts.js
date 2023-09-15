"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_login_login_module_ts"],{

/***/ 3403:
/*!*****************************************************!*\
  !*** ./src/app/pages/login/login-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageRoutingModule": () => (/* binding */ LoginPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.page */ 3058);




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_0__.LoginPage
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], LoginPageRoutingModule);



/***/ }),

/***/ 1053:
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageModule": () => (/* binding */ LoginPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login-routing.module */ 3403);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page */ 3058);







let LoginPageModule = class LoginPageModule {
};
LoginPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _login_routing_module__WEBPACK_IMPORTED_MODULE_0__.LoginPageRoutingModule
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_1__.LoginPage]
    })
], LoginPageModule);



/***/ }),

/***/ 3058:
/*!*******************************************!*\
  !*** ./src/app/pages/login/login.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPage": () => (/* binding */ LoginPage)
/* harmony export */ });
/* harmony import */ var _home_estb_Escritorio_Asistencia_AsistenciaAPP_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _login_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page.html?ngResource */ 6752);
/* harmony import */ var _login_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.page.scss?ngResource */ 8433);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var src_app_model_Usuario__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/model/Usuario */ 2844);




 // Las clases Router y NavigationExtras son necesarias para que la página login le pase
// el nombre de usuario a la página home

 // La clase ToastController sirve para mostrar mensajes emergente que duran un par de segundos



let LoginPage = class LoginPage {
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
    this.usuario.correo = 'atorres@duocuc.cl';
    this.usuario.password = '1234';
  }

  ngOnInit() {}

  ingresar() {
    if (!this.validarUsuario(this.usuario)) {
      return;
    }

    this.mostrarMensaje('¡Bienvenido!');
    /*
      Se declara e instancia un objeto de la clase NavigationExtras, para poder pasarle
      parámetros a la página home. Al objeto json "state" se le asigna un objeto con
      nombre de clave "login" y el valor "this.login", de modo que
      le pase la cuenta de usuario y su password a la página home.
           Nótese que al enviar this.login, realmente se está enviando los valores que el usuario
      digitó en las cajas de input, pues gracias a la directiva [(ngModel)]="login.usuario",
      el programa sabe que hay una relación directa de unión entre el valor de la propiedad
      login.usuario y el valor del control gráfico que lleva este mismo nombre.
    */

    const navigationExtras = {
      state: {
        usuario: this.usuario
      }
    }; // Navegamos hacia el Home y enviamos la información extra

    this.router.navigate(['/home'], navigationExtras);
  }

  goToHome() {
    this.router.navigate(['/qrreader']);
  }

  validarUsuario(usuario) {
    const usu = this.usuario.buscarUsuarioValido(this.usuario.correo, this.usuario.password);

    if (usu) {
      this.usuario = usu;
      return true;
    } else {
      this.mostrarMensaje('Las credenciales no son correctas!');
      return false;
    }
  }

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

  goToRecuperarContra() {
    this.router.navigate(['/recuperar-contra']);
  }

};

LoginPage.ctorParameters = () => [{
  type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ToastController
}];

LoginPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
  selector: 'app-login',
  template: _login_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_login_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], LoginPage);


/***/ }),

/***/ 8433:
/*!********************************************************!*\
  !*** ./src/app/pages/login/login.page.scss?ngResource ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "ion-header {\n  --padding-top: 20px;\n  --padding-bottom: 20px;\n  --padding-end: 20px;\n  --padding-start: 20px;\n  background-color: rgb(0, 0, 0);\n}\n\nion-title {\n  font-size: 1em;\n}\n\nion-header {\n  background-color: azure;\n}\n\nion-label {\n  width: 130px;\n}\n\nion-input, ion-select {\n  color: gray;\n  text-align: right;\n}\n\nng-deep .mat-datepicker-toggle {\n  color: blue;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EsOEJBQUE7QUFDSjs7QUFFRTtFQUNFLGNBQUE7QUFDSjs7QUFFRTtFQUNFLHVCQUFBO0FBQ0o7O0FBRUU7RUFDRSxZQUFBO0FBQ0o7O0FBRUU7RUFDRSxXQUFBO0VBQ0EsaUJBQUE7QUFDSjs7QUFNRTtFQUNFLFdBQUE7QUFISiIsImZpbGUiOiJsb2dpbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taGVhZGVyIHtcbiAgICAtLXBhZGRpbmctdG9wOiAyMHB4O1xuICAgIC0tcGFkZGluZy1ib3R0b206IDIwcHg7XG4gICAgLS1wYWRkaW5nLWVuZDogMjBweDtcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDIwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsIDApO1xuICB9XG4gIFxuICBpb24tdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMS4wZW07XG4gIH1cbiAgXG4gIGlvbi1oZWFkZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGF6dXJlO1xuICB9XG4gIFxuICBpb24tbGFiZWwge1xuICAgIHdpZHRoOiAxMzBweDtcbiAgfVxuICBcbiAgaW9uLWlucHV0LCBpb24tc2VsZWN0IHtcbiAgICBjb2xvcjogZ3JheTtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgfVxuICBcbiAgXG4gIC8vIENHVjogRWwgc2lndWllbnRlIGVzdGlsbyBzZSBhZ3JlZ8OzIHBhcmEgcXVlIHNlIHB1ZWRhIG1vc3RyYXIgc2llbXByZSBlbCBib3TDs25cbiAgLy8gZGVsIE1hdERhdGVQaWNrZXIsIHB1ZXN0byBxdWUgYXBhcmVjw61hIGludmlzaWJsZSBwcm9kdWN0byBkZSBsb3MgY29sb3JlcyBcbiAgLy8gYXNvY2lhZG9zIGFsIFRoZW1lIGVzY29naWRvIGFsIGluc3RhbGFyIEFuZ3VsYXIgTWF0ZXJpYWxcbiAgbmctZGVlcCAubWF0LWRhdGVwaWNrZXItdG9nZ2xle1xuICAgIGNvbG9yOiBibHVlO1xuICB9Il19 */";

/***/ }),

/***/ 6752:
/*!********************************************************!*\
  !*** ./src/app/pages/login/login.page.html?ngResource ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar color=\"dark\">\n    <ion-title #titulo class=\"ion-text-left ion-text\">\n      <div>\n        Sistema de asistencia DUOC\n      </div>\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content >\n    <div class=\"ion-padding-vertical\">\n    <!--\n      Se establece un card que contendrá un título\n      y un contenido\n    -->\n    <ion-card class=\"ion-text-center ion-padding-vertical\">\n\n      <ion-card-title class=\"ion-text-center\">\n        <ion-label>\n          <h1>¡Bienvenido!</h1>\n        </ion-label>\n      </ion-card-title>\n\n      <ion-card-content>\n        <ion-item>\n          <ion-label position=\"floating\">Correo</ion-label>\n          <!-- Usamos ngModel para indicarle al input con que propiedad del controlador va a trabajar -->\n          <ion-input type=\"text\" [(ngModel)]=\"usuario.correo\"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label position=\"floating\" >Contraseña</ion-label>\n        \n          <ion-input type=\"password\" [(ngModel)]=\"usuario.password\"></ion-input>\n        </ion-item>\n        <ion-row>\n          <ion-col size=\"12\">          \n            <ion-button color = \"warning\" shape=\"block\" (click)=\"ingresar()\">Ingresar</ion-button>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col size=\"12\">          \n            <ion-button color = \"warning\" (click)=\"goToRecuperarContra()\">Recuperar contraseña</ion-button>\n          </ion-col>\n        </ion-row>\n\n      </ion-card-content>\n    </ion-card>\n  </div>  \n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_login_login_module_ts.js.map