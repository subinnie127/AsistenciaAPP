import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PreguntaIncorrecPageRoutingModule } from './pregunta-incorrec-routing.module';

import { PreguntaIncorrecPage } from './pregunta-incorrec.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PreguntaIncorrecPageRoutingModule
  ],
  declarations: [PreguntaIncorrecPage]
})
export class PreguntaIncorrecPageModule {}
