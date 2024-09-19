// mailboxModule.test.js
const mailboxModule = require('./mailboxModule');

test('should add an email to the mailbox', () => {
  const mailbox = mailboxModule.createMailbox();
  mailboxModule.addEmail(mailbox, 'test@example.com', 'Hello World', 'This is a test message');
  expect(mailbox.length).toBe(1);
});
