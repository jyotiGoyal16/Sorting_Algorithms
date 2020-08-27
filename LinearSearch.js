/* 
    Linear Search is a searching algorithm that we can use to search an element in array.
    We search an element by traversing the array and checking each element with the current index element.
    We return the index of the element, if found.

    Time complexity = O(n)
*/

function linearSearch(numArray, element){
    for(let index = 0; index < numArray.length; index++){
        if(numArray[index] === element){
            return index;
        }
    }
}

//search using javascript array method findIndex - It returns index of the found element otherwise it will return -1.
function search(numArray, element){
    return numArray.findIndex(data => data === element);
}

function callLinearSearch(){
    const arr = [8, 2, 9, 1, 4, 6];
    const foundIndex = linearSearch(arr, 4);
    console.log("Element was found at index: ", foundIndex);
    
    const searchedIndex = search(arr, 9);
    searchedIndex === -1 ? 
    console.log("Element not found") 
    :console.log("Element was found at index: ", searchedIndex);
}

callLinearSearch();