# Email Management System

This project is a simple Email Management System implemented in JavaScript with a basic HTML UI. It includes functionalities to add, list, and delete emails.

## Features

- **Add Emails**: Users can enter an email address, subject, and message to add an email to the list.
- **View Emails**: All non-deleted emails are displayed in a list format.
- **Delete Emails**: Users can delete emails, which will mark them as deleted and remove them from the visible list.

## File Structure

- **`index.html`**: The main HTML file containing the UI for the email management system. It includes form elements to input email details and a list to display emails.
- **`loginModule.js`**: Provides login functionality (not used in this specific UI but included for completeness).
- **`mailboxModule.js`**: Contains functions to create a mailbox and add emails.
- **`deleteMailsModule.js`**: Includes functionality to delete emails from the mailbox.
- **`loginModule.test.js`**: Test cases for the login module.
- **`mailboxModule.test.js`**: Test cases for the mailbox module.
- **`deleteMailsModule.test.js`**: Test cases for the delete mails module.
- **`babel.config.js`**: Configuration for Babel to transpile JavaScript files for testing.

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/email-management-system.git
    ```
2. Navigate to the project directory:
    ```bash
    cd email-management-system
    ```
3. Open `index.html` in your browser to use the application.

## Usage

- **Add an Email**: Enter the email address, subject, and message in the respective fields and click "Add Email."
- **View Emails**: The list of emails will be displayed below the form.
- **Delete an Email**: Click the "Delete" button next to the email you want to remove.

## Testing

Unit tests are included for the email management functions. You can run tests using Jest:

1. Install dependencies:
    ```bash
    npm install
    ```
2. Run tests:
    ```bash
    npm test
    ```

## Contributing

Feel free to open issues or submit pull requests if you have suggestions or improvements.
