/**
 * Created by Caowenjuan on 17/3/22.
 */
'use strict';
const port = 3003;
const host = 'localhost';
let prod;
try {
  prod = process.env.NODE_ENV === 'production';
} catch (e) {
  prod = false;
}

module.exports = {
  // dev
  port,
  host,
  // prod
  prod,
};
