import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RespuestacorrectaPageRoutingModule } from './respuestacorrecta-routing.module';

import { RespuestacorrectaPage } from './respuestacorrecta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RespuestacorrectaPageRoutingModule
  ],
  declarations: [RespuestacorrectaPage]
})
export class RespuestacorrectaPageModule {}
