 Human Verification Registration Form

A modern human-verified registration form built using HTML, CSS, JavaScript, and Bootstrap.
This project prevents bot submissions by combining form validation, user activity tracking, typing behavior, time-based checks, and a honeypot field.

 Features

⦁	 Real-time form validation
⦁	 Password strength checks
⦁	 Progress bar for form completion
⦁	 Human detection using:

⦁	Time spent on page
⦁	
⦁	Mouse & keyboard activity
⦁	
⦁	Typing behavior
⦁	
⦁	Hidden honeypot field
⦁	Responsive UI using Bootstrap
⦁	Clean gradient-based design

 Technologies Used

⦁	HTML5

⦁	CSS3

⦁	JavaScript (Vanilla JS)

⦁	Bootstrap 5


 How It Works

1️ Form Validation

Each input field is validated in real time:

⦁	Name → Minimum 5 characters

⦁	Email → Must contain @

⦁	Phone → Exactly 10 digits (not fake numbers)

⦁	Password → Minimum 8 characters, not weak/common

⦁	Confirm Password → Must match password

2️ Progress Bar

The progress bar fills automatically as fields are completed, giving visual feedback to the user.

3️ Human Verification Logic

A user is considered human only if:

⦁	They spend more than 5 seconds on the form

⦁	They move the mouse or press keys

⦁	They type more than 15 keystrokes

⦁	The hidden honeypot field remains empty

If any condition fails → Bot detected 

 Validation & Detection Logic

Implemented inside script.js using:

⦁	Event listeners (mousemove, keydown)
⦁	
⦁	Typing counter
⦁	
⦁	Time tracking
⦁	
⦁	Honeypot input check

Form submission is blocked until all conditions pass. 


 UI Design

⦁	Gradient background

⦁	Rounded card layout

⦁	Animated progress bar

⦁	Error messages shown clearly

⦁	Fully responsive

⦁	Styled using style.css




