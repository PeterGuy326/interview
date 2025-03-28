function firstUniqChar(s) {
  const count = new Map();

  // 统计每个字符的出现次数
  for (let char of s) {
      count.set(char, (count.get(char) || 0) + 1);
  }

  // 遍历字符串，返回第一个出现次数为 1 的字符的索引
  for (let i = 0; i < s.length; i++) {
      if (count.get(s[i]) === 1) {
          return i;
      }
  }

  return -1; // 如果没有找到不重复的字符
}

// 示例
console.log(firstUniqChar("leetcode")); // 0
console.log(firstUniqChar("aabb"));     // -1
