console.log("Hello World!");

const array1 = ["a", "b", "c", "x"];
const array2 = ["z", "y", "i"];

const array3 = ["a", "b", "c", "x"];
const array4 = ["z", "y", "x"];

function commonItems(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        console.log("true");
        return;
      }
    }
  }
  console.log("false");
}

// O(n^2) solution

commonItems(array1, array2);
commonItems(array3, array4);

// array1 ==> obj {
// a: true,
// b: true,
// c: true,
// x: true
// }

function containsCommonItem2(arr1, arr2) {
  // loop through first array and create object
  // where properties === items in the array
  // loop through second array and check if item
  // in second array exists on created object.
}
