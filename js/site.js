// Controller
function getValues() {
  // get the user's input
  // decide what to do with it
  let userInput = document.getElementById('message').value.toLowerCase();
  
  userInput = userInput.replace(/[^a-z0-9-]/g, '');

  let inputPalindrome = checkForPalindrome(userInput);

  displayPalindrome(inputPalindrome);
}

// Business logic
function checkForPalindrome(message) {
  return message == message.split('').reverse().join('');
}

// View
function displayPalindrome(messagePalindrome) {
  // show the string on the page
  document.getElementById('msg').textContent = messagePalindrome;


  if(messagePalindrome !== false) {
    document.getElementById('alertCorrect').classList.remove('d-none');
    document.getElementById('alertIncorrect').classList.add('d-none');
} else {
    document.getElementById('alertIncorrect').classList.remove('d-none');
    document.getElementById('alertCorrect').classList.add('d-none');
}
}
