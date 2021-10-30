class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor(value) {
    this.root = new Node(value);
    this.count = 1;
  }

  size() {
    return this.count;
  }

  insert(value) {
    this.count++;

    let newNode = new Node(value);

    const searchTree = node => {
      if (value < node.value) {
        // Check the left node. Create new node if its empty. If not keep moving left
        if (!node.left) node.left = newNode;
        else searchTree(node.left);
      } else if (value > node.value) {
        // Check the right node. Create new node if its empty. If not keep moving right
        if (!node.right) node.right = newNode;
        else searchTree(node.right);
      }
    }
    // Initialize with the root node
    searchTree(this.root);
  }

  min() {
    let currentNode = this.root;

    // Keep going left till there is left node
    while (currentNode.left) {
      currentNode = currentNode.left;
    }
    return currentNode.value;
  }

  max() {
    let currentNode = this.root;

    // Keep going right till there is a right node
    while (currentNode.right) {
      currentNode = currentNode.right;
    }
    return currentNode.value;
  }

  contains(value) {
    let currentNode = this.root;

    while (currentNode) {
      if (value === currentNode.value) return true;
      if (value < currentNode.value) currentNode = currentNode.left;
      else currentNode = currentNode.right;
    }
    return false;
  }

  // Depth First search
  // Usually recursive solution

  // Inorder will return left - root - right. Values will return in a sorted list
  dfsInOrder() {
    let result = [];

    const traverse = node => {
      // If left node exists, traverse left again
      if (node.left) traverse(node.left);
      
      result.push(node);
      // If right node exists, traverse right again
      if (node.right) traverse(node.right);
    }
    traverse(this.root);
    return result;
  }

  // root node - left node - right node
  dfsPreOrder() {
    let result = [];

    const traverse = node => {
      result.push(node);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }
    traverse(this.root);
    return result;
  }

  // left - right - root
  dfsPostOrder() {
    let result = [];

    const traverse = node => {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      result.push(node);
    }
    traverse(this.root);
    return result;
  }

  // Breadth first search goes level by level
  bfs() {
    let result = [];
    let queue = [];

    queue.push(this.root);

    while (queue.length) {
      // Takes the first node from the queue and removes it
      let currentNode = queue.shift();

      result.push(currentNode.value);

      if (currentNode.left) queue.push(currentNode.left);
      if (currentNode.right) queue.push(currentNode.right);
    }
    return result;
  }
}

// You can intialize a BST
const bst = new BST(12); // With root node as 12

// Add more nodes
bst.insert(4);
bst.insert(5);
bst.insert(34);

// Run breadth first search on the bst
bst.bfs();