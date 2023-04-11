/**
 *
 * @param {ListNode} head
 * @returns {ListNode}
 */
function returnStartOfCycle(head) {
  let set = new Set();
  let curr = head;
  while (curr) {
    if (set.has(curr)) return curr;
    set.add(curr);
    curr = curr.next;
  }
  return null;
}
