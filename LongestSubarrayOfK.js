// https://www.codewars.com/kata/58feb7ac627d2fdadf000111

// Given an array of positive integers a and an integer k, find the first and last index of the longest subarray of a that consists only of k.

// If the array contains multiple subarrays of the same length, return indices of the last one.

// If k doesn't exist in a, return (-1, -1).

function findSubArrayWithSameElement(a, k) {
  let maxLength = 0;
  let currentLength = 0;
  let first = -1;
  let last = -1;
  let start = 0;

  for (let end = 0; end < a.length; end++) {
    if (a[end] === k) {
      currentLength++;
      if (currentLength >= maxLength) {
        maxLength = currentLength;
        first = start;
        last = end;
      }
    } else {
      currentLength = 0;
      start = end + 1;
    }
  }

  return [first, last];
}
