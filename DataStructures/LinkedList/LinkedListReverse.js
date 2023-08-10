// head->next->next->null
// 正常的 LinkedList 是 addLast 的，在list最后添加的
// 反转链表，只需要一边遍历链表，一边 addFirst，在list前添加
// **addLast
// this.tail.next = node;
// this.tail = node;
// **addFirst
// node.next = head;
// this.head = node;

const LinkedListReverse = function (head) {
  let newHead = null;
  let next = null;
  while (head) {
    //暂存next
    next = head.next;

    // add first
    let newNode = head; // 当前需要add的node
    newNode.next = newHead;
    //移动newHead
    newHead = newNode;

    //移动head
    head = next;
  }
  return newHead;
};

// 判断是否有环
// 一个跑的快，一个跑的慢，能碰面说明有环
const checkCycle = function (head) {
  let slow = head;
  let fast = head.next;
  while (slow && fast) {
    if (slow === fast) return true;
    slow = slow.next;
    fast = fast.next.next;
  }
  return false;
};

// 寻找中间数
// 一个跑的快，一个跑的慢，快的结束了，慢的就在中间

const findMiddle = function (head) {
  let slow = head;
  let fast = head.next;
  while (slow && fast) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow;
};
