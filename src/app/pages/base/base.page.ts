import { Component, OnInit, AfterViewInit, ElementRef, ViewChild} from '@angular/core';
import { Router } from '@angular/router';
import { AnimationController } from '@ionic/angular';



@Component({
  selector: 'app-base',
  templateUrl: './base.page.html',
  styleUrls: ['./base.page.scss'],
})
export class BasePage implements OnInit, AfterViewInit {

  @ViewChild('titulo', {read: ElementRef, static:true}) titulo: ElementRef;

  constructor(
    private router: Router,
    private animationController: AnimationController,
    ) {  }

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
 
  ngOnInit() {
  }

  goToLogin(){
    this.router.navigate(['/login'])
  }
  goToRecuperarContra(){
    this.router.navigate(['/recuperar-contra'])
  }
  

}
