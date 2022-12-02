import fs from 'fs';
import path from 'path';
import csv from 'csvtojson';
import readline from 'readline';

const csvPath = path.join(__dirname, '../', 'csv/task2.csv');
const txtPath = path.join(__dirname, '../', 'task2.txt');

const readStream = fs.createReadStream(csvPath);
const writeStream = fs.createWriteStream(txtPath);

const rl = readline.createInterface({
  input: readStream.pipe(csv()),
  crlfDelay: Infinity
});

rl.on('line', (chunk) => {
  console.log('Writing Chunk');
  writeStream.write(`${chunk}\n`);
});
