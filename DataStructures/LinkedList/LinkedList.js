/**
 * 链表：线性数据结构，每个节点包含数据和下一个节点指针
 */

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  get isEmpty() {
    return this.size == 0;
  }

  addLast(value) {
    const node = new Node(value);
    if (this.head == null) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.size += 1;
    return this.size;
  }

  addFirst(value) {
    const node = new Node(value);
    if (this.head == null) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = head;
      this.head = node;
    }
    this.size += 1;
    return this.size;
  }

  removeFirst() {
    if (this.isEmpty) {
      throw Error("LinkedList is empty");
    }
    const node = this.head;
    this.head = node.next;

    this.size -= 1;
    if (this.isEmpty) {
      this.head = null;
      this.tail = null;
    }
    return node.value;
  }

  removeLast() {
    if (this.isEmpty) {
      throw Error("LinkedList is empty");
    }
    let curNode = this.tail;

    if (this.size == 1) {
      this.size = 0;
    } else {
      while (curNode.next.next) {
        curNode = curNode.next;
      }
      curNode.next = null;
      this.tail = curNode;
      curNode = curNode.next;
      this.size -= 1;
    }

    if (this.isEmpty) {
      this.head = null;
      this.tail = null;
    }

    return curNode;
  }
}
