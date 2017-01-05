/**
 * Partitions an array (or portions of an array) around a pivot point.
 * Once the routine is complete, the value of `arr[pivot]` will be located
 * in its proper ordered position in between `start` and `end`. All values between
 * `start` and the pivot will be less than the pivot and all values between the pivot
 * and `end` will be greater than the pivot.
 * @param  {Array} arr   The array to partition
 * @param  {int} start The index of the start of the segement to partition (inclusive)
 * @param  {int} end   The index that ends the segment to partition (exclusive)
 * @param  {int} pivot The index of the pivot
 * @return {int}       The index where the pivot ended up after segmentation
 */
const partitionAroundPivot = function partitionAroundPivot(arr, start, end, pivot) {
  if (!pivot) {
    pivot = Math.floor(Math.random() * ((end - start))) + start;
  }
  // move pivot to first item
  const startValue = arr[start];
  const pivotValue = arr[pivot];
  arr[start] = arr[pivot];
  arr[pivot] = startValue;
  let i = start + 1;
  for (let j = start + 1; j < end; j++) {
    if (arr[j] < pivotValue) {
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
      i++;
    }
  }
  arr[start] = arr[i - 1];
  arr[i - 1] = pivotValue;
  return i - 1;
};

const rselect = function rselect(arr, ith) {
  if (!Array.isArray(arr)) {
    throw new Error('First argument must be an Array');
  }
  if (Math.floor(ith) !== ith) {
    throw new Error('ith must be an integer');
  }
  if (ith < 1) {
    throw new Error('ith must be at least 1');
  }
  if (ith > arr.length) {
    throw new Error('ith must not be out of bounds of the array');
  }
  if (arr.length === 1) {
    return arr[0];
  }
  let pivotIndex = partitionAroundPivot(arr, 0, arr.length);
  while (pivotIndex + 1 !== ith) {
    if (ith < pivotIndex + 1) {
      pivotIndex = partitionAroundPivot(arr, 0, pivotIndex);
    } else if (ith > pivotIndex + 1) {
      pivotIndex = partitionAroundPivot(arr, pivotIndex + 1, arr.length);
    }
  }
  return arr[pivotIndex];
};

module.exports = rselect;
