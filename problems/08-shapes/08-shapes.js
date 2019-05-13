/* 8. Shapes
Define function: printShape(shape, height, character)
shape is a String and is either "Square", "Triangle", "Diamond".
height is a Number and is the height of the shape. Assume the number is odd.
character is a String that represents the contents of the shape. Assume this String contains just one character.
Use a switch statement to determine which shape was passed in.
Use the console.log function to print the desired shape.
Example for printShape("Square", 3, "%");
%%%
%%%
%%%
Example for printShape("Triangle", 3, "$");
$
$$
$$$
Example for printShape("Diamond", 5, "*");
  *
 ***
*****
 ***
  * 
*/

// NOTE: For this excercise only "Triangle" is properly implemented.

function printShape(shape, height, character) {
  // Printing the triangle
  function getRow(height) {
    let row = "";
    for (i = 1; i <= height; i++) {
      row += i === height ? character : character;
      return row;
    }
  }
  function printIt(height) {
    for (let area = "", j = 1; j <= height; j++) {
      area += getRow(j);
      console.log(area);
    }
  }

  // Printing the square
  function makeSquare(height) {
    for (i = 0; i < height; i++) {
      let row = "";
      let column = "";
      for (j = 0; j < height; j++) {
        return (row += character);
      }
      return (column += "\n");
    }
  }

  switch (shape) {
    case "Square":
      makeSquare(height);
      break;
    case "Triangle":
      printIt(height);
    case "Diamond":
      // code
      break;
    default:
    // code
  }
}
printShape("Square", 9, "J");
