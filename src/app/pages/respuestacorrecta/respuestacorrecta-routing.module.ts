import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RespuestacorrectaPage } from './respuestacorrecta.page';

const routes: Routes = [
  {
    path: '',
    component: RespuestacorrectaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RespuestacorrectaPageRoutingModule {}
