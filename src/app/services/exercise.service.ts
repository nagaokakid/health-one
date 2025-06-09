import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ExerciseDto } from '../models/dto/exercise-dto.model';
import { ExerciseSetRequest } from '../models/requests/exercise-set-request.model';

@Injectable({
  providedIn: 'root'
})
export class ExerciseService {

  private url = 'api/v1/exercises';

  constructor(private httpClient: HttpClient) { }

  getExerciseSet(request: ExerciseSetRequest ): Observable<any> {
    return this.httpClient.get(this.url);
  }

}
