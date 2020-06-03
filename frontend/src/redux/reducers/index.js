import { combineReducers } from 'redux';

import { authentication } from './authentication.reducer';
import { registration } from './registration.reducer';
import { users } from './users.reducer';
import { alert } from './alert.reducer';
import { property } from "./property.reducer";
import { currentProperty } from "./currentProperty.reducer";

const rootReducer = combineReducers({
  authentication,
  registration,
  users,
  alert,
  property,
  currentProperty,
});

export default rootReducer;