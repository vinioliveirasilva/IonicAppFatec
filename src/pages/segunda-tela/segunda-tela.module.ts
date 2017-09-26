import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SegundaTelaPage } from './segunda-tela';

@NgModule({
  declarations: [
    SegundaTelaPage,
  ],
  imports: [
    IonicPageModule.forChild(SegundaTelaPage),
  ],
})
export class SegundaTelaPageModule {}
