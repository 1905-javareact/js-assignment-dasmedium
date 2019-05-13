/* 5. Substring
Define function substring(someStr, startIndex, endIndex)
Return the substring contained between startIndex (inclusive) and endIndex (exclusive).
If incorrect input is entered, throw an exception stating the input was incorrect.
For example substring('hello', 0, 3) should give 'hel' */
function substring(someStr: string, startIndex: number, endIndex: number) {
  if (
    typeof someStr !== "string" ||
    typeof startIndex !== "number" ||
    typeof endIndex !== "number"
  ) {
    return "invalid input";
  }
  return someStr.substr(startIndex, endIndex);
}
console.log(substring("hello", 2, 3));
