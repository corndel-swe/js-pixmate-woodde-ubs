// https://tech-docs.corndel.com/js/loop-control-flow.html

/**
 * Finds the index of the first element in an array that is smaller than the element before it.
 *
 * @example
 * // returns 3
 * stepDown([10, 12, 15, 14, 16, 20])
 *
 * @example
 * // returns -1 (no element is smaller than its predecessor)
 * stepDown([5, 10, 15, 20])
 *
 * @param {number[]} numbers - An array of numbers to be examined.
 * @returns {number} The index of the first element that is smaller than its predecessor.
 *                   Returns -1 if no such element is found or if the array is empty.
 */
export function stepDown(numbers) {
  // TODO
  // 1. look through the list
  // 2. for each number:
  //  a. is it smaller than the ones before it?
  //  b. if so:
  //    i. that's the number we're looking for! return its index
  //  c. otherwise:
  //    i. try the next number
  // 3. We've gone through all the numbers! Return -1

  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] < numbers[i - 1]) {
      return i // returns the index value

    }
  }

  return -1
}
