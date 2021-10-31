function countZeroes(arr) {
  let low = 0;
  let high = arr.length - 1;

  while (true) {
      if (arr[high] === 1) return 0;
      if (arr[low] === 0 && low === 0) return arr.length;

      if (arr[low] === 0 && arr[high] === 0) {
          if (low === high) {
              return 1
          } else {
              return high - (low - 1)
          }
      }
      low++
  };
};

let arr = [1,1,1,1];
console.log(countZeroes(arr));

module.exports = countZeroes