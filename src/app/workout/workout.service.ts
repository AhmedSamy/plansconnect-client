/**
 * Created by Ismail on 17/01/2017.
 */

import {Injectable} from "@angular/core";
import {Workout} from "../models/workout";
import {
  WORKOUTS, WORKOUT_TYPES, TARGET_TYPES, SPORTS, STEP_TYPES, INTENSITY_TARGETS,
  DURATION_TARGETS
} from "./mock-workouts";
import {WorkoutType} from "../models/workout-type";
import {TargetType} from "../models/target-type";
import {Sport} from "../models/sport";
import {StepType} from "../models/step-type";
@Injectable()
export class WorkoutService {

  getSports() : Promise<Sport[]> {
    return Promise.resolve(SPORTS);
  }

  getWorkouts() : Promise<Workout[]> {
    return Promise.resolve(WORKOUTS);
  }

  getWorkoutTypes() : Promise<WorkoutType[]> {
    return Promise.resolve(WORKOUT_TYPES);
  }

  getStepTypes() : Promise<StepType[]> {
    return Promise.resolve(STEP_TYPES);
  }

  getTargetTypes() : Promise<TargetType[]> {
    return Promise.resolve(TARGET_TYPES);
  }

  getDurationTargetTypes() : Promise<TargetType[]> {
    return Promise.resolve(DURATION_TARGETS);
  }

  getIntensityTargetTypes() : Promise<TargetType[]> {
    return Promise.resolve(INTENSITY_TARGETS);
  }

  getUserWorkouts(id: number) : Promise<Workout[]> {
    return this.getWorkouts().then(workouts => workouts.filter(workout => workout.creator.id === id));
  }
}
