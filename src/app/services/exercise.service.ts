import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Muscle } from '../models/muscle.model';

@Injectable({
  providedIn: 'root'
})
export class ExerciseService {

  private apiBaseUrl = 'api/v1/';

  constructor(private httpClient: HttpClient) { }

  getAllExercisesByMuscle(muscle: Muscle) {
    
  }

}
