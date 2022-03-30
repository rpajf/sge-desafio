const express = require('express');
// node crud framework
require('express-async-errors');

const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());
// olhar as req e res pelo corpo(json)
const port = 3333;

app.listen(port, () => {
  console.log('server has started on port ${port}');
});

app.use((error, req, res, next) => {
  console.log('####Error Handler');
  console.log(error);
  res.sendStatus(500);
  // next(error);
});
