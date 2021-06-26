//function to get character ASCII code
function codeAt(str){
  return str.charCodeAt(0);
}

//function to create array from a given length
function createArray(length){
  return Array.from({length}).fill(0);
}

//counting sort for character array.string
function countSort(arr, n){
  let output = createArray(n);
  let count = createArray(256);
  let i;

  //using hashing: traverse the input array and count the frequency of characters and store in count array.
  //storing the frequency of characters under their respective ASCII code.
  for(i=0; i<n; i++)
    count[codeAt(arr[i])]++;
  
  //Modify the count array such that each element at each index stores the sum of previous counts
  for(i=1; i< count.length; i++)
    count[i] += count[i-1];
  
  //store each element from the input array into the output array and decrease its count by 1 in the count array
  for(i=0; i<n; i++){
    const counter = count[codeAt(arr[i])];
    output[counter-1] = arr[i];
    count[codeAt(arr[i])]--;
  };

  //store the output in original array
  for(i=0; i<n; i++)
    arr[i] = output[i];
}

const arr = ['g', 'e', 'e', 'k', 's', 'f', 'o', 'r', 'g', 'e', 'e', 'k', 's'];
countSort(arr, arr.length);
console.log(arr);


//Below code will work for numbers(positive/negative) array
function countSort(arr, n){
  let max = Math.max(...arr);
  let min = Math.min(...arr);
  let range = max-min+1;
  
  let output = createArray(n);
  let count = createArray(range);
  let i;

  for(i=0; i<n; i++)
    count[arr[i]-min]++;

  for(i=1; i<range; i++)
    count[i] += count[i-1];

  for(i=0; i<n; i++){
    output[count[arr[i]-min] -1] = arr[i];
    count[arr[i]-min]--;
  }

  for(i=0;i<n;i++)
    arr[i] = output[i];
}

const arr = [-5, -10, 0, -3, 8, 5, -1, 10];
countSort(arr, arr.length);
console.log(arr);
