// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  const charMap = {};
  for (const char of str.split('')) {
    // if (charMap[char]) charMap[char]++;
    // else charMap[char] = 1;
    charMap[char] = charMap[char] + 1 || 1;
  }
  let maxChar;
  for (const char in charMap) {
    if (charMap[char] > charMap[maxChar] || !maxChar) maxChar = char;
  }
  return maxChar;
}

module.exports = maxChar;
