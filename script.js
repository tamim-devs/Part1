// 1. Reverse a string without using reverse() method
function reverseMethod(str) {
  let reverse = "";
  for (let i = str.length - 1; i >= 0; i--) {
      reverse += str[i];
  }
  return reverse;
}
document.write("Reversed String: " + reverseMethod("hello") + "<br/>");

// 2. Find the second largest number in an array
function secondLarges(arr) {
  let first = -Infinity, second = -Infinity;
  for (let num of arr) {
      if (num > first) {
          second = first;
          first = num;
      } else if (num > second && num !== first) {
          second = num;
      }
  }
  return second;
}
document.write("Second Largest Number: " + secondLarges([10, 20, 4, 45, 99]) + "<br/>");

// 3. Remove duplicate values from an array
function removeDuplicate(arr) {
  return [...new Set(arr)];
}
document.write("Array without Duplicates: " + removeDuplicate([1, 2, 2, 3, 4, 4, 5]) + "<br/>");

// 4. Function that supports infinite currying
function currySum(a) {
  return function (b) {
      if (b !== undefined) {
          return currySum(a + b);
      } else {
          return a;
      }
  };
}
document.write("Curry Sum Results: " + currySum(1)(2)(3)(4)() + ", " + currySum(5)(10)(15)() + "<br/>");
