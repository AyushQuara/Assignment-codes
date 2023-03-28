function showUsers(users) {
    console.log('Users:');
    users.forEach(user => console.log(`- ${user.name} (${user.email})`));
  }
  
  module.exports = {
    showUsers,
  };