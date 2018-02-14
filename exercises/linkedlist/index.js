// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  // MY SOLUTION -----------------------------
  // insertFirst(record) {
  //   if (this.head !== null) {
  //     let next = this.head;
  //     this.head = new Node(record, next);
  //   } else {
  //     this.head = new Node(record);
  //   }
  // }
  insertFirst(data) {
    // this.head = new Node(data, this.head);
    this.insertAt(data, 0);
  }

  // MY SOLUTION -----------------------------
  // size() {
  //   if (!this.head) {
  //     return 0;
  //   }
  //   let count = 1;
  //   let current = this.head;
  //   while (current.next) {
  //     count++;
  //     current = current.next;
  //   }
  //   return count;
  // }
  size() {
    let counter = 0;
    let node = this.head;
    while (node) {
      counter++;
      node = node.next;
    }
    return counter;
  }

  getFirst() {
    // return this.head;
    return this.getAt(0);
  }

  // MY SOLUTION -----------------------------
  // getLast() {
  //   let node = this.head;
  //   while (node.next) {
  //     node = node.next;
  //   }
  //   return node;
  // }
  getLast() {
    // if (!this.head) {
    //   return null;
    // }
    // let node = this.head;
    // while (node) {
    //   if (!node.next) {
    //     return node;
    //   }
    //   node = node.next;
    // }
    return this.getAt(this.size() - 1);
  }

  clear() {
    this.head = null;
  }

  // MY SOLUTION -----------------------------
  // removeFirst() {
  //   this.head = this.head.next;
  // }
  removeFirst() {
    if (!this.head) {
      return;
    }
    this.head = this.head.next;
  }

  // MY SOLUTION -----------------------------
  // removeLast() {
  //   if (!this.head) {
  //     return;
  //   }
  //   if (!this.head.next) {
  //     this.head = null;
  //     return;
  //   }
  //   let node = this.head.next;
  //   let previous = this.head;
  //   while (node.next) {
  //     previous = node;
  //     node = node.next;
  //   }
  //   previous.next = null;
  // }
  removeLast() {
    if (!this.head) {
      return;
    }
    if (!this.head.next) {
      this.head = null;
      return;
    }
    let previous = this.head;
    let node = this.head.next;
    while (node.next) {
      previous = node;
      node = node.next
    }
    previous.next = null;
  }

  // MY SOLUTION  -----------------------------
  // insertLast(data) {
  //   if (!this.head) {
  //     this.head = new Node(data);
  //   }
  //   let node = this.head;
  //   while (node.next) {
  //     node = node.next;
  //   }
  //   node.next = new Node(data);
  // }
  insertLast(data) {
    const last = this.getLast();
    if (last) {
      last.next = new Node(data);
    } else {
      this.head = new Node(data);
    }
  }

  // MY SOLUTION -----------------------------
  // getAt(index) {
  //   let counter = 0;
  //   let current = this.head;
  //   while (counter < index && current) {
  //     counter ++;
  //     current = current.next;
  //   }
  //   return current;
  // }
  getAt(index) {
    let counter = 0;
    let node = this.head;
    while (node) {
      if (counter === index) {
        return node;
      }
      counter ++;
      node = node.next;
    }
    return null;
  }

  // MY SOLUTION --------------------------------------------
  // removeAt(index) {
  //   if (!this.head) {
  //     return;
  //   }
  //   if (index === 0) {
  //     this.head = this.head.next
  //     return;
  //   }
  //   let counter = 0;
  //   let previous;
  //   let current = this.head;
  //   while (counter < index && current) {
  //     counter ++;
  //     previous = current;
  //     current = current.next;
  //   }
  //   if (counter < index || !current) {
  //     return null;
  //   }
  //   previous.next = current.next;
  // }
  removeAt(index) {
    if (!this.head) {
      return;
    }

    if (index === 0) {
      this.head = this.head.next;
      return;
    }

    const previous = this.getAt(index - 1);
    if (!previous || !previous.next) {
      return;
    }
    previous.next = previous.next.next;
  }

  // MY SOLUTION ----------------------------------
  // insertAt(data, index) {
  //   if (!this.head) {
  //     this.head = new Node(data)
  //     return;
  //   }
  //   if (index === 0) {
  //     this.head = new Node(data, this.head)
  //     return;
  //   }
  //   let counter = 1;
  //   let current = this.head.next;
  //   let previous = this.head;
  //   while (counter < index && current) {
  //     counter++;
  //     previous = current;
  //     current = current.next;
  //   }
  //   if (counter < index || !current) {
  //     previous.next = new Node(data, null);
  //   } else {
  //     previous.next = new Node(data, current);
  //   }
  // }
  insertAt(data, index) {
    if (!this.head) {
      this.head = new Node(data);
      return;
    }
    if (index === 0) {
      this.head = new Node(data, this.head);
      return;
    }
    const previous = this.getAt(index - 1) || this.getLast();
    const node = new Node(data, previous.next);
    previous.next = node;
  }

  // MY SOLUTION ----------------------------
  // forEach(fn) {
  //   let current = this.head;
  //   while (current) {
  //     fn(current);
  //     current = current.next;
  //   }
  // }
  forEach(fn) {
    let node = this.head;
    let counter = 0;
    while (node) {
      fn(node, counter);
      node = node.next;
      counter++;
    }
  }

  *[Symbol.iterator]() {
    let node = this.head;
    while (node) {
      yield node;
      node = node.next;
    }
  }

}

module.exports = { Node, LinkedList };
