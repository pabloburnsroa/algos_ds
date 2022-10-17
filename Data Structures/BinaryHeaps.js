class MaxBinaryHeap {
  constructor() {
    this.values = [41, 39, 33, 18, 27, 12];
  }

  // Insert
  insert(value) {
    let values = this.values;
    values.push(value);
    let childIdx = values.length - 1;
    let child = values[childIdx];
    while (childIdx > 0) {
      let parentIndex = Math.floor((childIdx - 1) / 2);
      let parent = values[parentIndex];
      if (child <= parent) break;
      [values[childIdx], values[parentIndex]] = [
        values[parentIndex],
        values[childIdx],
      ];
      childIdx = parentIndex;
      parentIndex = Math.floor((childIdx - 1) / 2);
    }
  }

  extractMax() {
    let removed = this.values[0];
    let end = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = end;
      this.sinkDown();
    }
    return removed;
  }

  sinkDown() {
    let idx = 0;
    let element = this.values[0];

    while (true) {
      let leftChildIdx = 2 * idx + 1;
      let rightChildIdx = 2 * idx + 2;
      let leftChild, rightChild;
      // Check child index's are not out of bounds????
      let swap = null;
      if (leftChildIdx < this.values.length) {
        leftChild = this.values[leftChildIdx];
        if (leftChild > element) {
          swap = leftChildIdx;
        }
      }

      if (rightChildIdx < this.values.length) {
        rightChild = this.values[rightChildIdx];
        if (
          (swap === null && rightChild > element) ||
          (swap !== null && rightChild > leftChild)
        ) {
          swap = rightChildIdx;
        }
      }

      if (swap === null) break;
      this.values[idx] = this.values[swap];
      this.values[swap] = element;
      idx = swap;
    }
  }

  print() {
    console.log(this.values);
  }
}

let maxBinaryHeap = new MaxBinaryHeap();
maxBinaryHeap.extractMax();
// maxBinaryHeap.extractMax();

maxBinaryHeap.print();
