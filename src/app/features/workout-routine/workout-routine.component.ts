import { Component } from '@angular/core';
import { WorkoutRoutineService } from '../../services/workout-routine.service';

interface MuscleGroup 
{
  id: number,
  name: string,
  bodySection: string
}

@Component({
  selector: 'app-workout-routine',
  standalone: false,
  templateUrl: './workout-routine.component.html',
  styleUrl: './workout-routine.component.scss'
})
export class WorkoutRoutineComponent {
  muscleGroupOptions! : MuscleGroup[];
  selectedMuscleGroup! : MuscleGroup;

  constructor(private workoutRoutineSvc: WorkoutRoutineService) 
  {
    this.muscleGroupOptions = workoutRoutineSvc.getMuscleGroups();
  }
}
