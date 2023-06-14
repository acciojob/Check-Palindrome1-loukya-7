// complete the given function

function palindrome(str) {
  const formattedString = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  const reversedString = formattedString.split('').reverse().join('');
  return formattedString === reversedString;
}

module.exports = palindrome;
