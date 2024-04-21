document.addEventListener("DOMContentLoaded", function() {
    var loginForm = document.getElementById("loginForm");
    var signupForm = document.getElementById("signupForm");
    var formTitle = document.getElementById("formTitle");
    var toggleFormButton = document.getElementById("toggleFormButton");

    toggleFormButton.addEventListener("click", function() {
        if (loginForm.style.display === "none") {
            loginForm.style.display = "block";
            signupForm.style.display = "none";
            formTitle.innerText = "Login";
            toggleFormButton.innerText = "Sign Up";
        } else {
            loginForm.style.display = "none";
            signupForm.style.display = "block";
            formTitle.innerText = "Sign Up";
            toggleFormButton.innerText = "Login";
        }
        document.getElementById("errorMessage").innerText = ""; // Clear any error message
    });

    loginForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent form submission

        var username = document.getElementById("username").value;
        var password = document.getElementById("password").value;

        // Example validation
        if (username === "victor" && password === "victor") {
            alert("Login successful!"); // For demo purposes
        } else {
            document.getElementById("errorMessage").innerText = "Invalid username or password.";
        }
    });

    signupForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent form submission

        var newUsername = document.getElementById("newUsername").value;
        var newPassword = document.getElementById("newPassword").value;

        // Example validation
        if (newUsername && newPassword) {
            alert("Sign up successful!"); // For demo purposes
        } else {
            document.getElementById("errorMessage").innerText = "Please fill in all fields.";
        }
    });
});



const nodemailer = require('nodemailer');
const twilio = require('twilio');


const twilioClient = twilio('AC90b6dfd6096dc3efc093f6a4ec27110d', '84aa93c444d8010937a2f87caecddf2a');


const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'YOUR_EMAIL_ADDRESS',
    pass: 'YOUR_EMAIL_PASSWORD'
  }
});


function generateOTP() {
    
    var otp = Math.floor(100000 + Math.random() * 900000);
    return otp;
}

document.addEventListener("DOMContentLoaded", function() {
    var loginForm = document.getElementById("loginForm");
    var signupForm = document.getElementById("signupForm");
    var formTitle = document.getElementById("formTitle");
    var toggleFormButton = document.getElementById("toggleFormButton");

    toggleFormButton.addEventListener("click", function() {
        if (loginForm.style.display === "none") {
            loginForm.style.display = "grid";
            signupForm.style.display = "none";
            formTitle.innerText = "Login";
            toggleFormButton.innerText = "Sign Up";
        } else {
            loginForm.style.display = "none";
            signupForm.style.display = "block";
            formTitle.innerText = "Sign Up";
            toggleFormButton.innerText = "Login";
        }
        document.getElementById("errorMessage").innerText = ""; 
    });

    loginForm.addEventListener("submit", function(event) {
        event.preventDefault();

        var username = document.getElementById("username").value;
        var password = document.getElementById("password").value;

        
        if (username === "victor" && password === "victor") {
            var otp = generateOTP(); 

            
            twilioClient.messages.create({
                body: 'Your OTP is: ' + otp,
                to: '+YOUR_PHONE_NUMBER',
                from: '+YOUR_TWILIO_PHONE_NUMBER'
            }).then((message) => console.log(message.sid))
            .catch(error => console.error(error));

    
            transporter.sendMail({
                from: 'YOUR_EMAIL_ADDRESS',
                to: 'victorakinsanmi2018@gmail.com',
                subject: 'OTP for Login',
                text: 'Your OTP is: ' + otp
            }, function(error, info) {
                if (error) {
                    console.error(error);
                } else {
                    console.log('Email sent: ' + info.response);
                }
            });

            alert("Login successful! OTP sent to your phone number and email."); 
        } else {
            document.getElementById("errorMessage").innerText = "Invalid username or password.";
        }
    });  

    signupForm.addEventListener("submit", function(event) {
        event.preventDefault(); 

        var newUsername = document.getElementById("newUsername").value;
        var newPassword = document.getElementById("newPassword").value;

        var newPassword 
    
        if (newUsername && newPassword) {


            alert("Sign up successful!"); 
        } else {
            document.getElementById("errorMessage").innerText = "Please fill in all fields.";
            document.getElementsByTagName()


    



        } 
    });
});
