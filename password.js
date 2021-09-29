const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});


console.log('Welcome to the password validator tool!');

// const passInput = global.prompt('Please enter your password');
// console.log(passInput.length)

reader.question('Please enter your password: \n', function(password) {
    if (password.length >= 10){
        console.log('You have successfully entered a strong password');
    } else {
        console.log('Password did not register. Please enter a password with over 10 characters.')
    };
    reader.close()

});

