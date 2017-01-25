/**
 * Created by Caowenjuan on 17/1/25.
 */
const prefix = '';
const config = {
  prefix,
  url: `${prefix}`,
  token: null,
  key: null,
};

export function initApiConfig(newConfig:Object) {
  Object.keys(newConfig).forEach(k => {
    config[k] = newConfig[k];
  });
}

export default config;

