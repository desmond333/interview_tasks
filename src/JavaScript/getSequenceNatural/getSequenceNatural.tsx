import { FC } from "react"

interface getSequenceNaturalProps {}
// Найти длину наибольшего последовательного отрезка натуральных чисел
export const GetSequenceNaturalComponent: FC<getSequenceNaturalProps> = () => {
  const getSequenceNatural = (numbers: number[]) => {
    if (numbers.length === 1) return 1

    let counter = 0
    const arr = []

    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i + 1] - numbers[i] === 1) {
        counter++
      } else {
        arr.push(counter + 1)
        counter = 0
      }
    }

    return Math.max.apply(null, arr)
  }

  const getSequenceNatural2 = (numbers: number[]) => {
    let maxLength = 0
    let currentLength = 1

    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i + 1] - numbers[i] === 1) {
        currentLength++
      } else {
        if (currentLength > maxLength) {
          maxLength = currentLength
        }
        currentLength = 1
      }
    }

    return maxLength
  }

  console.log("getSequenceNatural([1])")
  console.log(getSequenceNatural([1]))

  console.log(
    "getSequenceNatural([1, 2, 3, -5, 7, 8, 9, 10, 13, 14, 17, 18, 19]"
  )
  console.log(
    getSequenceNatural([1, 2, 3, -5, 7, 8, 9, 10, 13, 14, 17, 18, 19])
  )

  console.log(
    "getSequenceNatural([1, 2, 3, -5, 7, 8, 9, 10, 13, 14, 15, 16, 17, 18, 19])"
  )
  console.log(
    getSequenceNatural([1, 2, 3, -5, 7, 8, 9, 10, 13, 14, 15, 16, 17, 18, 19])
  )

  console.log("getSequenceNatural([1, 2, 3, -5, 7, 8, 13, -5, -4, -3, -2, -1])")

  console.log(getSequenceNatural([1, 2, 3, -5, 7, 8, 13, -5, -4, -3, -2, -1]))

  return (
    <div className={"getSequenceNatural"}>
      getSequenceNatural(naturalNumber)
    </div>
  )
}
