/* 
    Merge Sort - it uses the concept of divide and conquer to sort a list of elements. 
    It will divide the bigger problem into smaller problems and then solve each of the 
    small problems in order to solve the bigger problem that we started out with.

    Time Complexity - O(nlogn)
*/

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
