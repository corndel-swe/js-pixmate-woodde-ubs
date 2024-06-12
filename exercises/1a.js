// https://tech-docs.corndel.com/js/while-loops.html
// https://tech-docs.corndel.com/js/for-loops.html

/**
 * Adds together all the positive even numbers smaller than or equal to n
 *
 * @example
 * // returns 20 (= 2 + 4 + 6 + 8)
 * addEven(8)
 *
 * @param {number} n - The upper limit
 * @returns {number} The sum of the even numbers smaller than or equal to n
 */
export function addEven(n) {
  // TODO
  //Initiate a counter
  let i = 1
  //Initiate a sum variable
  let sum = 0
  // Count from 1 to n
  while (i <= n) {
    // For each number
    // check if it is even
    if (i % 2 == 0) {
      // add it to the sum
      sum += i
    }
   // i + 1 - increment it by 1 --> same as i += 1 or i++ increments i by 1
    i++
  }
  // return a sum
  return sum

}
