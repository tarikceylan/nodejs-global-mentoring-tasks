"use strict";

var reverseString = function reverseString(input) {
  var stringify = input.toString().trim();
  var strArr = stringify.split('');
  for (var idx = 0; idx < strArr.length; idx++) {
    strArr.splice(idx, 0, strArr.pop());
  }
  return strArr.join('');
};
process.stdin.on('data', function (data) {
  var reversed = reverseString(data);
  process.stdout.write("".concat(reversed, "\n\n"));
});