const express = require('express');
const usersController = require('./usersController');

const app = express();

app.get('/users', usersController.getUsers);
app.get('/users/:id', usersController.getUserById);

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});