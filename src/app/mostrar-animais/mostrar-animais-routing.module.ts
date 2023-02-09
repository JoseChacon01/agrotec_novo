import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MostrarAnimaisPage } from './mostrar-animais.page';

const routes: Routes = [
  {
    path: '',
    component: MostrarAnimaisPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MostrarAnimaisPageRoutingModule {}
