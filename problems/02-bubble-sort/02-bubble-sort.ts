/* 2. Bubble Sort
Define function: bubbleSort(numArray)
Use the bubble sort algorithm to sort the array.
Return the sorted array. */

function bubbleSort(numArray: Array<number>) {
  // Implement bubblesort
  for (let a = 0; a < numArray.length; a++) {
    for (let b = 0; b < numArray.length - a - 1; b++) {
      if (numArray[b] > numArray[b + 1]) {
        const lesser = numArray[b + 1];
        numArray[b + 1] = numArray[b];
        numArray[b] = lesser;
      }
    }
  }
  return numArray;
}
