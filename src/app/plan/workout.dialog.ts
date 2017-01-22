import {Component, OnInit} from "@angular/core";
import {Sport} from "../models/sport";
import {WorkoutType} from "../models/workout-type";
import {TargetType} from "../models/target-type";
import {MdDialogRef} from "@angular/material";
import {Workout} from "../models/workout";
import {StepType} from "../models/step-type";
import {WorkoutStep} from "../models/workout-step";
import {STEP_GO, TARGET_DISTANCE, TARGET_PACE, RUNNING} from "../workout/mock-workouts";
import {WorkoutRepeat} from "../models/workout-repeat";
import {Target} from "../models/target";
import {worker} from "cluster";
/**
 * Created by Ismail on 19/01/2017.
 */

@Component({
  moduleId: module.id,
  selector: 'workout-form',
  templateUrl: 'workout.dialog.html',
  styleUrls: [ 'workout.dialog.scss' ]
})
export class WorkoutDialog implements OnInit {
  // ngOnChanges(changes: SimpleChanges): void {
  //
  // }
  sports: Sport[];
  workoutTypes: WorkoutType[];
  targetTypes: TargetType[];
  stepTypes : StepType[];

  workout : Workout = new Workout();

  durationTargetTypes: TargetType[];
  intensityTargetTypes: TargetType[];
  // myFormControl : FormControl;
  // workoutForm : NgForm;
  // form: FormGroup;
  constructor(public dialogRef: MdDialogRef<WorkoutDialog>) {
    // this.workout.steps.push(STEP_WARM_UP_15_MIN_3KM, STEP_EASY_5K, STEP_COOL_DOWN_15_MIN);
  }

  // get workout() {
  //   return this._workout;
  // }
  //
  // set workout(val) {
  //   this._workout = val;
  //   // this.propagateChange(val);
  // }

  // submitted = false;
  //
  // onSubmit() { this.submitted = true; }

  // TODO: Remove this when we're done
  // get diagnostic() { return JSON.stringify(this.workout); }

  ngOnInit(): void {
    this.workout.sports.push(RUNNING);
    // this.myFormControl = new FormControl();
    // console.log(this.myFormControl);
    // this.myFormControl.valueChanges.subscribe(val => console.log(val));
    // this.form.addControl()
  }

  // onDurationChange(stepIndex: number) {
  //   console.log('on durationChange');
  //   // console.log(stepIndex);
  //   // console.log(this.workout.steps[stepIndex].duration);
  //   // step.duration = target;
  // }

  addStep() : void {
    this.workout.steps.push(new WorkoutStep(STEP_GO, this.workout.steps.length+1));
  }

  decrementCount(step: WorkoutRepeat) : void {
    step.count--;
  }

  incrementCount(step: WorkoutRepeat) : void {
    step.count++;
  }

  addRepeat() : void {
    this.workout.steps.push(new WorkoutRepeat(this.workout.steps.length+1));
  }

  addRepeatStep(repeat : WorkoutRepeat) : void {
    repeat.steps.push(new WorkoutStep(STEP_GO, repeat.steps.length+1));
  }

  // addDuration(stepIndex: number) : void {
  //   this.workout.steps[stepIndex].duration = new Target(TARGET_DISTANCE);
  // }

  addDuration(step : WorkoutRepeat) : void {
    step.duration = new Target(TARGET_DISTANCE);
  }

  addIntensity(step : WorkoutRepeat) : void {
    step.intensity = new Target(TARGET_PACE);
  }

  removeRepeatStep(stepIndex : number, repeatStepIndex : number) : void {
    let repeat = this.workout.steps[stepIndex] as WorkoutRepeat;
    repeat.steps.splice(repeatStepIndex, 1);
  }

  removeStep(index : number) : void {
    this.workout.steps.splice(index, 1);
  }
}
