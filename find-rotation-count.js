function findRotationCount(arr, low = 0, high = arr.length - 1) {
  let mid = Math.floor((low + high) / 2);
  let count = 0;
  if (arr[low] < arr[high]) return 0;
  
  const left = arr.slice(0,mid);
  const right = arr.slice(mid+1);

  if (arr[mid] < left.slice(-1)[0]) return left.length;
  if (arr[mid] > right[0]) return left.length + 1;
  
  let i = 0;
  let j = right.length - 1;
  while (i < j) {
    if (right[i] > right[j]) {
        count++
    } else {
        return left.length + count
    }
    i++;
    j--;
  }
  count++
  return left.length + count;
}
console.log(findRotationCount([7,9,11,12,15]))
module.exports = findRotationCount