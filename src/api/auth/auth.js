/**
 * Created by Caowenjuan on 17/3/28.
 */
import {postFetch} from '../httpHelper';
import {tootUrl} from '../config';


export function loginApi(params:{}) {
  return postFetch(`${tootUrl}login`, params);
}

export function register(params:{}) {
  return postFetch(`${tootUrl}register`, params);
}