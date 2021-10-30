// Leetcode 98 - Validate Binary Search Tree
const isValidBST = (root) => {
  return validate(root, -Infinity, Infinity);
};

const validate = (root, min, max) => {
  if (root.val === null) return true;
  if (root.val <= minValue || root.val >= maxValue) return false;
  return validate(root.left,min,root.val) && validate(root.right, root.val, max);
};