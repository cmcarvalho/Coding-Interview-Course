"use strict";

const arr = [
  "dory",
  "bruce",
  "marlin",
  "nemo",
  "gill",
  "bloat",
  "nigel",
  "squirt",
  "darla",
  "hank",
];

const findNemo2 = (arr) => {
  arr.forEach((fish) => {
    if (fish === "nemo") {
      console.log("Found Nemo!");
    }
  });
};

const findNemo3 = (arr) => {
  for (let fish of arr) {
    if (fish === "nemo") {
      console.log("Found Nemo!");
    }
  }
};

findNemo2(arr);
findNemo3(arr);
