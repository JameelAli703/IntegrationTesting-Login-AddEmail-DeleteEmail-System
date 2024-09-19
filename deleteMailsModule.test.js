// deleteMailsModule.test.js
const deleteMailsModule = require('./deleteMailsModule');

test('Successfully delete an email', () => {
  const mailbox = { emails: [{ id: 1, subject: 'Test', deleted: false }] };
  const result = deleteMailsModule.deleteEmail(mailbox, 1);
  expect(result).toBe(true);
  expect(mailbox.emails[0].deleted).toBe(true);
});

test('Fail to delete non-existing email', () => {
  const mailbox = { emails: [{ id: 1, subject: 'Test', deleted: false }] };
  const result = deleteMailsModule.deleteEmail(mailbox, 2);
  expect(result).toBe(false);
});
