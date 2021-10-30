// Leetcode 104 - Maximum depth of a binary tree
const maxDepth = (root) => {
    if (root === null) return 0;
    
    let left = maxDepth(root.left);
    let right = maxDepth(root.right);

    return Math.max(left, right) + 1;
};