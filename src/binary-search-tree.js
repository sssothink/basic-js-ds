const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/

class TreeNode {
  constructor(data) {
    this.data = data;
    this.right = null;
    this.left = null;
  } 
}


class BinarySearchTree {

  constructor() {
    this.root = null;
  }

  roota() {
    console.log(this.root.data)
    return this.root.data;
  }

  add(data) {
    if(!this.root) {
      this.root = new TreeNode(data)
    } else {
      let node = this.root;
      let newNode = new TreeNode(data)
      while (node) {
        if(data > node.data) {
          if (!node.right) {
            break
           }
          node = node.right;
        } else {
          if (!node.left) {
            break
          }
          node = node.left;
        }
      }
      if (data > node.data) {
        node.right = newNode;
      } else {
        node.left = newNode;
      };
    };
  }

  print(root = this.root) {
    if (!root) {
      return true;
    };
    console.log(root.data);
    this.print(root.left);
    this.print(root.right);
  }

  has(data) {
    if(node === null) {
      return null;
    } else if (data < node.data) {
      return this.has(node.left, data);
    } else if(data > node.data) {
      return this.has(node.right, data);
    } else {
      return node;
    }
  }

  find(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  remove(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  min() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  max() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
}

module.exports = {
  BinarySearchTree
};

const tree = new BinarySearchTree();

tree.add(3)
tree.add(5)
tree.add(1)
tree.add(8)
tree.add(10)

// tree.print()

tree.roota()

// console.log(tree.has())