function minimumScore(nums, k) {
    const n = nums.length;
    nums.sort((a, b) => a - b);
  
    let minScore = nums[n - 1] - nums[0];
  
    for (let i = 1; i < n; i++) {
      const maxVal = Math.max(nums[i - 1] + k, nums[n - 1] - k);
      const minVal = Math.min(nums[0] + k, nums[i] - k);
      minScore = Math.min(minScore, maxVal - minVal);
    }
  
    return minScore;
  }
  
  // Test the function
  const nums = [1];
  const k = 0;
  const result = minimumScore(nums, k);
  console.log(result);
  