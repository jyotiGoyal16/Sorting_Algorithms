//Selection sort- This is called selection sort since this repeatedly selects the smallest element
//Time complexity- O(n^2);

function selectionSort(arr){
    const len = arr.length;
    let swap;
    for(let i=0; i < len-1; i++){
        for(let j=i+1; j < len; j++){
            if(arr[j] < arr[i]){
                swap = arr[i];
                arr[i] = arr[j];
                arr[j] = swap;

                //One liner javascript code to swap two numbers
                // [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
            }
        }
    }

    return arr;
}

function callSelectionSort(){
    const arr = [8, 2, 9, 1, 4, 3, 7];
    let sortedArray = selectionSort(arr);
    console.log(sortedArray);
}

callSelectionSort();