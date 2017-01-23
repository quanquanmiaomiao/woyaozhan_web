/**
 * Created by Caowenjuan on 16/12/1.
 */
import InitialState from './AuthState';
import Action from './AuthActions';
const initialState = new InitialState;

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}