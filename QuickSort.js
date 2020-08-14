/* 
    Quick Sort - Quick Sort algorithm follows Divide and Conquer approach. 
    It divides elements into smaller parts based on some condition and performing 
    the sort operations on those divided smaller parts.

    Time Complexity- O(nlogn)
*/

function partition(arr, low, high){
    let pivot = arr[Math.floor((low+high)/2)];
    let leftIndex = low;
    let rightIndex = high;
    let temp;

    while(leftIndex <= rightIndex){
        while(arr[leftIndex] < pivot){
            leftIndex++;
        }
        while(arr[rightIndex] > pivot){
            rightIndex--;
        }
        if(leftIndex <= rightIndex){
            //swap numbers
            temp = arr[leftIndex];
            arr[leftIndex]=arr[rightIndex];
            arr[rightIndex]=temp;

            //increment index after swapping
            leftIndex++;
            rightIndex--;
        }
    }
    return leftIndex;
}

function quickSort(arr, low, high){
    if(arr.length > 1){
        const pivot = partition(arr, low, high);
        if (low < pivot - 1) {
            quickSort(arr, low, pivot-1);
        }
        if (pivot < high) {
            quickSort(arr, pivot, high);
        }
    }
    return arr;
}

function callQuickSort(){
    const arr = [6, 8, 1, 4, 5, 3, 7, 2, 9];
    const high = arr.length - 1;
    const sortedArray = quickSort(arr, 0, high);
    console.log(sortedArray);
}

callQuickSort();