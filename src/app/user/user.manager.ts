/**
 * Created by Ismail on 17/01/2017.
 */

import {Injectable} from "@angular/core";
import {User} from "../models/user";
import {USER_1} from "../workout/mock-workouts";
@Injectable()
export class UserManager {

  getUser() : User {
    // returns mock user
    return USER_1;
  }
}
