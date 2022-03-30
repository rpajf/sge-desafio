// const fastcsv = require('fast-csv');
const csv = require('csv-parser');

const fs = require('fs');
// const db = require('../database');

// const stream = fs.createReadStream('/Users/ralph/sgechallenge/src/assets/sgedesafio.csv');
let dataResults = [];
const csvFile = require('./sgedesafio.csv');

// const outputStream = fs.createWriteStream(csvFile, { encoding: 'utf8' });
// const finishedWriting = new Promise((resolve, reject) =>
//   outputStream.on('finished', resolve).on('error', reject)
// );
const readable = fs.createReadStream(csvFile);
console.log(readable);
fs.createReadStream('sgedesafio.csv')
  .on('error', (err) => console.log(err))
  .pipe(csv({}))
  .on('data', (data) => dataResults.push(data))

  .on('end', () => console.log(dataResults))
  .on('error', (err) => {
    console.log(err.message);
  });
// console.log('content', da);
// const getFileToConvert = (filename) => {
//   const converted = csvtojson()
//     .fromFile(inputFile)
//     .then((source) => {
//       for (let i = 0; i < source.length; i++) {
//         console.log(source[i]);
//       }
//     });
//   return converted;
// };
// getFileToConvert(inputFile);
// const csvStream = fastcsv
//   .parse()
//   .on('data', (data) => {
//     csvData.push(data);
//   })
//   .on('end', () => {
//     // remove the first line: header
//     csvData.shift();
//     // connect to the MySQL database
//     // save csvData
//   });
// stream.pipe(csvStream);
// console.log(csvStream);
