// https://tech-docs.corndel.com/js/for-of-loops.html

/**
 * Adds together all the numbers in the array
 *
 * @example
 * // returns 11
 * sumArray([1, 3, 7])
 *
 * @param {number[]} arr - An array of numbers
 * @returns {number} The sum of the array
 */
export function sumArray(arr) {
  // TODO
  let total = 0

  for (let n = 0; n < arr.length; n++) {
    total += arr[n] // n - refers to one of the things in the array
  }
 
  return total
  console.log(total)
}
