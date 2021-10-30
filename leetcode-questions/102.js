// Leetcode 102 - Binary Tree Level Order Traversal
// Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).
// Input: root = [3,9,20,null,null,15,7]
// Output: [[3],[9,20],[15,7]]

const levelOrder = (root) => {
  // If root is empty then return empty array
  if (root === null) return [];

  let result = [];
  let queue = [root]; // Initialize queue with root node

  while (queue.length > 0) {
    const level = [];
    let queueLen = queue.length;
    while (queueLen--) {
      let head = queue.shift();
      level.push(head.val);
      if (head.left) queue.push(head.left);
      if (head.right) queue.push(head.right);
    }
    result.push(level);
  }
  return result;
};

// Time complexity -> O(n) since we go through each node
// Space complexity -> O(n) stores n node values