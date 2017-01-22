import {WorkoutType} from "./workout-type";
import {WorkoutStep} from "./workout-step";
import {Sport} from "./sport";
import {User} from "./user";
import {STEP_WARM_UP, STEP_COOL_DOWN, STEP_GO} from "../workout/mock-workouts";

/**
 * Created by Ismail on 17/01/2017.
 */
export class Workout {
  id?: number;
  name: string = "";
  description?: string;
  type: WorkoutType;
  steps: WorkoutStep[] = [];
  sports: Sport[] = [];
  order?: number;
  day?: number;
  time?: Date;
  creator?: User;
  icon?: string;

  constructor() {
    this.steps.push(new WorkoutStep(STEP_WARM_UP, 1));
    this.steps.push(new WorkoutStep(STEP_GO, 2));
    this.steps.push(new WorkoutStep(STEP_COOL_DOWN, 3));
  }
}
