# Team Profile Generator

## Description
This is the tenth challenge in the Northwestern Coding Bootcamp (Module 10). We were required to dynamically generate an html file of cards containing information about team member profiles based on CLI user input. We used the inquirer npm to create prompts in the terminal and implemented new course material from the four pillars of Object Oriented Programming, including modularization (ENCAPSULATION) and constructor functions (and classes/subclasses) (INHERITANCE).

## Link to video walkthrough
[Live Video Walkthrough](https://youtu.be/youf67Oe8Qc)

## Screenshot
![Webpage Screenshot](./images/Screen%20Shot%202022-09-27%20at%2012.24.44%20PM.png)
![Webpage Screenshot](./images/Screen%20Shot%202022-09-27%20at%2012.26.32%20PM.png)
![Webpage Screenshot](./images/Screen%20Shot%202022-09-27%20at%2012.26.59%20PM.png)
![Webpage Screenshot](./images/Screen%20Shot%202022-09-27%20at%2012.27.45%20PM.png)

## User Story
```md
AS A manager
I WANT to generate a webpage that displays my team's basic info
SO THAT I have quick access to their emails and GitHub profiles
```

## Acceptance Criteria
```md
GIVEN a command-line application that accepts user input
WHEN I am prompted for my team members and their information
THEN an HTML file is generated that displays a nicely formatted team roster based on user input
WHEN I click on an email address in the HTML
THEN my default email program opens and populates the TO field of the email with the address
WHEN I click on the GitHub username
THEN that GitHub profile opens in a new tab
WHEN I start the application
THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
WHEN I enter the team manager’s name, employee ID, email address, and office number
THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
WHEN I select the engineer option
THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
WHEN I select the intern option
THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
WHEN I decide to finish building my team
THEN I exit the application, and the HTML is generated
```