/**
 * Created by Caowenjuan on 17/4/6.
 */
import keymirror from 'keymirror';

const Actions = keymirror({
  MATCH_LIST_REQUEST: null,
  MATCH_LIST_SUCCESS: null,
  MATCH_LIST_ERROR: null,
  MATCH_INFO_REQUEST: null,
  MATCH_INFO_SUCCESS: null,
  MATCH_INFO_ERROR: null,
});

export function matchListRequest() {
  return {
    type: Actions.MATCH_LIST_REQUEST,
  }
}

export function matchListSuccess(data) {
  return {
    type: Actions.MATCH_LIST_SUCCESS,
    data,
  }
}

export function matchListError() {
  return {
    type: Actions.MATCH_LIST_ERROR,
  }
}

export function matchInfoRequest() {
  return {
    type: Actions.MATCH_INFO_REQUEST,
  }
}

export function matchInfoSuccess(data) {
  return {
    type: Actions.MATCH_INFO_SUCCESS,
    data,
  }
}

export function matchInfoError() {
  return {
    type: Actions.MATCH_INFO_ERROR,
  }
}


export default Actions;
