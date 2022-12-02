"use strict";

var _fs = _interopRequireDefault(require("fs"));
var _path = _interopRequireDefault(require("path"));
var _csvtojson = _interopRequireDefault(require("csvtojson"));
var _readline = _interopRequireDefault(require("readline"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var csvPath = _path["default"].join(__dirname, '../', 'csv/task2.csv');
var txtPath = _path["default"].join(__dirname, '../', 'task2.txt');
var readStream = _fs["default"].createReadStream(csvPath);
var writeStream = _fs["default"].createWriteStream(txtPath);
var rl = _readline["default"].createInterface({
  input: readStream.pipe((0, _csvtojson["default"])()),
  crlfDelay: Infinity
});
rl.on('line', function (chunk) {
  console.log('Writing Chunk');
  writeStream.write("".concat(chunk, "\n"));
});
rl.on('error', function (err) {
  console.log(err.message);
});