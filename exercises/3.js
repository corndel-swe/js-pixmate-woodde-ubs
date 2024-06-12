// https://tech-docs.corndel.com/js/nested-loops. html

/**
 * Given a grid of numbers (an array of arrays),
 * count how many are larger than 10.
 *
 * @example
 * // returns 4
 * gridLimit([
 *  [3, 12, 1],
 *  [19, 10, 11],
 *  [9, 5, 105]
 * ])
 *
 * @param {number[][]} grid - an array of arrays of numbers
 * @returns {number} The count of numbers larger than 10
 */
export function gridLimit(grid) {
  // TODO

  let count = 0
  // outer loop
  for (let i = 0; i < grid.length; i++) {
    // inner loop
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] > 10) {
        count = count + 1
      }
    }
  }


  return count
  console.log(count)
}
