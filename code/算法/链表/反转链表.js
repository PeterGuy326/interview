class ListNode {
  constructor(val, next = null) {
      this.val = val;
      this.next = next;
  }
}

function reverseList(head) {
  let prev = null;
  let current = head;

  while (current !== null) {
      let nextNode = current.next; // 暂存下一个节点
      current.next = prev; // 反转当前节点的指向
      prev = current; // prev 前进
      current = nextNode; // current 前进
  }

  return prev; // prev 成为了新头节点
}

// 示例
function printList(head) {
  let res = [];
  while (head) {
      res.push(head.val);
      head = head.next;
  }
  console.log(res.join(" -> ") + " -> NULL");
}

// 创建链表 1 -> 2 -> 3 -> 4 -> 5 -> NULL
let head = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))));

// 反转链表
let reversedHead = reverseList(head);

// 输出
printList(reversedHead); // 5 -> 4 -> 3 -> 2 -> 1 -> NULL
