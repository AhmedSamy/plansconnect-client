import {WorkoutStep} from "./workout-step";
import {StepType} from "./step-type";
import {STEP_GO, STEP_RECOVER} from "../workout/mock-workouts";
/**
 * Created by Ismail on 17/01/2017.
 */
export class WorkoutRepeat extends WorkoutStep {
  count: number;
  steps: WorkoutStep[] = [];

  constructor(index : number) {
    super(StepType.REPEAT, index);
    this.count = 2;
    this.steps.push(new WorkoutStep(STEP_GO, 1));
    this.steps.push(new WorkoutStep(STEP_RECOVER, 2));
  }
}
