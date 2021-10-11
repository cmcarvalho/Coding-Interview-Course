// Naive
function hasPairWithSum(arr, sum) {
  let len = arr.length;
  for (let i = 0; i < len - 1; i++) {
    for (let j = i + 1; j < len; j++) {
      if (arr[i] + arr[j] === sum) return true;
    }
  }
  return false;
}

//Better
function hasPairWithSum2(arr, sum) {
  const mySet = new Set();
  const len01 = arr.length;
  for (let m = 0; m < len01; m++) {
    if (mySet.has(arr[m])) {
      return true;
    }
    mySet.add(sum - arr[m]);
    console.log(sum - arr[m]);
  }
  return false;
}

// 3, 5,

console.log(hasPairWithSum([6, 4, 3, 2, 1, 7], 9));
console.log(hasPairWithSum2([6, 4, 3, 2, 1, 7], 9));
