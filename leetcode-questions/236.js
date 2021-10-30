// Leetcode 236 - Lowest common ancestor of binary tree

// Find the lowest common ancestor. (In depth not value)
const lowestCommonAncestor = (root, p, q) => {
  let result = null;

  const dfs = node => {
    if (node === null) return false;

    let left = dfs(node.left);
    let right = dfs(node.right);

    let cur = node === p || node === q;

    if (left + right + cur >= 2) result = node;

    return left || right || cur;
  };
  dfs(root);
  return result;
};