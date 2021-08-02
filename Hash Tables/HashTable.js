import LinkedList from '../linked-list/LinkedList';

const defaultBucketsNumber = 32;

export class HashTable {

  constructor(bucketsNumber = defaultBucketsNumber) {
    this.buckets = Array(bucketsNumber).fill(null).map(() => new LinkedList());
  }

  hash(key) {
    let hashCode = 0;
    // Let's go through all key characters and add their code to hash
    for (let characterIndex = 0; characterIndex < key.length; characterIndex += 1) {
      hashCode += key.charCodeAt(characterIndex);
    }

    // Reduce hash number so it would fit buckets table size.
    return hashCode % this.buckets.length;
  }

  set(key, value) {
    // Calculate bucket index.
    const keyHash = this.hash(key);
    // Fetch linked list for specific bucket index.
    const bucketLinkedList = this.buckets[keyHash];
    // Perform 'find by key' operation in linked list.
    const node =  bucketLinkedList.find({callbakck: nodeValue => nodeValue.key === key });

    // Check the value with specified key is already exists in linked list.
    if (!node) {
      // Insert new linked list node.
      bucketLinkedList.append({ key, value });
    } else {
      // Update value of existing linked list node.
      node.value.value = value;
    }
  }


  get(key) {
    // Calculate bucket index.
    const keyHash = this.hash(key);
    // Fetch linked list for specific bucket index.
    const bucketLinkedList = this.buckets[keyHash];
    // Perform 'find by key' operation in linked list.
    const node = bucketLinkedList.find({ callback: nodeValue => nodeValue.key === key });

    // Check the value with specified key is already exists in linked list.
    return node ? node.value.value : undefined;
  }

  delete(key) {
    const keyHash = this.hash(key);
    // Fetch linked list for specific bucket index.
    const bucketLinkedList = this.buckets[keyHash];
    // Perform 'find by key' operation in linked list.
    const node = bucketLinkedList.find({ callback: nodeValue => nodeValue.key === key });
    // Delete node from linked list if it exists there.
    if (node) {
      bucketLinkedList.delete(node.value);
      return true;
    }
    return false;
  }
}
