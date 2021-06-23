/* 
    Merge Sort - it uses the concept of divide and conquer to sort a list of elements. 
    It will divide the bigger problem into smaller problems and then solve each of the 
    small problems in order to solve the bigger problem that we started out with.

    Time Complexity - O(nlogn)
*/

//METHOD 1

//using javascript array slice

function mergeSort(arr){
    if(arr.length <= 1){
        return arr;
    };
    const mid = Math.floor(arr.length / 2);
    const leftArr = arr.slice(0, mid);
    const rightArr = arr.slice(mid);
    return merge(mergeSort(leftArr), mergeSort(rightArr));
}

function merge(leftArr, rightArr){
    let i = 0, j = 0, res = [];
    while((i < leftArr.length) && (j < rightArr.length)){
        if(leftArr[i] <= rightArr[j]){
            res.push(leftArr[i++]);
        }
        else{
            res.push(rightArr[j++]);
        }
    };

    return res.concat(leftArr.slice(i)).concat(rightArr.slice(j));
};

function callMergeSort(){
    const arr = [6, 8, 1, 4, 5, 3, 7, 2, 9];
    const sortedArray = mergeSort(arr);
    console.log(sortedArray);
};

callMergeSort();


//METHOD 2

//classic mergesort in javascript
//wrapped whole code in IIFE to avoid global variables

(function(){
  let arr = [38, 27, 43, 3, 9, 82, 10]; 
  let b = new Array(arr.length);

  function merge(arr, l, m , r){
    let i = l,
        j = m +1,
        k = l;

    while(i<=m && j<=r){
      if(arr[i] <= arr[j])
        b[k++] = arr[i++];
      else
        b[k++] = arr[j++];
    }

    while(i<=m)
      b[k++] = arr[i++];

    while(j<=r)
      b[k++] = arr[j++];

    for(k=l; k<=r; k++)
      arr[k] = b[k];
  }

  function mergeSort(arr, l, r){
    if(l>=r)
      return;
    let m = l + Math.floor((r-l)/2);
    mergeSort(arr, l, m);
    mergeSort(arr, m+1, r);
    merge(arr, l, m, r);
  }

  mergeSort(arr, 0, arr.length-1);
  console.log(arr);
})();


//METHOD 3
//Without IIFE

function merge(arr, l, m, r){
  let n1 = m-l+1,
      n2 = r-m,
      L = new Array(n1),
      R = new Array(n2),
      i, j, k=l;
  
  for(i=0; i<n1; i++)
    L[i] = arr[l+i];
  
  for(j=0; j<n2; j++)
    R[j] = arr[m+j+1];
  
  i=0; 
  j=0;
  
  while(i<n1 && j<n2){
    if(L[i] <= R[j])
      arr[k++] = L[i++];
    else
      arr[k++] = R[j++];
  }
  
  while(i<n1)
    arr[k++] = L[i++];
  
  while(j<n2)
    arr[k++] = R[j++];
}

function mergeSort(arr, l, r){
  if(l>=r)
    return;
  let m = l + Math.floor((r-l)/2);
  mergeSort(arr, l, m);
  mergeSort(arr, m+1, r);
  merge(arr, l, m, r);
}

let arr = [38, 27, 43, 3, 9, 82, 10]; 
mergeSort(arr, 0, arr.length - 1);
console.log(arr);
