function createArray(length) {
  return Array.from({ length }).fill(0);
}

function countSort(arr, n, exp) {
  let output = createArray(n);
  let count = createArray(10);
  let i;

  for (i = 0; i < n; i++) {
    const num = Math.floor(arr[i] / exp) % 10;
    count[num]++;
  }

  for (i = 1; i < count.length; i++) 
    count[i] += count[i - 1];

  for (i = n - 1; i >= 0; i--) {
    const num = Math.floor(arr[i] / exp) % 10;
    output[count[num] - 1] = arr[i];
    count[num]--;
  }

  for (i = 0; i < n; i++) 
    arr[i] = output[i];
}

//radix sort uses counting sort as its subroutine
function radixSort(arr, n) {
  let max = Math.max(...arr);
  for (let exp = 1; (max / exp) > 0; exp *= 10) {
    countSort(arr, n, exp);
  }
}

let arr = [170, 45, 75, 90, 802, 24, 2, 66];
radixSort(arr, arr.length);
console.log(arr);
