export class BinaryTreeNode {
    
    constructor(value = null) {
      this.left = null;
      this.right = null;
      this.value = value;
    }
  

    setLeft(node) {
      this.left = node;
      return this;
    }

    setRight(node) {
      this.right = node;
      return this;
    }
  }
  