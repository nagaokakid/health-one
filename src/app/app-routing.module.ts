import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WorkoutRoutineComponent } from './features/workout-routine/workout-routine.component';

const routes: Routes = [
  {path: "workout", component: WorkoutRoutineComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
