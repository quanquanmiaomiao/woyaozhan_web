/**
 * Created by Caowenjuan on 16/12/1.
 */
import InitialState from './AuthState';
import Action from './AuthActions';
const initialState = new InitialState;

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case Action.LOGIN_SUCCESS:
      return state.setIn(['userInfo'], action.userInfo);
    case Action.LOGIN_ERROR:
      return state.setIn(['userInfo'], undefined);
    case Action.REGISTER_SUCCESS:
      return state.setIn(['userInfo'], action.userInfo);
    case Action.REGISTER_ERROR:
      return state.setIn(['userInfo'], undefined);
    default:
      return state;
  }
}