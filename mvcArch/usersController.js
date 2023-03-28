const usersModel = require('./usersModel');
const usersView = require('./usersView');

function getUsers(req, res) {
  const users = usersModel.getUsers();
  usersView.showUsers(users);
  res.end();
}

function getUserById(req, res) {
  const id = parseInt(req.params.id);
  const user = usersModel.getUserById(id);
  if (user) {
    usersView.showUsers([user]);
  } else {
    console.log(`User with ID ${id} not found`);
  }
  res.end();
}

module.exports = {
  getUsers,
  getUserById,
};