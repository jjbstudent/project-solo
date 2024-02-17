console.log('test')
// declare variables from HTML
let signupBtn = document.getElementById('signupBtn');
let signinBtn = document.getElementById('signinBtn');
let nameField = document.getElementById('nameField');
let title = document.getElementById('title');

const msg = document.getElementById('success-msg'); // added to hide my message Div
msg.style.display = "none"; 


// sign up button will change elements and store user input 
signupBtn.addEventListener('click', function(event) {
    nameField.style.maxHeight = "60px";
    title.innerHTML = 'Sign Up';
    signupBtn.classList.remove('disable');
    signinBtn.classList.add('disable');

    // Get the values from the input fields
    const userName = document.getElementById('userName').value;
    const userEmail = document.getElementById('userEmail').value;
    const userPassword = document.getElementById('userPassword').value;
    const msg = document.getElementById('success-msg');
    msg.style.display = "none";  // Display sucess login message 

// Check if all fields are filled out
if (userName && userEmail && userPassword) {
    // Added so I can check if local storage is supported by the browser
    if (typeof(Storage) !== "undefined") {
        event.preventDefault();

        // Get existing user data from local storage or initialize an empty array
        const existingUsers = JSON.parse(localStorage.getItem('users')) || [];

        // Create a new user object
        const newUser = {
            userName: userName,
            userEmail: userEmail,
            userPassword: userPassword
        };

        // Add the new user to the existing users array
        existingUsers.push(newUser);

        // Store the updated array back in local storage
        localStorage.setItem('users', JSON.stringify(existingUsers));

        // Message in console log 
        console.log('Sign-up data has been stored in local storage.');
        msg.style.display = "block";
        //clear input fields
        document.getElementById('userName').value = '';
        document.getElementById('userEmail').value = '';
        document.getElementById('userPassword').value = '';  
    } else {
        // If local storage is not supported, return error message
        console.log('Local storage is not supported by your browser.');
    }
} else {
    // Display an error message or take appropriate action if any field is empty
    console.log('Please fill out all fields.');
}
});

// sign in button 
//when the signin button is pressed it will change elements and validate user input
signinBtn.addEventListener('click', function(event) {
    nameField.style.maxHeight = "0";
    title.innerHTML = 'Sign In';
    signupBtn.classList.add('disable');
    signinBtn.classList.remove('disable');
    msg.style.display = "none";  

    // Get the values from the input fields
    const signInEmail = document.getElementById('userEmail').value;
    const signInPassword = document.getElementById('userPassword').value;

    // Validate email and password
    if (signInEmail && signInPassword) {
        event.preventDefault();
        // You can add your authentication logic here, such as checking against stored user data
        const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
        const user = existingUsers.find(u => u.userEmail === signInEmail && u.userPassword === signInPassword);

        if (user) {
            console.log('Sign-in successful');
            // Perform actions for successful sign-in, such as redirecting to a new page
        } else {
            console.log('Invalid email or password. Please try again.');
            // Display an error message or take appropriate action for invalid credentials
        }
    } else {
        console.log('Please enter both email and password.');
        // Display an error message or take appropriate action if email or password is empty
    }
});

