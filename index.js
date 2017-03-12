
var safeJsonStringify = require('ac-safe-json-stringify');

module.exports = clone;

function clone(value) {
  return JSON.parse(safeJsonStringify(value));
}
