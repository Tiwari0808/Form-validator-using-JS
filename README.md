# Form Validation Project

This is a form validation application built using HTML, CSS, and JavaScript. It validates various user inputs, such as name, contact number, email, and a message field. The project dynamically displays error messages or success icons based on the user's input and ensures that the form is properly filled before submission.

## Features

- **Name Validation**: Ensures that the user enters their full name (first and last name).
- **Phone Number Validation**: Requires a 10-digit phone number.
- **Email Validation**: Validates the format of the email using a regular expression.
- **Message Validation**: Ensures that the user types at least 20 characters in the message field.
- **Dynamic Feedback**: Shows error messages for incorrect inputs and success icons for valid fields.
- **Submission Feedback**: Displays a success or error message upon form submission.

## How It Works

1. The user inputs their name, phone number, email, and message.
2. Each field is validated dynamically as the user types:
   - **Name**: Must contain a first and last name with a space in between.
   - **Phone Number**: Must be exactly 10 digits.
   - **Email**: Must be a valid email format (e.g., `user@example.com`).
   - **Message**: Must be at least 20 characters long.
3. If all fields are valid, a success message is shown when the user submits the form.

## Code Snippets

### HTML Structure

```html
<div class="form-container">
  <input type="text" id="contact-name" placeholder="Full Name">
  <span id="name-error"></span>

  <input type="text" id="contact-number" placeholder="Phone Number">
  <span id="contact-error"></span>

  <input type="email" id="contact-email" placeholder="Email">
  <span id="email-error"></span>

  <textarea id="contact-msg" placeholder="Your Message"></textarea>
  <span id="message-error"></span>

  <button type="submit" onclick="submitValidate()">Submit</button>
  <span id="submit-msg"></span>
</div>
