import { Component, computed, signal } from '@angular/core';
import { WorkoutRoutineService } from '../../services/workout-routine.service';
import { CardItem } from '../shared/panel-card/panel-card.component';
import { Observable } from 'rxjs';
import { ExerciseService } from '../../services/exercise.service';
import { ExerciseSetRequest } from '../../models/requests/exercise-set-request.model';

interface MuscleGroup 
{
  id: number,
  name: string,
  bodySection: string
}

interface Category {
  parentId?: number,
  name: string,
  selected: boolean,
  subCategories?: Category[]
}

@Component({
  selector: 'app-workout-routine',
  standalone: false,
  templateUrl: './workout-routine.component.html',
  styleUrl: './workout-routine.component.scss'
})
export class WorkoutRoutineComponent {
  readonly bodyParts = signal<Category[]>([
    {
    parentId: 1,
    name: 'Upper Body',
    selected: false,
    subCategories: [
      {name: 'Chest', selected: false},
      {name: 'Shoulders', selected: false},
      {name: 'Biceps', selected: false},
      {name: 'Triceps', selected: false},
      {name: 'Forearms', selected: false},
      {name: 'Delts', selected: false},
      {name: 'Lats', selected: false}
      ]
    },
    {
      parentId: 2,
      name: 'Lower Body',
      selected: false,
      subCategories: [
        {name: 'Abs', selected: false},
        {name: 'Hamstrings', selected: false},
        {name: 'Glutes', selected: false},
        {name: 'Quads', selected: false},
        {name: 'Calves', selected: false},
        {name: 'Knees', selected: false},
        {name: 'Back', selected: false}
      ]
    }

])
  muscleGroupOptions! : MuscleGroup[];
  selectedMuscleGroup! : MuscleGroup;
  workouts: Observable<MuscleGroup>;

  constructor(
    private workoutRoutineSvc: WorkoutRoutineService,
    private exerciseSvc: ExerciseService
  ) 
  {
    this.muscleGroupOptions = workoutRoutineSvc.getMuscleGroups();
  }

  getMuscleGroupCardItems(id): CardItem[]
  {
    return this.workoutRoutineSvc.getWorkoutsByMuscleGroupId(id);
  }

  partiallySelected(bodyPart: Category): boolean {
    if (!bodyPart.subCategories) {
      return false;
    }

    return bodyPart.subCategories.some((elem) => elem.selected) && !bodyPart.subCategories.every((elem) => elem.selected);
  }

  updateSelection(selected: boolean, index: number, searchInParentId?: number) {
    const request: ExerciseSetRequest = {
    }
    this.exerciseSvc.getExerciseSet(request).subscribe((data) => console.log(data))

    if (searchInParentId) {
      const parentElem = this.bodyParts().find((parentElem) => parentElem.parentId === searchInParentId);
      const childElem = parentElem.subCategories[index];
      childElem.selected = selected;
      parentElem.selected = parentElem.subCategories.every((child) => child.selected);
      return;
    }

    const parentElem = this.bodyParts()[index];
    parentElem.selected = selected;
    parentElem.subCategories.forEach((childElem) => childElem.selected = selected);
  }
}
