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
