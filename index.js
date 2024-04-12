//? **`` This returns an array containing "n" amount of numbers in the fibonacci sequence.
function fibsIteration(n) {
  if (n === 1) return [0];

  let array = [0, 1];

  let a = 0;
  let b = 1;
  let c;

  for (let i = 2; i < n; i++) {
    c = a + b;
    a = b;
    b = c;
    array.push(c);
  }
  return array;
}
console.log("Iteration");
console.log(fibsIteration(5));

//? **`` Full disclosure, I worked on this problem for about 3 hours and couldn't come up with a solution. I needed to move forward so I pulled the assistance card and asked Chat GPT for this answer.
function fibRecursion(n) {
  if (n === 1) return [0];
  if (n === 2) return [0, 1];

  const array = fibRecursion(n - 1);
  array.push(array[array.length - 1] + array[array.length - 2]);
  return array;
}

console.log("Recursion");
console.log(fibRecursion(5));

//? **`` Just for fun I asked Chat GPT to rewrite this code as short as possible :)
const fibRecShort = (n) =>
  n === 1
    ? [0]
    : n === 2
    ? [0, 1]
    : [
        ...fibRecShort(n - 1),
        fibRecShort(n - 1)[n - 2] + fibRecShort(n - 1)[n - 3],
      ];

console.log("fibRecShort");
console.log(fibRecShort(5));

//? **`` Merge Sort ``**
function mergeSort(array) {
  //? Base Case = When you've gotten down to just one value, return that one value in an array.
  if (array.length === 1) return array;

  //? Divides the array length in half, rounds down if an odd number, returns an integer.
  const halfCount = Math.floor(array.length / 2);

  //? Cuts the array in half and assigns the first half to this variable.
  const firstHalf = array.splice(0, halfCount);

  //? Assigns the other half to this variable.
  const secondHalf = array;

  //? Call the recursive function on the first half of arrays
  const loopFirst = mergeSort(firstHalf);

  //? Call the recursive function on the second half of arrays
  const loopSecond = mergeSort(secondHalf);

  //? Merge the arrays together
  const join = loopFirst.concat(loopSecond);

  //? Sort the arrays
  const sorted = join.sort((a, b) => {
    return a - b;
  });

  return sorted;
}

console.log("mergeSort");
console.log("prob1");
console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1]));
console.log("prob2");
console.log(mergeSort([105, 79, 100, 110, 23]));

//? **`` Merge Sort but as short as I could get the code ``**
function mergeShortSort(array) {
  return array.length === 1
    ? array
    : mergeShortSort(array.splice(0, Math.floor(array.length / 2)))
        .concat(mergeShortSort(array))
        .sort((a, b) => {
          return a - b;
        });
}

console.log("mergeShortSort");
console.log("prob1");
console.log(mergeShortSort([3, 2, 1, 13, 8, 5, 0, 1]));
console.log("prob2");
console.log(mergeShortSort([105, 79, 100, 110, 23]));
