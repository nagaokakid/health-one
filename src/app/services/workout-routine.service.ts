import { Injectable } from '@angular/core';
import { CardItem } from '../features/shared/panel-card/panel-card.component';



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

  public getWorkoutsByMuscleGroupId(id: number) : CardItem[]
  {
    return this.workouts.filter(w => w.id === id);
  }

  workouts: CardItem[] = [
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
    },
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
    },
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
    },
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
    },
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
    },
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
