import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PreguntaIncorrecPage } from './pregunta-incorrec.page';

const routes: Routes = [
  {
    path: '',
    component: PreguntaIncorrecPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PreguntaIncorrecPageRoutingModule {}


