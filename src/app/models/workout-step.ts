import {Target} from "./target";
import {Sport} from "./sport";
import {StepType} from "./step-type";
import {TARGET_DISTANCE, TARGET_SPEED} from "../workout/mock-workouts";

/**
 * Created by Ismail on 17/01/2017.
 */
export class WorkoutStep {
  id: number;
  name?: string;
  type : StepType;
  description?: string;
  duration : Target;
  intensity? : Target;
  sport?: Sport;

  constructor(type : StepType, id: number, name? : string) {
    this.id = id;
    this.name = name;
    this.type = type;
  }

  isRepeat?() : boolean {
    return this.type.id === 8;
  }
}
