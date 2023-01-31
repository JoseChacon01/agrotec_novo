import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AnimaisPageRoutingModule } from './animais-routing.module';

import { AnimaisPage } from './animais.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AnimaisPageRoutingModule
  ],
  declarations: [AnimaisPage]
})
export class AnimaisPageModule {}
