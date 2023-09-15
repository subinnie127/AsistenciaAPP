import { Component, OnInit } from '@angular/core';
// Las clases Router y NavigationExtras son necesarias para que la página login le pase
// el nombre de usuario a la página home
import { Router, NavigationExtras } from '@angular/router';
// La clase ToastController sirve para mostrar mensajes emergente que duran un par de segundos
import { ToastController } from '@ionic/angular';
import { Usuario } from 'src/app/model/Usuario';

@Component({
  selector: 'app-recuperar-contra',
  templateUrl: './recuperar-contra.page.html',
  styleUrls: ['./recuperar-contra.page.scss'],
})
export class RecuperarContraPage implements OnInit {
  /*
    Se genera el modelo user con dos claves (key), las que se comportan como propiedades
    de la clase LoginPage.
    En Modelo MVC, la clase "LoginPage" viene siendo el "Controlador", encargado de administrar
    la parte gráfica de la página web de login, por lo que trabaja coordinado con el
    archivo login.page.html
    Cada propiedad tiene su valor inicial y tiene su pareja de control HTML que es el <ion-input>
    De este modo el TAG:
    <ion-input type="text" [(ngModel)]="login.Usuario"></ion-input>
    ya sabe que tiene que trabajar con el modelo de Angular a través de la
    propiedad "login.Usuario".
    Fijarse que si se le colocan valores iniciales a login.usuario y login.password,
    estos aparecerán inmediatamente reflejados en la página login cuando esta
    se abra por primera vez.
  */

  public usuario: Usuario;
  /*
    Para poder trabajar con Router y poder navegar hacia la página "home", debemos primero
    pasar como parámetro e instanciar un objeto de la clase "Router". Fijarse que el tipo
    de dato, que se pasa en el constructor es "Router" con mayúscula, porque se trata de
    una clase y éstas parten con letra mayúscula, mientras que "router" con minúscula es
    el objeto de esa clase, que usaremos para ejecutar el método "navigate".
  */
  constructor(private router: Router, private toastController: ToastController) {
    this.usuario = new Usuario('', '', '', '', '');
    this.usuario.correo = '';
    this.usuario.password = "";
  }

  public ngOnInit(): void {

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

  public ingresarRecu(): void {

    if(!this.validarUsuarioRecu(this.usuario)) {
      return;
    }

    this.mostrarMensaje(this.usuario.nombre) ;

   
    const navigationExtras: NavigationExtras = {
      state: {
        usuario: this.usuario
      }
    };
    // Navegamos hacia el Home y enviamos la información extra
    this.router.navigate(['/pregunta'], navigationExtras);
  }

  /*
    Usaremos validateModel para verificar que se cumplan las
    validaciones de los campos del formulario
  */
  public validarUsuarioRecu(usuario: Usuario): boolean {

    const usu = this.usuario.buscarUsuarioValidoRecu(
      this.usuario.correo);

    if (usu) {
      this.usuario = usu;
      return true;
    }
    else {
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
  async mostrarMensaje(mensaje: string, duracion?: number) {
    const toast = await this.toastController.create({
        message: mensaje,
        duration: duracion? duracion: 2000
      });
    toast.present();
  }
  goToLogin(){
    this.router.navigate(['/login'])
  }

}