# My Password Generator

## Table of Contents
1. [Description](#description)
2. [Visuals](#visuals)
3. [Usage](#usage)
4. [Resources](#resources)

## Description
Created a password generator able to generate a password that meets certain criteria based on the
users selections of uppercase, lowercase, numbers and special characters to help provide greater security when necessary. The password must be between 8-128 characters. To accomplish this I created a function that prompts the users all the questions for the password criteria using if statements. I assigned the password function inside the GeneratePassword function to the variable options which then for looped for the length the user selected. Then created a random number using mathfloor and math random so it's not a decimal number assigning it to the options variable which in hand selects a random character each character of the length of the password and pushes it to the password array which returns passwordArray.join("") and that is pushed into the writepassword() function assigned to the variable password and displayed as text.value.

## Visuals
![password generator](/images/passwordgenerator.png)
![user prompts](/images/prompts.png)

## Usage
When the user needs a new secure password they can click Generate Password button which will prompt how many characters between 8-128, if they want to use lowercase letters, uppercase, special characters, and numbers. Then the users inputs will be validated to make sure it meets the minimum criteria of at least one of the characters and betwen 8-128 characters longs. If wrong the user will receive an alert with an error message to start over. If validated the user will receive a password that matches the selected criteria which will be displayed on the screen.