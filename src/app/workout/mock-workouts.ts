/**
 * Created by Ismail on 17/01/2017.
 */

import {Workout} from "../models/workout";
import {WorkoutType} from "../models/workout-type";
import {WorkoutStep} from "../models/workout-step";
import {TargetType} from "../models/target-type";
import {Sport} from "../models/sport";
import {StepType} from "../models/step-type";

export const RUNNING : Sport = {
  id: 1,
  name: "Running",
  icon: "running"
};
export const CYCLING : Sport = {
  id: 2,
  name: "Cycling",
  icon: "cycling"
};


export const SPORTS : Sport[] = [
  RUNNING, CYCLING
];

export const RECOVERY : WorkoutType = {
  id : 1,
  name: "recovery",
  sports: [RUNNING, CYCLING]
};

export const UNIT_MINUTE = {
  id: 1,
  name: "Minute",
  iso: "min"
};

export const UNIT_MIN_KM = {
  id: 2,
  name: "Minute per km",
  iso: "min/km"
};

export const UNIT_KM = {
  id: 3,
  name: "Kilometre",
  iso: "km"
};

export const UNIT_LAPS = {
  id: 4,
  name: "Laps",
  iso: "laps"
};

export const UNIT_BPM = {
  id: 5,
  name: "Beat per minute",
  iso: "bpm"
};

export const UNIT_KMH = {
  id: 6,
  name: "Kilometer per hour",
  iso: "km/h"
};

export const TARGET_TIME : TargetType = {
  id: 1,
  name: "Time",
  unit: UNIT_MINUTE
};

export const TARGET_DISTANCE : TargetType = {
  id: 2,
  name: "Distance",
  unit: UNIT_KM
};

export const TARGET_LAP : TargetType = {
  id: 3,
  name : "Laps",
  unit: UNIT_LAPS
};

export const TARGET_HEART_RATE : TargetType = {
  id: 3,
  name: "Heart Rate",
  unit: UNIT_BPM
};

export const TARGET_PACE : TargetType = {
  id: 4,
  name: "Pace",
  unit: UNIT_MIN_KM
};

export const TARGET_SPEED : TargetType = {
  id: 5,
  name: "Speed",
  unit: UNIT_KMH
};

export const DURATION_TARGETS : TargetType[] = [
  TARGET_TIME, TARGET_DISTANCE, TARGET_LAP
];

export const INTENSITY_TARGETS : TargetType[] = [
  TARGET_PACE,
  TARGET_SPEED,
  TARGET_HEART_RATE
];

export const TARGET_TYPES : TargetType[] = [
  TARGET_DISTANCE, TARGET_TIME, TARGET_HEART_RATE, TARGET_PACE, TARGET_SPEED
];

export const USER_1 = {
  id: 1,
  name: "User 1"
};

export const TEMPO: WorkoutType = {
  id: 2,
  name: "Tempo",
  sports: [RUNNING, CYCLING]
};

export const INTERVAL: WorkoutType = {
  id: 3,
  name: "Interval",
  sports: [RUNNING, CYCLING]
};

export const FARTLEK: WorkoutType = {
  id: 4,
  name: "Fartlek",
  sports: [RUNNING]
};

export const LONG_RUN: WorkoutType = {
  id: 5,
  name: "Long Run",
  sports: [RUNNING]
};

export const LONG_RIDE: WorkoutType = {
  id: 6,
  name: "Long Ride",
  sports: [CYCLING]
};

export const HILL_REPEATS: WorkoutType = {
  id: 7,
  name: "Hill Repeats",
  sports: [RUNNING]
};

export const STEP_WARM_UP : StepType = {
  id : 1,
  name : "Warm up",
  color : "red"
};

export const STEP_GO : StepType = {
  id: 2,
  name: "Go",
  color: "blue"
};

export const STEP_RECOVER : StepType = {
  id: 3,
  name: "Recover",
  color: "teal"
};

export const STEP_REST : StepType = {
  id: 4,
  name: "Rest",
  color: "deep-orange"
};

export const STEP_COOL_DOWN : StepType = {
  id: 5,
  name: "Cool down",
  color: "green"
};


export const STEP_TYPES : StepType[] = [STEP_WARM_UP, STEP_GO, STEP_RECOVER, STEP_REST, STEP_COOL_DOWN];

export const WORKOUT_TYPES : WorkoutType[] = [TEMPO, INTERVAL, FARTLEK, LONG_RUN, LONG_RIDE, HILL_REPEATS];

export const STEP_WARM_UP_15_MIN_3KM: WorkoutStep = {
  id: 1,
  name: "Warm up",
  type: STEP_WARM_UP,
  duration: {
    // id: 1,
    type: TARGET_TIME,
    min: "15",
  },
  intensity: {
    // id: 2,
    type: TARGET_PACE,
    min: "6:00",
    max: "6:45",
  }
};

export const STEP_EASY_10K : WorkoutStep = {
  id: 3,
  name: "Easy 10K",
  type: STEP_GO,
  duration: {
    // id: 1,
    type: TARGET_DISTANCE,
    min: "10",
  },
  intensity: {
    // id: 2,
    type: TARGET_PACE,
    min: "5:00",
    max: "5:45",
  }
};

export const STEP_EASY_30K : WorkoutStep = {
  id: 4,
  name: "Easy 30K",
  type: STEP_GO,
  duration: {
    // id: 1,
    type: TARGET_DISTANCE,
    min: "30",
  },
  intensity: {
    // id: 2,
    type: TARGET_PACE,
    min: "5:00",
    max: "5:45",
  }
};

export const STEP_EASY_5K : WorkoutStep = {
  id: 5,
  name: "Easy 5K",
  type: STEP_GO,
  duration: {
    // id: 1,
    type: TARGET_DISTANCE,
    min: "5",
  },
  intensity: {
    // id: 2,
    type: TARGET_PACE,
    min: "5:00",
    max: "5:45",
  }
};


export const STEP_COOL_DOWN_15_MIN: WorkoutStep = {
  id: 2,
  name: "Cool down",
  type: STEP_COOL_DOWN,
  duration: {
    // id: 1,
    type: TARGET_TIME,
    min: "15",
  },
  intensity: {
    // id: 2,
    type: TARGET_PACE,
    min: "6:00",
    max: "6:45",
  }
};

export var WORKOUTS : Workout[] = [
  {
    id: 1,
    name: "Recovery",
    type: RECOVERY,
    sports: [RUNNING],
    steps: [
      STEP_WARM_UP_15_MIN_3KM,
      STEP_EASY_10K,
      STEP_COOL_DOWN_15_MIN
    ],
    creator: USER_1,
    icon: "running"
  },
  {
    id: 2,
    name: "Long Run",
    type: LONG_RUN,
    sports: [RUNNING],
    steps: [
      STEP_WARM_UP_15_MIN_3KM,
      STEP_EASY_30K,
      STEP_COOL_DOWN_15_MIN
    ],
    creator: USER_1,
    icon: "running"
  },
  {
    id: 3,
    name: "Long Ride",
    type: LONG_RUN,
    sports: [CYCLING],
    steps: [
      STEP_WARM_UP_15_MIN_3KM,
      STEP_EASY_30K,
      STEP_COOL_DOWN_15_MIN
    ],
    creator: USER_1,
    icon: "cycling"
  }
];




