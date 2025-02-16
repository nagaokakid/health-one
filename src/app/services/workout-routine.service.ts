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
}
