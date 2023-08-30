// Function to validate the form
function validateForm(event) {
    event.preventDefault(); // Prevent form submission
  
    // Get form inputs
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
  
    // Get error message elements
    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');
  
    // Reset error messages
    nameError.textContent = '';
    emailError.textContent = '';
    passwordError.textContent = '';
  
    // Validate name field
    if (nameInput.value.trim() === '') {
      nameError.textContent = 'Name is required';
      nameInput.focus();
      return false;
    }
  
    // Validate email field
    if (emailInput.value.trim() === '') {
      emailError.textContent = 'Email is required';
      emailInput.focus();
      return false;
    } else if (!isValidEmail(emailInput.value.trim())) {
      emailError.textContent = 'Invalid email format';
      emailInput.focus();
      return false;
    }
  
    // Validate password field
    if (passwordInput.value.trim() === '') {
      passwordError.textContent = 'Password is required';
      passwordInput.focus();
      return false;
    } else if (passwordInput.value.trim().length < 8) {
      passwordError.textContent = 'Password should be at least 8 characters long';
      passwordInput.focus();
      return false;
    }
  
    // If all validations pass, submit the form
    document.getElementById('myForm').submit();
  }
  
  // Function to check email format using regular expression
  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  
  // Attach form validation function to form submit event
  document.getElementById('myForm').addEventListener('submit', validateForm);
  