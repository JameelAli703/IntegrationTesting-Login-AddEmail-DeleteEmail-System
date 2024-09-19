// loginModule.js
const loginModule = {
    login: function(username, password) {
      if (username === 'user' && password === 'password') {
        return true;
      }
      return false;
    }
  };
  
  module.exports = { loginModule };
  