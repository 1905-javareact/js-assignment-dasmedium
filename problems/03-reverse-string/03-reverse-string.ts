/* 3. Reverse String
Define function: reverseStr(someStr)
Reverse and return the String. */
function reverseStr(someStr: string) {
  return someStr.split("").reduce((acc, char) => char + acc, "");
}
