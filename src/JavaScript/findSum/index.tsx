import { FC } from "react"

// Напишите функцию, которая принимает два аргумента:
// - Массив из ЦЕЛЫХ ПОЛОЖИТЕЛЬНЫХ ЧИСЕЛ и сумму в виде целого числа.
// - Функция должна вернуть все ПОДПОСЛЕДОВАТЕЛЬНОСТИ чисел массива
// из аргумента, сумма которых равна числу, которое
// приходит вторым аргументом. - Если решения нет, вернуть пустой массив.
//
//   function findSum(array, targetSum)
//   arr = [1, 5, 4, 1, 11, 1, 10, 9, 1, 9, 6, 4, 10]
//   targetSum = 10
//   findSum(arr, targetSum) // [ [ 1, 5, 4 ], [ 5, 4, 1 ], [ 10 ], [ 9, 1 ], [ 1, 9 ], [ 6, 4 ], [ 10 ]]

export const FindSumComponent: FC = () => {
  function findSum(array: number[], targetSum: number) {
    const result = []
    const length = array.length

    let start = 0
    let end = 0
    let sum = array[start]

    while (start < length) {
      if (sum === targetSum) {
        result.push(array.slice(start, end + 1))
        sum -= array[start]
        start++
        end++
        sum += array[end]
      } else if (sum < targetSum) {
        end++
        sum += array[end]
      } else {
        sum -= array[start]
        start++
      }
    }

    return result
  }

  const array = [1, 5, 4, 1, 11, 1, 10, 9, 1, 9, 6, 4, 10]
  const targetSum = 10

  console.log(findSum(array, targetSum))

  return <div>findSum()</div>
}
