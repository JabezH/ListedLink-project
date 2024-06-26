class LinkedListNode {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    // Your code here
    this.head = null
    this.length = 0
  }

  addToHead(val) {
    // Your code here 
    let newNode = new LinkedListNode(val)
    this.length++
    if(this.head === null) { // this is empty because the head is null
      this.head = newNode
      return this
    }
      newNode.next = this.head
      this.head = newNode

  }

  addToTail(val) {
    // Your code here 
    let newNode = new LinkedListNode(val)
    this.length++
    if(this.head === null) { // this is empty because the head is null
      this.head = newNode
      return this
    }

    let current = this.head
    while(current.next){
      current = current.next
    }
    current.next = newNode
  }

  // You can use this function to help debug
  print() {
    let current = this.head;

    while (current) {
      process.stdout.write(`${current.value} -> `);
      current = current.next;
    }

    console.log("NULL");
  }
}

module.exports = LinkedList;
