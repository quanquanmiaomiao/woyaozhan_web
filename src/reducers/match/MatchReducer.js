/**
 * Created by Caowenjuan on 17/4/6.
 */
import InitialState from './MatchState';
import Action from './MatchActions';
const initialState = new InitialState;

export default function corpsReducer(state = initialState, action) {
  switch (action.type) {
    case Action.MATCH_LIST_REQUEST:
      return state;
    case Action.MATCH_LIST_SUCCESS:
      return state;
    case Action.MATCH_LIST_ERROR:
      return state;
    case Action.MATCH_INFO_REQUEST:
      return state;
    case Action.MATCH_INFO_SUCCESS:
      return state;
    case Action.MATCH_INFO_ERROR:
      return state;
    default:
      return state;
  }
}