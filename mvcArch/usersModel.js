let users = [
    { id: 1, name: 'John', email: 'john@example.com' },
    { id: 2, name: 'Jane', email: 'jane@example.com' },
  ];
  
  function getUsers() {
    return users;
  }
  
  function getUserById(id) {
    return users.find(user => user.id === id);
  }
  
  module.exports = {
    getUsers,
    getUserById,
  };