function firstUniqChar(s) {
    // Create a map to store character frequencies
    const freqMap = new Map();
    
    // Count the frequency of each character
    for (let i = 0; i < s.length; i++) {
      const char = s[i];
      freqMap.set(char, (freqMap.get(char) || 0) + 1);
    }
    
    // Find the first unique character and return its index
    for (let i = 0; i < s.length; i++) {
      const char = s[i];
      if (freqMap.get(char) === 1) {
        return i;
      }
    }
    
    // No unique character found
    return -1;
  }
  console.log(firstUniqChar("leetcode"));      // Output: 0
  console.log(firstUniqChar("loveleetcode"));  // Output: 2
  console.log(firstUniqChar("aabb"));          // Output: -1
  