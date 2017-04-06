/**
 * Created by Caowenjuan on 17/4/6.
 */
import keymirror from 'keymirror';

const Actions = keymirror({
  CORPS_LIST_REQUEST: null,
  CORPS_LIST_SUCCESS: null,
  CORPS_LIST_ERROR: null,
  CORPS_INFO_REQUEST: null,
  CORPS_INFO_SUCCESS: null,
  CORPS_INFO_ERROR: null,
});

export function corpsListRequest() {
  return {
    type: Actions.CORPS_LIST_REQUEST,
  }
}

export function corpsListSuccess(data) {
  return {
    type: Actions.CORPS_LIST_SUCCESS,
    data,
  }
}

export function corpsListError() {
  return {
    type: Actions.CORPS_LIST_ERROR,
  }
}

export function corpsInfoRequest() {
  return {
    type: Actions.CORPS_INFO_REQUEST,
  }
}

export function corpsInfoSuccess(data) {
  return {
    type: Actions.CORPS_INFO_SUCCESS,
    data,
  }
}

export function corpsInfoError() {
  return {
    type: Actions.CORPS_INFO_ERROR,
  }
}


export default Actions;
