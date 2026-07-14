// Sum of array elements

function sumArray(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }

  console.log("Sum =", sum);
}

sumArray([1, 2, 3, 4, 5]);

// Reverse an array

function reverseArray(arr) {
  return arr.reverse();
}
console.log(reverseArray([1, 2, 3, 4, 5]));

// odd and even numbers from an array

function oddNumbers(arr) {
  return arr.filter((num) => num % 2 !== 0);
}

console.log(oddNumbers([1, 2, 3, 4, 5, 6]));

function evenNumbers(arr) {
  return arr.filter((num) => num % 2 === 0);
}

console.log(evenNumbers([1, 2, 3, 4, 5, 6]));

// Find Average

function average(arr) {
  let sum = arr.reduce((a, b) => a + b, 0);
  return sum / arr.length;
}

console.log(average([10, 20, 30, 40]));

// Merge Two Arrays

function mergeArray(arr1, arr2) {
  return arr1.concat(arr2);
}

let result = mergeArray([10, 20, 30], [40, 50, 60]);

console.log(result);

// Count Array Elements

function countElements(arr) {
  return arr.length;
}

console.log(countElements([10, 20, 30, 40]));

// Find Maximum

function findMax(arr) {
  return Math.max(...arr);
}

console.log(findMax([10, 20, 30, 40]));

// Find Minimum

function findMin(arr) {
  return Math.min(...arr);
}

console.log(findMin([10, 20, 30, 40]));

// Sort Ascending

function sortAscending(arr) {
  return arr.sort((a, b) => a - b);
}

console.log(sortAscending([9, 3, 6, 1, 8]));

// Sort Descending

function sortDescending(arr) {
  return arr.sort((a, b) => b - a);
}

console.log(sortDescending([9, 3, 6, 1, 8]));
