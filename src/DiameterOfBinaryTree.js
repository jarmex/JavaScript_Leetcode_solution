/*
Given a binary tree, you need to compute the length of the diameter of the tree. 
The diameter of a binary tree is the length of the longest path between any two nodes in a tree. 
This path may or may not pass through the root.

Example:
Given a binary tree 

          1
         / \
        2   3
       / \     
      4   5    
Return 3, which is the length of the path [4,2,1,3] or [5,2,1,3].

Note: The length of path between two nodes is represented by the number of edges between them.
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

/**
 *
 * @param {TreeNode} root
 * @returns {number}
 */
const FindHeightOfTree = (root) => {
  if (!root) {
    return 0;
  }
  let leftSubTreeHeight = FindHeightOfTree(root.left);
  let rightSubTreeHeight = FindHeightOfTree(root.right);

  let totalHeight = 1 + Math.max(leftSubTreeHeight, rightSubTreeHeight);
  return totalHeight;
};
/**
 * @param {TreeNode} root
 * @return {number}
 */
var diameterOfBinaryTree = function (root) {
  if (!root) {
    return 0;
  }
  // Get the height of left and right sub trees
  let leftSubTreeHeight = FindHeightOfTree(root.left);
  let rightSubTreeHeight = FindHeightOfTree(root.right);

  // get the diameter of left and right subtrees
  let ldiameter = diameterOfBinaryTree(root.left);
  let rdiameter = diameterOfBinaryTree(root.right);

  // return max of following three
  // 1. diameter of left subtree
  // 2. diameter of right subtree
  // 3. height of left subtree + height of right subtree + 1

  return Math.max(
    leftSubTreeHeight + rightSubTreeHeight,
    Math.max(ldiameter, rdiameter),
  );
};

// Test

const createNewNode = (val) => {
  let newNode = new TreeNode(val);
  newNode.left = null;
  newNode.right = null;
  return newNode;
};
let root = createNewNode(1);
root.left = createNewNode(2);
root.right = createNewNode(3);
root.left.left = createNewNode(4);
root.left.right = createNewNode(5);

let height = FindHeightOfTree(root);
console.log(`Height of Tree is: ${height}`);

let diameter = diameterOfBinaryTree(root.left);
console.log(`Diameter of Tree is: ${diameter}`);
