import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PesquisarAnimaisPage } from './pesquisar-animais.page';

const routes: Routes = [
  {
    path: '',
    component: PesquisarAnimaisPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PesquisarAnimaisPageRoutingModule {}
