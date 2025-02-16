import { TestBed } from '@angular/core/testing';

import { WorkoutRoutineService } from './workout-routine.service';

describe('WorkoutRoutineServiceService', () => {
  let service: WorkoutRoutineService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WorkoutRoutineService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
