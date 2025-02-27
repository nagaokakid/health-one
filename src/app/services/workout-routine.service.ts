import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class WorkoutRoutineService {

  constructor() { }

  public getMuscleGroups()
  {
    return [
      {id: 1, name: 'Triceps', bodySection: 'upper'},
      {id: 2, name: 'Biceps', bodySection: 'upper'},
      {id: 3, name: 'Chest', bodySection: 'upper'}
    ]
  }

  public getWorkoutsByMuscleGroupId(id: number)
  {
    return !this.workouts.find(w => w.id === id);
  }

  workouts = [
    {
      id: 1, 
      title: "tricep pull-down", 
      subtitle: "subtitle",
      content: "pull down using a cable machine",
      buttons: [
        {
          label: 'Add',
          severity: 'success',
          action: () => console.log('clicked!')
        }
      ]
    }
  ]
}
