/* 11. Splice Element
Define function spliceElement(someArr, index)
Splice the element at the provided index in the array.
*/
function spliceElement(someArr: Array<any>, index: number) {
  let newArray = someArr.splice(index);
  return newArray;
}