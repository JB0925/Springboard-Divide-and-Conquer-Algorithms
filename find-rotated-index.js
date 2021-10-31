const binarySearch = (arr, k) => {
    let low = 0;
    let high = arr.length - 1;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        if (arr[mid] === k) return mid;
        else if (arr[mid] > k) {
            high = mid - 1;
        } else {
            low = mid + 1
        }
    }
    return -1;
};


function findRotatedIndex(arr, num, low = 0, high = arr.length - 1) {
    let mid = Math.floor((low + high) / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);
    
    if (arr[mid] === num) return mid;

    const sortedHalf = left[0] < arr[mid] ? left : right;
    const otherHalf = sortedHalf === left ? right: left;
    
    if (num > sortedHalf.slice(-1)[0] || num < sortedHalf[0]) {
        const result = binarySearch(otherHalf.slice(1), num);
        return result === -1 ? result : result + 1 + sortedHalf.length;
    }
    return binarySearch(sortedHalf, num)
}
console.log(findRotatedIndex([37,44,66,102,10,22],14))
module.exports = findRotatedIndex