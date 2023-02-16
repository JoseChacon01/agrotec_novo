import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PesquisarAnimaisPageRoutingModule } from './pesquisar-animais-routing.module';

import { PesquisarAnimaisPage } from './pesquisar-animais.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PesquisarAnimaisPageRoutingModule
  ],
  declarations: [PesquisarAnimaisPage]
})
export class PesquisarAnimaisPageModule {}
