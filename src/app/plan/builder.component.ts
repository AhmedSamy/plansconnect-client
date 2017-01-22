import {Component, OnInit} from '@angular/core';
import {WorkoutService} from "../workout/workout.service";
import {Workout} from "../models/workout";
import {UserManager} from "../user/user.manager";
import {MdIconRegistry, MdDialogRef, MdDialog} from "@angular/material";
import {DomSanitizer} from "@angular/platform-browser";
import {WorkoutType} from "../models/workout-type";
import {TargetType} from "../models/target-type";
import {Sport} from "../models/sport";
import {WorkoutDialog} from "./workout.dialog";
import {StepType} from "../models/step-type";
import {USER_1} from "../workout/mock-workouts";

const TITLES = {
  "remove" : "Remove Week",
  "clear" : "Clear Week"
};

const MESSAGES = {
  "remove" : "Are you sure you want to completely remove this week?",
  "clear" : "Are you sure you want to remove all the planned Workouts from this week?"
};

const POSITIVES = {
  "remove" : "Remove",
  "clear" : "Clear"
};

@Component({
  moduleId: module.id,
  selector: 'plan-builder',
  templateUrl: 'builder.component.html',
  styleUrls: [ 'builder.component.scss' ]
})
export class PlanBuilderComponent implements OnInit {

  weeks : Week[];
  userWorkouts : Workout[];
  confirmDialogRef: MdDialogRef<ConfirmDialog>;
  workoutDialogRef : MdDialogRef<WorkoutDialog>;
  workoutTypes : WorkoutType[];
  targetTypes : TargetType[];
  durationTargetTypes : TargetType[];
  intensityTargetTypes : TargetType[];
  sports : Sport[];
  stepTypes: StepType[];

  constructor(private workoutService: WorkoutService,
              private userManager: UserManager,
              private mdIconRegistry : MdIconRegistry,
              private sanitizer: DomSanitizer,
              private dialog: MdDialog) {
    //TODO merge them
    this.workoutService.getSports().then(sports => {
      this.sports = sports;
      this.sports.forEach(sport => mdIconRegistry.addSvgIconInNamespace('sports', sport.icon,
          sanitizer.bypassSecurityTrustResourceUrl('/assets/' + sport.icon + '.svg')));
    });

    this.workoutService.getTargetTypes().then(types => this.targetTypes = types);
    this.workoutService.getDurationTargetTypes().then(types => this.durationTargetTypes = types);
    this.workoutService.getIntensityTargetTypes().then(types => this.intensityTargetTypes = types);
    this.workoutService.getWorkoutTypes().then(types => this.workoutTypes = types);
    this.workoutService.getStepTypes().then(types => this.stepTypes = types);

    this.weeks = [new Week(0), new Week(1)];
  }

  ngOnInit(): void {
    this.workoutService.getUserWorkouts(this.userManager.getUser().id).then(workouts => {
      this.userWorkouts = workouts;
    });
  }

  addWeek() : void {
    this.weeks.push(new Week(this.weeks.length));
  }

  removeWeek(index: number) : void {
    this.weeks.splice(index, 1);
    this.weeks.forEach((week, index) => week.index = index);
  }

  clearWeek(index: number) : void {
    console.log(index);
    this.weeks[index].days.forEach(day => day.workouts = []);
  }

  openWorkout(workout : Workout, weekIndex: number, dayIndex: number, workoutIndex : number) {
    this.workoutDialogRef = this.dialog.open(WorkoutDialog, { disableClose: false, width: "80%", height : "80%"});
    this.workoutDialogRef.componentInstance.targetTypes = this.targetTypes;
    this.workoutDialogRef.componentInstance.durationTargetTypes = this.durationTargetTypes;
    this.workoutDialogRef.componentInstance.intensityTargetTypes = this.intensityTargetTypes;
    this.workoutDialogRef.componentInstance.workoutTypes = this.workoutTypes;
    this.workoutDialogRef.componentInstance.sports = this.sports;
    this.workoutDialogRef.componentInstance.stepTypes = this.stepTypes;
    if (workout) {
      this.workoutDialogRef.componentInstance.workout = workout;
    }
    this.workoutDialogRef.afterClosed().subscribe(result => {
      console.log(result);
      if (result && result instanceof Workout) {
        let workoutR = result as Workout;
        console.log("workoutIndex", workoutIndex);
        if (workoutIndex !== null) {
          console.log("here");
          this.weeks[weekIndex].days[dayIndex].workouts[workoutIndex] = workoutR;
        } else {
          workoutR.id = 12321;
          workoutR.icon = workoutR.sports[0].icon;
          workoutR.creator = this.userManager.getUser();
          this.weeks[weekIndex].days[dayIndex].workouts.push(workoutR);
        }
      }
      this.workoutDialogRef = null;
    });
  }

  addWorkout(weekIndex: number, dayIndex: number) {
    this.openWorkout(null, weekIndex, dayIndex, null);
    // this.workoutDialogRef = this.dialog.open(WorkoutDialog, { disableClose: false, width: "80%", height : "80%"});
    // this.workoutDialogRef.componentInstance.targetTypes = this.targetTypes;
    // this.workoutDialogRef.componentInstance.durationTargetTypes = this.durationTargetTypes;
    // this.workoutDialogRef.componentInstance.intensityTargetTypes = this.intensityTargetTypes;
    // this.workoutDialogRef.componentInstance.workoutTypes = this.workoutTypes;
    // this.workoutDialogRef.componentInstance.sports = this.sports;
    // this.workoutDialogRef.componentInstance.stepTypes = this.stepTypes;
    // this.workoutDialogRef.afterClosed().subscribe(result => {
    //   console.log(result);
    //   if (result && result instanceof Workout) {
    //     let workout = result as Workout;
    //     workout.icon = workout.sports[0].icon;
    //     workout.creator = this.userManager.getUser();
    //     workout.id = 12321;
    //     this.weeks[weekIndex].days[dayIndex].workouts.push(workout);
    //   }
    //   this.workoutDialogRef = null;
    // });
  }

  confirm(key: string, index: number) : void {
    this.confirmDialogRef = this.dialog.open(ConfirmDialog, { disableClose: false });
    this.confirmDialogRef.componentInstance.title = TITLES[key];
    this.confirmDialogRef.componentInstance.message = MESSAGES[key];
    this.confirmDialogRef.componentInstance.positive = POSITIVES[key];
    this.confirmDialogRef.afterClosed().subscribe(result => {
      if (result) {
      console.log(result);
      console.log(index);
        switch (key) {
          case "remove":
            this.removeWeek(index);
            break;
          case "clear":
            this.clearWeek(index);
            break;
        }
      }
      this.confirmDialogRef = null;
    });
  }
}

@Component({
  selector: 'confirm-dialog',
  templateUrl: 'confirm.dialog.html'
})
export class ConfirmDialog {
  public title : string;
  public message : string;
  public positive : string;
  constructor(public dialogRef: MdDialogRef<ConfirmDialog>) { }
}

export const DAYS = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

export class Week {
  index : number;
  days : Day[];

  constructor(index : number) {
    this.index = index;
    this.days = [];
    DAYS.forEach((day,index) => this.days.push(new Day(day, index)));
  }
}

export class Day {
  name: string;
  index: number;
  workouts : Workout[];

  constructor(name : string, index: number) {
    this.name = name;
    this.index = index;
    this.workouts = [];
  }
}


