function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

// @param {ListNode} list1
// @param {ListNode} list2
// @return {ListNode}

const mergeTwoSortedLists = (list1, list2) => {
  let temp_node = new ListNode(0);
  let current_node = temp_node;
  while (list1 && list2) {
    if (list1.val < list2.val) {
      current_node.next = list1;
      list1 = list1.next;
    } else {
      current_node.next = list2;
      list2 = list2.next;
    }
    current_node = current_node.next;
  }
  if (list1 != null) {
    current_node.next = list1;
    list1 = list1.next;
  }
  if (list2 != null) {
    current_node.next = list2;
    list2 = list2.next;
  }

  return temp_node.next;
};

// create first linked list: 1 -> 3 -> 10
let n3 = new ListNode(10, null);
let n2 = new ListNode(3, n3);
let n1 = new ListNode(1, n2);
let L1 = n1;

// create second linked list: 5 -> 6 -> 9
let n6 = new ListNode(9, null);
let n5 = new ListNode(6, n6);
let n4 = new ListNode(5, n5);
let L2 = n4;

console.log(mergeTwoSortedLists(L1, L2));
