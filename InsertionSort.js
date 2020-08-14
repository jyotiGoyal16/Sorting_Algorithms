//Insertion sort - remove an element from the input data and insert it into its right position in the list being sorted. Its is an in-place sorting.
//Time complexity - O(n^2)

function insertionSort(arr){
    let key, j;
    const len = arr.length;
    for(let i=1; i<len; i++){
        key = arr[i];
        j = i-1;
        while(j >= 0 && arr[j] > key){
            arr[j+1] = arr[j];
            j = j-1;
        }
        arr[j+1] = key;
    }
    return arr;
};

function callInsertionSort(){
    const arr = [6, 8, 1, 4, 5, 3, 7, 2];
    const sortedArray = insertionSort(arr);
    console.log(sortedArray);
};

callInsertionSort();