import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router  } from '@angular/router';
import { Usuario } from 'src/app/model/Usuario';

@Component({
  selector: 'app-respuestacorrecta',
  templateUrl: './respuestacorrecta.page.html',
  styleUrls: ['./respuestacorrecta.page.scss'],
})
export class RespuestacorrectaPage implements OnInit {
  public usuario: Usuario;
  public contraseña: string= "" ;

  constructor(
  private activeroute: ActivatedRoute,
  private router: Router
  ) { 
    this.activeroute.queryParams.subscribe(params => {       // Utilizamos expresión lambda
      if (this.router.getCurrentNavigation().extras.state) { // Validar que tenga datos extras

        // Si tiene datos extra, se rescatan y se asignan a una propiedad
        this.usuario = this.router.getCurrentNavigation().extras.state.usuario;

      } else {
        /*
          Si no vienen datos extra desde la página anterior, quiere decir que el usuario
          intentó entrar directamente a la página home sin pasar por el login,
          de modo que el sistema debe enviarlo al login para que inicie sesión.
        */
        this.router.navigate(['/base']);
      }
  });
    this.usuario = new Usuario('', '', '', '', '');

  }

  ngOnInit() {
  }

  public volverAlInicio(): void{
    this.router.navigate(['/login']);
  }

}
