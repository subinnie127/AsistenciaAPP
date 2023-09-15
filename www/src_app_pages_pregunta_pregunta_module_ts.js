"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_pregunta_pregunta_module_ts"],{

/***/ 3334:
/*!***********************************************************!*\
  !*** ./src/app/pages/pregunta/pregunta-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PreguntaPageRoutingModule": () => (/* binding */ PreguntaPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _pregunta_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pregunta.page */ 902);




const routes = [
    {
        path: '',
        component: _pregunta_page__WEBPACK_IMPORTED_MODULE_0__.PreguntaPage
    }
];
let PreguntaPageRoutingModule = class PreguntaPageRoutingModule {
};
PreguntaPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], PreguntaPageRoutingModule);



/***/ }),

/***/ 8278:
/*!***************************************************!*\
  !*** ./src/app/pages/pregunta/pregunta.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PreguntaPageModule": () => (/* binding */ PreguntaPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _pregunta_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pregunta-routing.module */ 3334);
/* harmony import */ var _pregunta_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pregunta.page */ 902);







let PreguntaPageModule = class PreguntaPageModule {
};
PreguntaPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _pregunta_routing_module__WEBPACK_IMPORTED_MODULE_0__.PreguntaPageRoutingModule
        ],
        declarations: [_pregunta_page__WEBPACK_IMPORTED_MODULE_1__.PreguntaPage]
    })
], PreguntaPageModule);



/***/ }),

/***/ 902:
/*!*************************************************!*\
  !*** ./src/app/pages/pregunta/pregunta.page.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PreguntaPage": () => (/* binding */ PreguntaPage)
/* harmony export */ });
/* harmony import */ var _home_estb_Escritorio_Asistencia_AsistenciaAPP_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _pregunta_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pregunta.page.html?ngResource */ 7084);
/* harmony import */ var _pregunta_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pregunta.page.scss?ngResource */ 6047);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _model_Persona__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../model/Persona */ 9139);








let PreguntaPage = class PreguntaPage {
  /*
    En el constructor del HomePage se ponen como parametros los siguientes objetos:
      (1) activeroute (del tipo de dato ActivatedRoute) y router (del tipo de dato Router),
      que se usarán para obtener los datos enviados por la página que invocó a "home".
      (2) alertController (del tipo de dato AlertController), que se usará para mostrar
      mensajes emergentes en la pantalla.
       Nótese que los parámetros tuvieron que declararse con "private", y esto es necesario
    para que los parámetros pasen a considerarse automáticamente como propiedades
    de la clase "HomePage" y de este modo puedan usarse dentro de los otros métodos.
   */
  constructor(activeroute, router, alertController) {
    this.activeroute = activeroute;
    this.router = router;
    this.alertController = alertController;
    this.persona = new _model_Persona__WEBPACK_IMPORTED_MODULE_3__.Persona();
    this.respuesta = ""; // Se llama a la ruta activa y se obtienen sus parámetros mediante una subscripcion

    this.activeroute.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        // Validar que tenga datos extras
        // Si tiene datos extra, se rescatan y se asignan a una propiedad
        this.usuario = this.router.getCurrentNavigation().extras.state.usuario;
      } else {
        /*
          Si no vienen datos extra desde la página anterior, quiere decir que el usuario
          intentó entrar directamente a la página home sin pasar por el login,
          de modo que el sistema debe enviarlo al login para que inicie sesión.
        */
        this.router.navigate(['/login']);
      }
    });
  }

  ngOnInit() {}

  mostrarDatosPersona() {
    // Si el usuario no ingresa al menos el nombre o el apellido, se mostrará un error
    if (this.usuario.respuestaSecreta.trim() === this.respuesta) {
      this.presentAlert('CORRECTO', 'TU CONTRASEÑA ES ' + this.usuario.password);
      return;
    } // Mostrar un mensaje emergente con los datos de la persona


    let mensaje = '¡LO SENTIMOS PERO LOS DATOS INGRESADOS NO SON CORRECTOS!';
    this.presentAlert('INCORRECTO', mensaje);
  } // Este método sirve para mostrar el mensaje emergente


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

};

PreguntaPage.ctorParameters = () => [{
  type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.AlertController
}];

PreguntaPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
  selector: 'app-pregunta',
  template: _pregunta_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_pregunta_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], PreguntaPage);


/***/ }),

/***/ 6047:
/*!**************************************************************!*\
  !*** ./src/app/pages/pregunta/pregunta.page.scss?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcmVndW50YS5wYWdlLnNjc3MifQ== */";

/***/ }),

/***/ 7084:
/*!**************************************************************!*\
  !*** ./src/app/pages/pregunta/pregunta.page.html?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar color=\"dark\">\n    <ion-title>Pregunta</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"ion-padding-vertical\">\n    <!--\n      Se establece un card que contendrá un título\n      y un contenido\n    -->\n    <ion-card class=\"ion-text-center ion-padding-vertical\">\n\n      <ion-card-title class=\"ion-text-center\">\n        <ion-label>\n          <h2>PREGUNTA SECRETA: <br> {{ usuario.preguntaSecreta }}</h2>\n        </ion-label>\n      </ion-card-title>\n\n      <ion-card-content>\n        <ion-item>\n          <ion-label position=\"floating\">Ingrese respuesta:</ion-label>\n          <!-- Usamos ngModel para indicarle al input con que propiedad del controlador va a trabajar -->\n          <ion-input type=\"text\" [(ngModel)]=\"respuesta\"></ion-input>\n        </ion-item>\n        \n        <ion-row>\n          <ion-col size=\"12\">\n            <!-- \n              Para usar un método de la clase controladora, hay que escribir el evento del control entre paréntesis y luego\n              indicar cual es el método a ejecutar; en este caso se trata de ingresar()\n            -->\n            <ion-button color=\"warning\" shape=\"block\" (click)=\"mostrarDatosPersona()\">\n              Aceptar\n            </ion-button>\n          </ion-col>\n        </ion-row>\n      </ion-card-content>\n      \n      <ion-label>\n        <br>\n        <a routerLink=\"\">volver al menu</a>\n      </ion-label>\n    </ion-card>\n  </div>\n  \n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_pregunta_pregunta_module_ts.js.map