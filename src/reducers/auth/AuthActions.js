/**
 * Created by Caowenjuan on 16/12/1.
 */
import keymirror from 'keymirror';

const Actions = keymirror({
  LOGIN_SUCCESS: null,
  LOGIN_ERROR: null,
  REGISTER_SUCCESS: null,
  REGISTER_ERROR: null,
});


export function loginSuccess(userInfo) {
  return {
    type: Actions.LOGIN_SUCCESS,
    userInfo,
  }
}

export function loginError() {
  return {
    type: Actions.LOGIN_ERROR,
  }
}

export function registerSuccess(userInfo) {
  return {
    type: Actions.REGISTER_SUCCESS,
    userInfo,
  }
}

export function registerError() {
  return {
    type: Actions.REGISTER_ERROR,
  }
}
export default Actions;
