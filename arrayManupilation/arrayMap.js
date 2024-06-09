function hasContiguousSubarrayWithSum(arr, target) {
  let currentSum = 0;
  let start = 0;
  const n = arr.length;

  for (let end = 0; end < n; end++) {
    currentSum += arr[end];

    // Shrink the window as long as currentSum exceeds the target and start is less than end
    while (currentSum > target && start < end) {
      currentSum -= arr[start];
      start++;
    }

    // Check if the currentSum is equal to the target
    if (currentSum === target) {
      return true;
    }
  }

  return false;
}

// Test cases
console.log(hasContiguousSubarrayWithSum([4, 2, 7, 1, 9, 5], 17)); // true
console.log(hasContiguousSubarrayWithSum([1, 2, 3], 5)); // true
console.log(hasContiguousSubarrayWithSum([1, 2, 3], 9)); // false
console.log(hasContiguousSubarrayWithSum([-5, 8, 0, -3, 4], 0)); // true
console.log(hasContiguousSubarrayWithSum([10], 10)); // true
