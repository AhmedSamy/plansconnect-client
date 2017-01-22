import {TargetType} from "./target-type";
import {Unit} from "./unit";
/**
 * Created by Ismail on 17/01/2017.
 */
export class Target {
  // id: number;
  type?: TargetType;
  min?: string;
  max?: string;
  constructor(type?: TargetType) {
    // this.id = id;
    this.type = type;
  }
}
