console.log('Welcome to the password validator tool!');

const passInput = prompt('Please enter your password');
console.log(passInput.length)

if (passInput.length > 10){
    alert('You have successfully entered a strong password');
} else {
    alert('Password did not register. Please enter a password with over 10 characters.')
}