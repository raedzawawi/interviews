// Leetcode 103 - Binary tree zigzag level order traversal
// Given the root of a binary tree, return the zigzag level order traversal of its nodes' values.
// (i.e., from left to right, then right to left for the next level and alternate between).
// Input: root = [3,9,20,null,null,15,7]
// Output: [[3],[20,9],[15,7]]

const zigzagTraversal = root => {
  if (root === null) return [];

  let result = [];
  let queue = [root]; // Initialize queue with root node
  let count = 0;

  while (queue.length > 0) {
    let queueLen = queue.length;
    if (count % 2 === 0) result.push(queue.map(node => node.value));
    else result.push(queue.map(node => node.value).reverse);
    count++;

    while (queueLen--) {
      let head = queue.shift();
      if (head.left) queue.push(head.left);
      if (head.right) queue.push(head.right);
    }
  }
  return result;
};