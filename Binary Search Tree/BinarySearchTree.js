import BinarySearchTreeNode from './BinarySearchTreeNode';

export default class BinarySearchTree {
  constructor() {
    this.root = new BinarySearchTreeNode(null);
  }
  find(value) {
    return this.root.find(value);
  }
  findMin() {
    return this.root.findMin();
  }
  findMax() {
    return this.root.findMax();
  }
  insert(value, data = null) {
    return this.root.insert(value, data);
  }
  contains(value) {
    return this.root.contains(value);
  }
  remove(value) {
    return this.root.remove(value);
  }
  toString() {
    return this.root.toString();
  }
}
