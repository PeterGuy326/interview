function maxDepth(root) {
  if (root === null) {
      return 0;
  }
  // 递归计算左右子树的最大深度
  const leftDepth = maxDepth(root.left);
  const rightDepth = maxDepth(root.right);
  // 当前节点的最大深度是左右子树深度的最大值 + 1
  return Math.max(leftDepth, rightDepth) + 1;
}

// 示例二叉树结构
const root = {
  val: 3,
  left: {
      val: 9,
      left: null,
      right: null
  },
  right: {
      val: 20,
      left: {
          val: 15,
          left: null,
          right: null
      },
      right: {
          val: 7,
          left: null,
          right: null
      }
  }
};

console.log(maxDepth(root)); // 输出 3
