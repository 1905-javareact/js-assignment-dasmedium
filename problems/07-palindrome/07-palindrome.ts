/* 7. Palindrome
Define function isPalindrome(someStr)
Return true if someStr is a palindrome, otherwise return false */
function isPalindrome(someStr: string) {
  return someStr.split("").every((chr, i) => {
    return chr === someStr[someStr.length - i - 1];
  });
}
