// mailboxModule.js

const mailboxModule = {
    createMailbox: function() {
      return [];
    },
    addEmail: function(mailbox, email, subject, message) {
      const newEmail = { email, subject, message };
      mailbox.push(newEmail);
    }
  };
  
  module.exports = mailboxModule;
  