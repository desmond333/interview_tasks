import { FC } from "react"

// Найти длину наибольшего последовательного отрезка натуральных чисел

export const ArrayOfArraysComponent: FC = () => {
  const getArrayOfArrays = (numbers: number[]) => {
    
  }


  console.log("getSequenceNatural([1])")
  console.log(getArrayOfArrays([1]))

  console.log(
    "getSequenceNatural([1, 2, 3, -5, 7, 8, 9, 10, 13, 14, 17, 18, 19]"
  )
  console.log(
    getArrayOfArrays([1, 2, 3, -5, 7, 8, 9, 10, 13, 14, 17, 18, 19])
  )

  return (
    <div className={"getArrayOfArrays"}>
      getArrayOfArrays(naturalNumber)
    </div>
  )
}










// Напишите функцию, которая принимает два аргумента: - Массив из ЦЕЛЫХ ПОЛОЖИТЕЛЬНЫХ ЧИСЕЛ и сумму в виде целого числа. - Функция должна вернуть все ПОДПОСЛЕДОВАТЕЛЬНОСТИ чисел массива из аргумента, сумма которых равна числу, которое приходит вторым аргументом. - Если решения нет, вернуть пустой массив. 

// function findSum(array, targetSum) { //TODO: implement } 
// array = [1, 5, 4, 1, 11, 1, 10, 9, 1, 9, 6, 4, 10] 
// targetSum = 10 
// findSum(array, targetSum) // [ [ 1, 5, 4 ], [ 5, 4, 1 ], [ 10 ], [ 9, 1 ], [ 1, 9 ], [ 6, 4 ], [ 10 ]]
