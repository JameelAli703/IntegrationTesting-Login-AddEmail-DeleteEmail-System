// loginModule.test.js

const deleteMailsModule = require('./deleteMailsModule');  
const mailboxModule = require('./mailboxModule');

test('Successfully delete an email', () => {
    const mailbox = { emails: [{ id: 2, subject: 'Test Email', deleted: false }] };  
    const result = deleteMailsModule.deleteEmail(mailbox, 2);  // Pass the mailbox, not the mailboxModule
    expect(result).toBe(true);
});
