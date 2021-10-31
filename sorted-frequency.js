function sortedFrequency(arr, num) {
    if (arr.slice(-1)[0] < num) return -1;
    let mid = Math.floor((arr.length - 1) / 2);
    let left = arr.slice(0, mid);
    let right = arr.slice(mid+1);
    let count = 0;

    let i = 0;
    let j = left.length - 1;

    while (i <= j) {
        if (i === j) {
            if (left[i] === num) {
                count++
                break;
            }
        }
        if (left[i] === num) count++;
        if (left[j] === num) count++
        i++;
        j--;
    }

    let x = 0;
    let y = right.length - 1;
    while (x <= y) {
        if (x === y) {
            if (right[x] === num) {
                count++
                break;
            }
        }
        if (right[x] === num) count++
        if (right[y] === num) count++
        x++;
        y--;
    }
    return arr[mid] === num ? count + 1 : count;
}
console.log(sortedFrequency([1,1,2,2,2,2,3],1))
module.exports = sortedFrequency