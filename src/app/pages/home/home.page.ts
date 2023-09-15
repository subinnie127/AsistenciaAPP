import { Component, OnInit, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Usuario } from 'src/app/model/Usuario';
import { Persona } from '../../model/Persona';
import { AnimationController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage implements OnInit, AfterViewInit {

  @ViewChild('titulo', {read: ElementRef, static:true}) titulo: ElementRef;


  public usuario: Usuario;
  public persona: Persona = new Persona();

   constructor(
        private activeroute: ActivatedRoute
      , private router: Router
      , private alertController: AlertController
      , private animationController: AnimationController) {

    this.activeroute.queryParams.subscribe(params => {       
      if (this.router.getCurrentNavigation().extras.state) { 

        this.usuario = this.router.getCurrentNavigation().extras.state.usuario;

      } else {
        
        this.router.navigate(['/login']);
      }
  });
}

public ngAfterViewInit(): void {
  const animation = this.animationController
  .create()
  .addElement(this.titulo.nativeElement)
  .iterations(1)
  .duration(5000)
  .fromTo('transform','translate(100%)','translate( 0%)')
  .fromTo('opacity', 0.5, 1);
  animation.play();
}



public ngOnInit() {
}

goToLogout(){
this.router.navigate(['/'])
}

public limpiarFormulario(): void {
  for (const [key, value] of Object.entries(this.persona)) {
      Object.defineProperty(this.persona, key, {value: ''});
    }
  }


  public async presentAlert(titulo: string, mensaje: string) {
    const alert = await this.alertController.create({
      header: titulo,
      message: mensaje,
      buttons: ['OK']
    });

    await alert.present();
  }

  goToQR(){
    this.router.navigate(['/qrreader'])
  }



}
