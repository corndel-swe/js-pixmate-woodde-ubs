// https://tech-docs.corndel.com/js/loop-control-flow.html


export function isEven(num) {
  return ((num % 2) === 0)
}

export function greaterThan10(num) {
  return (num > 10)
}


/**
 * Calculates the sum of numbers in an array that are either even or greater than 10,
 * but skips numbers that are both.
 *
 * @example
 * // returns 37
 * sumSelective([1, 4, 12, 15, 20, 5, 8, 10])
 *
 * @param {number[]} numbers - An array of numbers to be processed.
 * @returns {number} The sum of numbers that meet the criteria.
 */
export function sumSelective(numbers) {
  // TODO
  // set running total to 0
  let runningTotal = 0
  // loop through the array
  for (let i = 0; i < numbers.length; i++) {
    let currentNumber = numbers[i]
    if ((isEven(currentNumber) || greaterThan10(currentNumber))
      && !(isEven(currentNumber) && greaterThan10(currentNumber))) {
      runningTotal = runningTotal + currentNumber
    }
  }
  return runningTotal
}















//   //let result = 0

//  // for (let i = 0; i < numbers.length; i++) {
//     // check number is even, calculating the remainder - if even it is 0
//     // check number is greater than 10
//    // if (
//       ((numbers[i] % 2 === 0) || (numbers[i] > 10)) &&
//       !((numbers[i] % 2 === 0) || (numbers[i] > 10))

//    // ) {
//       result += numbers[i]
//     }


//   //}

//   // return result
//   // let answer = sumSelective([8, 9, 10, 11, 12])
//   // console.log(answer)
