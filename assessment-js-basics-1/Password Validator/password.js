//password
// Welcome the user to the password validator tool

// Prompt the user for a password to validate

// Check if the user’s password meets the following constraint:

// At least 10 characters long

// If the user’s password meets the constraint, show a success message to the user

// If the user’s password fails the constraint, show a failure message to the user

const readline = require('readline');

const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function askQuestion() {
    reader.question('Please enter a password for validation ', function(answer) {
        if (answer.length >= 10) {
            console.log('You\'ve got a great lookin password!')
            reader.close();
        } else {
            console.log('\ffail to provide password requirements')
            askQuestion();
        }
    })
}

askQuestion();
