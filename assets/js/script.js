console.log('test')

let signupBtn = document.getElementById('signupBtn');
let signinBtn = document.getElementById('signinBtn');
let nameField = document.getElementById('nameField');
let title = document.getElementById('title');



//when the sign in button is clicked it will change the following HTML elements
signinBtn.onclick = function() {  
    nameField.style.maxHeight = "0";
    title.innerHTML = 'Sign In';
    signupBtn.classList.add('disable');
    signinBtn.classList.remove('disable');
}
signupBtn.onclick = function() {  
    nameField.style.maxHeight = "60px";
    title.innerHTML = 'Sign Up';
    signupBtn.classList.remove('disable');
    signinBtn.classList.add('disable');
}




// var username = "jermaine";
// var email = "j.bandoo@gmail.com"; 
// var password = "123456";

// if (username && password) { 
//   console.log("Sign in successful");
// } else {
//   console.log("Try again");  
// }

