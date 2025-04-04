const inputs = document.querySelectorAll('input'); 
const emailLabel = document.getElementsByClassName('email-label')[0]; 
const passwordLabel = document.getElementsByClassName('password-label')[0]; 

// Check if inputs exist to avoid errors
if (inputs.length > 0 && emailLabel) {
  inputs[0].addEventListener('focus', () => {
    emailLabel.style.top = '220px'; // Moves label up when input is focused
    emailLabel.style.color = 'lightblue'; // Fixed typo
  });

  inputs[0].addEventListener('blur', () => {
    emailLabel.style.top = '240px'; // Moves label back when input loses focus
    emailLabel.style.color = 'white';
  });
}

if (inputs.length > 1 && passwordLabel) {
  inputs[1].addEventListener('focus', () => {
    passwordLabel.style.top = '320px'; // Moves label up when input is focused
    passwordLabel.style.color = 'lightblue'; // Fixed typo
  });

  inputs[1].addEventListener('blur', () => {
    passwordLabel.style.top = '340px'; // Moves label back when input loses focus
    passwordLabel.style.color = 'white';
  });
}
