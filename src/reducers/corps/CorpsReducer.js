/**
 * Created by Caowenjuan on 17/4/6.
 */
import InitialState from './CorpsState';
import Action from './CorpsActions';
const initialState = new InitialState;

export default function corpsReducer(state = initialState, action) {
  switch (action.type) {
    case Action.CORPS_LIST_REQUEST:
      return state;
    case Action.CORPS_LIST_SUCCESS:
      return state;
    case Action.CORPS_LIST_ERROR:
      return state;
    case Action.CORPS_INFO_REQUEST:
      return state;
    case Action.CORPS_INFO_SUCCESS:
      return state;
    case Action.CORPS_INFO_ERROR:
      return state;
    default:
      return state;
  }
}