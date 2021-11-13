
// Creating a class that represents the nodes where we can then instatiate to get each nodes;

class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

// Creating a linked-list class

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  // Insert the first node
  addFirst(value) {
    this.head = new Node(value, this.head);
    this.size++;
  }

  addLast(value) {
    // We will create a new node
    let node = new Node(value);
    let currentNode;

    // Edge Case => if the list is empty
    if (!this.head) {
      // the new node becomes the head
      this.head = node;
    }
    // also becomes the current node
    currentNode = this.head;

    // if the current node is not the last, the next node becomes the current
    while (currentNode.next) {
      currentNode = currentNode.next;
    }
    currentNode.next = node;
    this.size++;
  }

  insertAt(value, index) {
    // if index is out of range => i.e bigger than the size of the list
    if (index > 0 && index > this.size) return;

    // if first index
    if (index === 0) {
      // we can reuse our intial addFirst method
      this.addFirst(value);
      return;
    }

    const node = new Node(value);
    let currentNode, prevNode;

    // Set current to first
    currentNode = this.head;
    let count = 0;

    while (count < index) {
      prevNode = currentNode; // the node before index
      count++;
      currentNode = currentNode.next; //node after the index
    }

    node.next = currentNode;
    prevNode.next = node;
    this.size++;
  }


  printListData() {
    let currentNode = this.head;

    while (currentNode) {
      console.log(currentNode.value);
      currentNode = currentNode.next;
    }
  }

}

// instantiating a linked list
const linkedList = new LinkedList();

linkedList.addFirst(30);
linkedList.addFirst(20);
linkedList.addFirst(10);

linkedList.addLast(40);

linkedList.insertAt(50, 3);
linkedList.insertAt(70, 0);

linkedList.printListData();

