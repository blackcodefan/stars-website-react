import { combineReducers } from 'redux';

import { authentication } from './authentication.reducer';
import { registration } from './registration.reducer';
import { users } from './users.reducer';
import { alert } from './alert.reducer';
import { property } from './property.reducer';
import { currentProperty } from './currentProperty.reducer';
import { location } from './location.reducer'

const rootReducer = combineReducers({
  authentication,
  registration,
  users,
  alert,
  property,
  currentProperty,
  location,
});

export default rootReducer;