## Week #1 - Login Authentication

Start Date: March 11, 2020
End Date: March 18, 2020

_From Moodle:_

### Login Authentication

Write a script that will ask a visitor for a username using prompt.

The username is checked as follows:

* If the visitor enters `"admin"` as a username, then `prompt` for a password
* If they submit an empty string for the username, `alert` “Canceled”
* If it’s any other string, then `alert` “I don’t know you”.

If they really are the `admin`, their password is checked as follows:

* If password equals “TheMaster”, then `alert` “Welcome!”,
* If password is another string, `alert` “Wrong password”,
* For an empty string, `alert` “Canceled”

## Challenge Description

_Provide the challenge description here in your own words_

The goal of this challenge is to create a password that will only allow the admin (using the password TheMaster) to enter. If the admin enters the wrong password, he or she will be denied entrance with the words "Wrong password" displayed on the screen. If either the username or password fields are left blank, entrance is denied and the word "Canceled" appears. If the admin enters the wrong password, he or she receives a message on the screen saying "Wrong password."

## Explain your solution

_Explain how you came up with the solution. What did you use to solve the problem?_

To solve the problem, I first imagined three different scenarios: 1.) the user is the admin, 2.) the user is not the admin, or 3.) the username field is left blank. I then created a conditional statement using if/else if/else for these three different scenarios, which is executed after the user is prompted to enter his or her username.

 After entering a username, the person is then prompted to enter a password. If the user is the admin, then there are three possible scenarios: 1.) the admin enters the correct password, 2.) the admin doesn't enter a password and the field is left blank, or 3.) the admin enters the wrong password. I then created a second conditional statement (within the first conditional statement where userName === admin) to account for these three different scenarios.

## What are you thoughts about this challenge? Did you like it?

Yes, I thought that the challenge was fun and look forward to future weekly coding challenges. In addition to creating the JavaScript file, I also had fun adding content to the HTML page and styling it using CSS. I decided to add a button that would execute the script and display different text depending on what was entered. To do this, I made the entire script a function called loginAuth. I also had fun searching Google for an image to display on the homepage, as I thought it would be more engaging for the user to see something that said "Top Secret" and/or "Confidential" instead of a boring blank page.

## What have you learned from it?

This actually has nothing to do with the challenge itself, but the biggest thing I learned from this project was how to undo previous commits and restore work. I created the JavaScript file the same night the challenge was posted and spent a good chunk of time working on the button and HTML and CSS files. Eventually it was really late and I started dozing off, so I saved my work and thought I'd answer the questions in this README file and submit my work the next day. But later, when I tried to open my files in VS Code, I didn't see my work at all (only the files that I had initially committed without any original content added) and kept getting a Git error message saying that I had detached my head. The work wasn't saved anywhere on my local machine either and must have been overwritten, so I was very annoyed with myself. I knew I could redo my work if needed, but I wanted to avoid that if at all possible. After researching the error message online, I was finally able to restore my work and didn't have to start over again from scratch, so yay! :-D
