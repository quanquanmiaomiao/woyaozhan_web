/**
 * Created by Caowenjuan on 17/1/25.
 */

require('es6-promise').polyfill();
require('isomorphic-fetch');
require('babel-polyfill');
import config from './config';


const _param = (params) => {
  return Object.keys(params).map((key) => {
    return `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`;
  }).join('&');
};

// get请求
export const getFetch = async (path, params = {}) => {
  const paramsWithToken = Object.assign(
    {},
    params,
    {
      token: config.token,
      key: config.key,
      platformId: config.platformId,
      versionId: config.versionId,
    }
  );
  const RequestURL = `${path}?${_param(paramsWithToken)}`;
  try {
    const response = await fetch(RequestURL, {
      method: 'GET',
      headers: {},
      mode: 'cors',
    })
    const result = await response.json();
    return result;
  } catch (error) {
    return {
      message: error,
    }
  }
};

// post请求
export const postFetch = async (path, json = {}) => {
  const paramsWithToken = Object.assign({},
    json,
    {
      token: config.token,
      key: config.key,
      platformId: config.platformId,
      versionId: config.versionId,
    }
  );
  const body = JSON.stringify(paramsWithToken);
  try {
    const response = await fetch(path, {
      method: 'POST',
      headers: {
        Accept: '*/*',
        'Content-Type': 'application/json',
      },
      body,
    })
    const result = await response.json();
    return result;
  } catch (error) {
    return {
      message: error,
    }
  }
};
