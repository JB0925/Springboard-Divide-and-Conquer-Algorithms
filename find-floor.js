function findFloor(arr, k) {
  let low = 0;
  let high = arr.length - 1;
  
  while (low <= high) {
      let mid = Math.floor((low + high) / 2);
      if (mid === 0) {
          if (arr[mid] <= k) {
              return arr[mid]
          } else {
              return -1;
          };
      };
      if (mid === arr.length - 1) {
          return arr[mid] <= k ? arr[mid] : -1;
      }
      if (arr[mid] <= k && arr[mid+1] > k) {
          return arr[mid]
      } else if (arr[mid] > k) {
          high = mid - 1;
      } else {
          low = mid + 1;
      }
  }
  return -1;
}

module.exports = findFloor