document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
  
    // Reset error messages
    document.getElementById("nameError").textContent = "";
    document.getElementById("emailError").textContent = "";
    document.getElementById("passwordError").textContent = "";
  
    // Get form values
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
  
    // Validate form values
    var isValid = true;
  
    if (name.trim() === "") {
      document.getElementById("nameError").textContent = "Name is required";
      isValid = false;
    }
  
    if (email.trim() === "") {
      document.getElementById("emailError").textContent = "Email is required";
      isValid = false;
    }
  
    if (password.trim() === "") {
      document.getElementById("passwordError").textContent = "Password is required";
      isValid = false;
    }
  
    if (isValid) {
      // Form submission is successful
      document.getElementById("notification").textContent = "Form submitted successfully!";
      document.getElementById("notification").style.color = "green";
      document.getElementById("myForm").reset(); // Reset form fields
    } else {
      // Form submission has errors
      document.getElementById("notification").textContent = "Form submission failed. Please check the errors.";
      document.getElementById("notification").style.color = "red";
    }
  });




// // Function to validate the form
// function validateForm(event) {
//     event.preventDefault(); // Prevent form submission
  
//     // Get form inputs
//     const nameInput = document.getElementById('name');
//     const emailInput = document.getElementById('email');
//     const passwordInput = document.getElementById('password');
  
//     // Get error message elements
//     const nameError = document.getElementById('nameError');
//     const emailError = document.getElementById('emailError');
//     const passwordError = document.getElementById('passwordError');
  
//     // Reset error messages
//     nameError.textContent = '';
//     emailError.textContent = '';
//     passwordError.textContent = '';
  
//     // Validate name field
//     if (nameInput.value.trim() === '') {
//       nameError.textContent = 'Name is required';
//       nameInput.focus();
//       return false;
//     }
  
//     // Validate email field
//     if (emailInput.value.trim() === '') {
//       emailError.textContent = 'Email is required';
//       emailInput.focus();
//       return false;
//     } else if (!isValidEmail(emailInput.value.trim())) {
//       emailError.textContent = 'Invalid email format';
//       emailInput.focus();
//       return false;
//     }
  
//     // Validate password field
//     if (passwordInput.value.trim() === '') {
//       passwordError.textContent = 'Password is required';
//       passwordInput.focus();
//       return false;
//     } else if (passwordInput.value.trim().length < 8) {
//       passwordError.textContent = 'Password should be at least 8 characters long';
//       passwordInput.focus();
//       return false;
//     }
  
//     // If all validations pass, submit the form
//     document.getElementById('myForm').submit();
//   }
  
//   // Function to check email format using regular expression
//   function isValidEmail(email) {
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return emailRegex.test(email);
//   }
  
//   // Attach form validation function to form submit event
//   document.getElementById('myForm').addEventListener('submit', validateForm);
  