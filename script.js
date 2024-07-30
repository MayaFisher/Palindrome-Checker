const result = document.getElementById('result');
const checkButton = document.getElementById('check-btn');
const userInput = document.getElementById('text-input');

const checkForPalindrome = input => {
  const ogInput = input;
  if (input === '') {
    alert('Please input a value');
    return;
  }
  result.replaceChildren();
  const lowerCaseStr = input.replace(/[^A-Za-z0-9]/gi, '').toLowerCase();

  let resultMsg = `
  <strong>${ogInput}</strong>
  ${lowerCaseStr === [...lowerCaseStr].reverse().join('') ? 'is' : 'is not'} a palindrome.
  `;
  const pTag = document.createElement('p');
  pTag.className = 'user-input';
  pTag.innerHTML = resultMsg;
  result.appendChild(pTag);
  result.classList.remove("hidden");
};


checkButton.addEventListener("click", () => {
  checkForPalindrome(userInput.value);
  userInput.value = '';
});
userInput.addEventListener('keydown', e => {
  if(e.key === "Enter") {
    checkForPalindrome(userInput.value);
    userInput.value = '';
  }
});
