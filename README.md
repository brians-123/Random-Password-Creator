# Random Password Creator
Random Password Creator https://brians-123.github.io/03-JavaScript-HW/

## Description
This is homework for the third week of the UW/Trilogy coding bootcamp. This project will create a password generator which will be used by employees to generate a random password. The page will be responsive for multiple screen size. 
Criteria for the user to select is:
1. Number of characters from 1-128
2. Upper-case letters, lower-case letters, numbers, and symbols

Validation will occur along the way to ensure:
1. The desired password size is a number and greater than 8 and less than 129
2. At least one character type is selected.
3. All of the character types have been generated. If not, ask the user to try again

When done, the screen will display the new password in the password text box without
being separated by commas.

## User Story

```
AS AN employee with access to sensitive data
I WANT to randomly generate a password that meets certain criteria
SO THAT I can create a strong password that provides greater security
```

## Acceptance Criteria

```
GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN prompted for character types to include in the password
THEN I choose lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page
```

## Mock-Up

The following image shows the web application's appearance and functionality:

![password generator demo](./Assets/03-javascript-homework-demo.png)

- - -

## Credits
User Story Acceptance Criteria and image are © 2020 Trilogy Education Services, a 2U, Inc. brand. All Rights Reserved.

## License
No one may reproduce, distribute, or create derivative works.

## Contributing
No one may reproduce, distribute, or create derivative works.
