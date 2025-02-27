import { Component } from '@angular/core';
import { WorkoutRoutineService } from '../../services/workout-routine.service';
import { CardItem } from '../../core/panel-card/panel-card.component';
import { Observable } from 'rxjs';

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
  workouts: Observable<MuscleGroup>;

  constructor(private workoutRoutineSvc: WorkoutRoutineService) 
  {
    this.muscleGroupOptions = workoutRoutineSvc.getMuscleGroups();
  }

  getMuscleGroupCardItems()
  {
    return this.workoutRoutineSvc.getWorkoutsByMuscleGroupId(this.selectedMuscleGroup.id);
  }
}
