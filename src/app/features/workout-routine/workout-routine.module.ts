import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanelCardModule } from '../shared/panel-card/panel-card.module';
import { WorkoutRoutineComponent } from './workout-routine.component';
import { SelectModule } from 'primeng/select';
import { FormsModule } from '@angular/forms';
import { DataViewModule } from 'primeng/dataview';
import {SelectButtonModule} from 'primeng/selectbutton';
import {MatCheckboxModule} from '@angular/material/checkbox';

@NgModule({
  declarations: [WorkoutRoutineComponent],
  imports: [
    CommonModule,
    PanelCardModule,
    SelectModule,
    FormsModule,
    DataViewModule,
    SelectButtonModule,
    MatCheckboxModule
  ]
})
export class WorkoutRoutineModule { }
