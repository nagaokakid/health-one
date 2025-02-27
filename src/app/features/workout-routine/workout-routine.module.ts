import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanelCardModule } from '../../core/panel-card/panel-card.module';
import { WorkoutRoutineComponent } from './workout-routine.component';
import { SelectModule } from 'primeng/select';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [WorkoutRoutineComponent],
  imports: [
    CommonModule,
    PanelCardModule,
    SelectModule,
    FormsModule
  ]
})
export class WorkoutRoutineModule { }
