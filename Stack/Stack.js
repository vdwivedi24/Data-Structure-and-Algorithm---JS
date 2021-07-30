import LinkedList from '../linked-list/LinkedList';

export class Stack {
  constructor() {
    // We're going to implement Queue based on LinkedList since this
    // structures a quite similar. Compare push/pop operations of the Stack
    // with prepend/deleteHead operations of LinkedList.
    this.linkedList = new LinkedList();
  }


  isEmpty() {
    // The queue is empty in case if its linked list don't have head.
    return !this.linkedList.head;
  }


  peek() {
    if (this.isEmpty()) {
      // If linked list is empty then there is nothing to peek from.
      return null;
    }

    // Just read the value from the head of linked list without deleting it.
    return this.linkedList.head.value;
  }


  push(value) {
    // Pushing means to lay the value on top of the stack. Therefore let's just add
    // new value at the head of the linked list.
    this.linkedList.prepend(value);
  }


  pop() {
    // Let's try to delete the first node from linked list (the head).
    // If there is no head in linked list (it is empty) just return null.
    const removedHead = this.linkedList.deleteHead();
    return removedHead ? removedHead.value : null;
  }

  
  toArray() {
    return this.linkedList
      .toArray()
      .map(linkedListNode => linkedListNode.value);
  }

  
  toString(callback) {
    return this.linkedList.toString(callback);
  }
}
