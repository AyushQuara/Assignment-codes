const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./database');
const studentRoutes = require('./studentRoutes');

const app = express();

app.use(bodyParser.json());

app.use('/students', studentRoutes);

sequelize
  .sync()
  .then(() => {
    console.log('Connected to database');
    app.listen(3000, () => {
      console.log('Server started on port 3000');
    });
  })
  .catch((error) => {
    console.error(error);
  });