/*
    Binary Search - This is the searching algorithm that uses the concept of divide and conquer to find an element in a sorted array.
    Time Complexity - O(n/2)
*/

function binarySearch(arr, element, startIndex, endIndex){
    if(endIndex < startIndex){
        return -1;
    }
    const mid = Math.floor((startIndex + endIndex) / 2);
    return arr[mid] === element
    ? mid
    : element < arr[mid]
    ? binarySearch(arr, element, startIndex, mid - 1)
    : binarySearch(arr, element, mid + 1, endIndex);
}

function callBinarySearch(){
    const arr = [1, 2, 5, 8, 9, 15];
    const startIndex = 0;
    const endIndex = arr.length - 1;
    const foundIndex = binarySearch(arr, 1, startIndex, endIndex);
    console.log("Element was found at index: ", foundIndex);
}

callBinarySearch();