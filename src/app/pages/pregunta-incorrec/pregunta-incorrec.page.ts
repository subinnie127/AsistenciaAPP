import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/model/Usuario';
import { ActivatedRoute, NavigationExtras, Router  } from '@angular/router';


@Component({
  selector: 'app-pregunta-incorrec',
  templateUrl: './pregunta-incorrec.page.html',
  styleUrls: ['./pregunta-incorrec.page.scss'],
})
export class PreguntaIncorrecPage implements OnInit {

  public usuario: Usuario;

  constructor(
    private activeroute: ActivatedRoute
  , private router: Router
  ) { }

  ngOnInit() {
  }

  public volverAlInicio(): void{
    this.router.navigate(['/login'])
  }
}
