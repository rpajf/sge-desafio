const csv = require('csv-parser');

const path = require('path');
const fs = require('fs');

const csvFile = path.resolve(__dirname, './sgedesafio.csv');

const storeResults = require('../app/repositories');

const dataConverted = () => {
  const results = [];

  fs.createReadStream(csvFile)
    .pipe(csv())
    .on('data', (data) => {
      Object.entries(data).forEach(([key, value]) => {
        // key would be the column number (1 or 2)
        // value would be the data of the row

        let index = parseInt(key, 10) - 1;
        results[index] = results[index] || [];
        results[index].push(value);
      });
    })
    .on('end', () => {
      console.log(results);
    });
  console.log('resultado: ', results);
  return results;
};
console.log(dataConverted());

function removeCommaAndQuotes() {
  for (let i = 0; i < 6; i++) {
    let str = dataConverted[i].split(';');
    storeResults.pushResults(
      str[0],
      str[1],
      parseFloat(str[2], parseInt(str[3], 10))
    );
  }
}
module.exports = { removeCommaAndQuotes, dataConverted };
// console.log(removeCommaAndQuotes());
