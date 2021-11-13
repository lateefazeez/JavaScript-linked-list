//  A very simple example will be as follows
// as an object, we can have


const nodeOne = {
  value: 10
};

const nodeTwo = {
  value: 20
};

nodeOne.next = nodeTwo;

console.log(nodeOne); // => { value: 10, next: { value: 20 } }

// Creating a class that represents the nodes where we can then instatiate to get each nodes;

class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

const firstNode = new Node(10);
console.log(firstNode);