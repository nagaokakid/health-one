import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanelCardComponent } from './panel-card.component';
import { CardModule } from 'primeng/card';
import {ButtonModule} from 'primeng/button'

@NgModule({
  declarations: [PanelCardComponent],
  imports: [
    CommonModule,
    CardModule,
    ButtonModule
  ],
  exports: [PanelCardComponent]
})
export class PanelCardModule { }