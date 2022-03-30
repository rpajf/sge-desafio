const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'sql534.main-hosting.eu',
  user: 'u689377409_SGE',
  password: 'Sge070809',
});

connection.connect((err) => {
  if (err) {
    console.error(`error connecting: ${err.stack}`);
    return;
  }

  console.log(`connected as id ${connection.threadId}`);
});
exports.query = (query, callback) => {
  const result = connection.query(query, callback);

  return result.on('result');
};
