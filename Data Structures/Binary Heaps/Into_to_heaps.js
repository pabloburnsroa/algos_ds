/*
What is a binary heap?
Similar to binary search tree
MaxBinaryHeap: parent nodes are always larger than child nodes
MinBinaryHeap: parent nodes are always smaller than child nodes

NO implied ordering between siblings

STORING A HEAP

100 19 36 17 12 25 5 9 15 6 11 13 8 1 4
0   1  2  3  4  5  
    L  R
          L  R
the left child is stored at 2n+1
the right child is stored at 2n+2
*/

/* Heap: Insert
Push value into heap
Bubble up: 
  create idx = length of the values property - 1
  create parentIdx = floor of (idx-1)/2
  loop as long as values el at parentIdx < values el at childIdx
    Swap the value of el at the parentIdx w the val of the el property at the child idx
    Set the index to be the parentIdx
*/

class MaxBinaryHeap {
  constructor() {
    this.values = [41, 39, 33, 18, 27, 12];
  }

  insert(value) {
    this.values.push(value);
    this.bubbleUp();
  }
  bubbleUp() {
    let idx = this.values.length - 1;
    const element = this.values[idx];
    while (idx > 0) {
      // Work out index of parent element
      let parentIdx = Math.floor((idx - 1) / 2);
      let parent = this.values[parentIdx];
      if (element <= parent) break;
      // swap values if child element > parent element
      this.values[parentIdx] = element;
      this.values[idx] = parent;
      idx = parentIdx;
    }
  }
  // Extract Max Value
  // Remove the root, replace w/ the most recently added, adjust (sink down)
  extractMax() {
    let removed = this.values[0];
    let end = this.values.pop();

    if (this.values.length > 0) {
      // Assign the root to the value of the node popped off
      this.values[0] = end;
      this.sinkDown();
      return removed;
    }
  }

  // [33,39,4118,27,12]
  sinkDown() {
    let idx = 0;
    const length = this.values.length;
    // Assign element var the new root value 
    let element = this.values[0];
    while (true) {
      let leftChildIdx = 2 * idx + 1;
      let rightChildIdx = 2 * idx + 2;
      let leftChild, rightChild;
      let swap = null;

      // Check if child is out of bounds
      if(leftChildIdx < length) {
        // Assign leftChild var
        leftChild = this.values[leftChildIdx]
        // Compare if leftChild is larger than element var
        if(leftChild > element) {
          // Assign swap var to the leftChildIdx
          swap = leftChildIdx
        }

      }
    }
  }
}

let heap = new MaxBinaryHeap();
