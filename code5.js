function maximumProduct(nums) {
    // Sort the array in ascending order
    nums.sort((a, b) => a - b);
  
    const n = nums.length;
    // Return the maximum of two possible products:
    // 1. The product of the three largest numbers
    // 2. The product of the two smallest numbers and the largest number
    return Math.max(
      nums[n - 1] * nums[n - 2] * nums[n - 3],
      nums[0] * nums[1] * nums[n - 1]
    );
  }
  
  // Test the function
  const nums = [1, 2, 3];
  const result = maximumProduct(nums);
  console.log(result);
  