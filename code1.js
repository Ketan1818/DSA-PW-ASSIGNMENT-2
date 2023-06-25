function arrayPairSum(nums) {
    // Sort the array in ascending order
    nums.sort((a, b) => a - b);
  
    let sum = 0;
    // Iterate over the array and add every second element to the sum
    for (let i = 0; i < nums.length; i += 2) {
      sum += nums[i];
    }
  
    return sum;
  }
  
  // Test the function
  const nums = [1, 4, 3, 2];
  const result = arrayPairSum(nums);
  console.log(result);
  