function isMonotonic(nums) {
    let increasing = true;
    let decreasing = true;
  
    for (let i = 1; i < nums.length; i++) {
      if (nums[i] > nums[i - 1]) {
        decreasing = false;
      } else if (nums[i] < nums[i - 1]) {
        increasing = false;
      }
    }
  
    return increasing || decreasing;
  }
  
  // Test the function
  const nums = [1, 2, 2, 3];
  const result = isMonotonic(nums);
  console.log(result);
  