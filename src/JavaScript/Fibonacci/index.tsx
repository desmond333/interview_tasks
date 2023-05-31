import { FC } from "react"

// Напишите функция вычисления последовательности фибоначи
// function fib(n) { // TODO: implement }
// fib(5); // [0, 1, 1, 2, 3]
// fib(7); // [0, 1, 1, 2, 3, 5, 8]
// fib(11);// [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

export const FibonacciComponent: FC = () => {
  const fibonacciRec = (n: number): [number, number] => {
    if (n == 0) {
      return [0, 1]
    } else {
      const [prev, next] = fibonacciRec(n - 1)
      console.log(prev)
      return [next, prev + next]
    }
  }

  const fibonacciRecEntity = (n: number) => fibonacciRec(n)[0]

  console.log("fibonacciRecEntity(7)")
  fibonacciRecEntity(7)

  const fibonacciCycle = (n: number): Number[] => {
    const arr = [0, 1]

    for (let i = 0; i < n - 2; i++) {
      const previousNumberSum = arr[i] + arr[i + 1]
      arr.push(previousNumberSum)
    }

    return arr
  }

  console.log("fibonacciCycle(7)")
  console.log(fibonacciCycle(7))

  return <div>fib()</div>
}
