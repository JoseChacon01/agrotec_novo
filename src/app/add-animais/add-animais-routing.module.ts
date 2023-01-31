import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddAnimaisPage } from './add-animais.page';

const routes: Routes = [
  {
    path: '',
    component: AddAnimaisPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddAnimaisPageRoutingModule {}
