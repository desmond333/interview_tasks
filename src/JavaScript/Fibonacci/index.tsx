import { FC } from "react"

// Напишите функция вычисления последовательности фибоначи 
// function fib(n) { // TODO: implement }
// fib(5); // [0, 1, 1, 2, 3] 
// fib(7); // [0, 1, 1, 2, 3, 5, 8]
// fib(11);// [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55] 

export const FibonacciComponent: FC = () => {

  const fib = (n: number): [number, number] => {
    if(n == 0){
        return [0, 1];
      } else{
        const [prev, next] = fib(n - 1);
        return [next, prev + next];
      }
  }

  const fiber = (n: number) => fib(n)[0];

  console.log("fib()")
  console.log(fiber(10))


  return (
    <div>
      fib()
    </div>
  )
}