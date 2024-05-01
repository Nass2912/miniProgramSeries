
//method called countUniqueValues which accepts a sorted array, and counts the unique values in the array. There can be negative values in the array, but they will be sorted
const countUniqueValues = (arr) => {
    let first = 0;
    let last = arr.length
    let sum = 0;
    while(first < last){
        const same = arr[first] === arr[first + 1]
        if(!same){
            sum += 1
        }
        first ++
    }
    return sum ;
}
console.log(countUniqueValues([1,2,3,4,4]))

// or this works too
const countUniqueValues = (arr) => {
    let i = 0;
    for(let j = 1 ; j < arr.length ; j ++){
        if(arr[i] != arr[j]){
            i++
        }
    }
    return i + 1
}
console.log(countUniqueValues([1,2,3,4,4]))
