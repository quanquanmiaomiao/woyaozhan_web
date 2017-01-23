/**
 * Created by Caowenjuan on 16/12/1.
 */
import { combineReducers } from 'redux';

import auth from './auth/AuthReducer';

export default combineReducers({
  auth,
});