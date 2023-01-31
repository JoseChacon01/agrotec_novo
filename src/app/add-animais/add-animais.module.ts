import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddAnimaisPageRoutingModule } from './add-animais-routing.module';

import { AddAnimaisPage } from './add-animais.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddAnimaisPageRoutingModule
  ],
  declarations: [AddAnimaisPage]
})
export class AddAnimaisPageModule {}
