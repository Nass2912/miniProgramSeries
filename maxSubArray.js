//method called maxSubarraySum which accepts an array of integers and a number called n and the function returns the maximum sum of n consecutive elements in the array.

const maxSubarraySum = (arr, num) => {
    let maxSum = 0;
    for(let i = 0 ; i < num ; i++){
        maxSum += arr[i]
    }
    let tempSum = maxSum
    for(let j = num; j < arr.length ; j++){
        tempSum = tempSum + arr[j] - arr[j-num]
        maxSum = Math.max(maxSum, tempSum)
    }
    return maxSum;
}
maxSubarraySum([1,2,3,4,2,3,1,2,3], 3)
