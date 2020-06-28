/* Bubble Sort - The idea behind bubble sort is that every pair of adjacent values is compared, 
and then the two values swap positions if the first value is greater than the second. 
This way during each pass through the array, the largest value “bubbles up” to the top, 
and after each pass the elements furthest to the right are in the correct order. */

//Time Complexity - O(n^2)

function bubbleSort(arr){
    const len = arr.length;
    let swap;
    for(let i=0; i < len; i++){
        for(let j=0; j < len; j++){
            if(arr[j] > arr[j+1]){
                swap = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = swap;
            }
        }
    }

    return arr;
}

function callBubbleSort(){
    const arr = [6, 8, 1, 4, 5, 3, 7, 2];
    const sortedArray = bubbleSort(arr);
    for(let index in sortedArray){
        console.log(sortedArray[index]);
    }
}

callBubbleSort();