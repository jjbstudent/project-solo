console.log('test')
// declare variables from HTML
let signupBtn = document.getElementById('signupBtn');
let signinBtn = document.getElementById('signinBtn');
let nameField = document.getElementById('nameField');
let title = document.getElementById('title');

const msg = document.getElementById('success-msg'); // added to hide my message Div
msg.style.display = "none"; 


//when the signin button i pressed it will change elements and validate user input
signinBtn.addEventListener('click', function() {  
    nameField.style.maxHeight = "0";
    title.innerHTML = 'Sign In';
    signupBtn.classList.add('disable');
    signinBtn.classList.remove('disable');
});

// sign up button will change elements and store user input 
signupBtn.addEventListener('click', function() {  
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
signinBtn.addEventListener('click', function() {
    msg.style.display = "none";  
})


// var username = "jermaine";
// var email = "j.bandoo@gmail.com"; 
// var password = "123456";

// if (username && password) { 
//   console.log("Sign in successful");
// } else {
//   console.log("Try again");  
// }

