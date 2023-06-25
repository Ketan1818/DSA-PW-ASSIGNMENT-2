function findLHS(nums) {
    const frequencyMap = new Map();
    let longestSubsequence = 0;
  
    // Count the frequency of each number
    for (let num of nums) {
      if (frequencyMap.has(num)) {
        frequencyMap.set(num, frequencyMap.get(num) + 1);
      } else {
        frequencyMap.set(num, 1);
      }
    }
  
    // Check each number in the map
    for (let [num, frequency] of frequencyMap) {
      if (frequencyMap.has(num + 1)) {
        const currentLength = frequency + frequencyMap.get(num + 1);
        longestSubsequence = Math.max(longestSubsequence, currentLength);
      }
    }
  
    return longestSubsequence;
  }
  
  // Test the function
  const nums = [1, 3, 2, 2, 5, 2, 3, 7];
  const result = findLHS(nums);
  console.log(result);
  