function isValid(s) {
  const stack = [];
  const map = {
      ')': '(',
      '}': '{',
      ']': '['
  };

  for (let char of s) {
      if (char in map) { // 遇到右括号
          if (stack.length === 0 || stack.pop() !== map[char]) {
              return false;
          }
      } else { // 遇到左括号
          stack.push(char);
      }
  }

  return stack.length === 0; // 栈是否为空
}

// 测试
console.log(isValid("({[]})")); // true
console.log(isValid("({[})"));  // false
console.log(isValid("(){}[]")); // true
console.log(isValid("(]"));     // false

/**
  时间复杂度 O(n)：遍历一次字符串，每个字符最多入栈出栈一次。
  空间复杂度 O(n)：最坏情况下全部左括号入栈。
 */
