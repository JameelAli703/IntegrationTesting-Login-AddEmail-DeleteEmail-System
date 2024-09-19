// deleteMailsModule.js
const deleteMailsModule = {
    deleteEmail: function(mailbox, emailId) {
      if (!mailbox || !mailbox.emails) {
        throw new Error('Mailbox is not valid or does not have emails');
      }
      const email = mailbox.emails.find(email => email.id === emailId);
      if (email) {
        email.deleted = true;
        return true;
      }
      return false;
    }
  };
  
  module.exports = deleteMailsModule;
  