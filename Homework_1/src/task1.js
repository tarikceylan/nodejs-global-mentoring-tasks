const reverseString = (input) => {
  const stringify = input.toString().trim();
  const strArr = stringify.split('');
  for (let idx = 0; idx < strArr.length; idx++) {
    strArr.splice(idx, 0, strArr.pop());
  }
  return strArr.join('');
};

process.stdin.on('data', (data) => {
  const reversed = reverseString(data);
  process.stdout.write(`${reversed}\n\n`);
});
