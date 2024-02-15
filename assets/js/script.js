console.log('test')

let signupBtn = document.getElementById('signupBtn');
let signinBtn = document.getElementById('signinBtn');
let nameField = document.getElementById('nameField');
let title = document.getElementById('title');



//when the signin botton i pressed it will change elements and validate user input
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

    // Added so i can check if local storage is supported by the browser
    if (typeof(Storage) !== "undefined") {
        // Store the values in local storage for sign-up
        localStorage.setItem('userName', userName);
        localStorage.setItem('userEmail', userEmail);
        localStorage.setItem('userPassword', userPassword);

        // messgage in console log 
        console.log('Sign-up data has been stored in local storage.');
    } else {
        // If local storage is not supported, return error message
        console.log('Local storage is not supported by your browser.');
    }
});



// var username = "jermaine";
// var email = "j.bandoo@gmail.com"; 
// var password = "123456";

// if (username && password) { 
//   console.log("Sign in successful");
// } else {
//   console.log("Try again");  
// }

