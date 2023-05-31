import { FC } from "react"

// Напишите функцию, которая
// будет проверять на “глубокое” равенство 2 входящих параметра

// const source = {a: 1, b: {c: 1}}
// const test1 = {a: 1, b: {c: 1}}
// const test2 = {a: 1, b: {c: 2}}
// const test3 = {a: 1, c: {b: 1}}
// const test4 = {a: 1, c: 2}
// const test5 = {c: 2, a: 1}
// const test6 = {a: 1, b: {c: {d: 5}}}
//
// console.log(deepEqual(source, test1)) // -> true
// console.log(deepEqual(source, test2)) // -> false
// console.log(deepEqual(source, test3)) // -> false
// console.log(deepEqual(source, test4)) // -> false
// console.log(deepEqual(source, test5)) // -> false
// console.log(deepEqual(source, test6)) // -> false

export const DeepEqualComponent: FC = () => {
  function deepEqual(obj1: any, obj2: any): boolean {
    // Проверка на примитивные типы и null
    if (obj1 === obj2) {
      return true
    }

    // Проверка на тип объект
    if (
      typeof obj1 !== "object" ||
      typeof obj2 !== "object" ||
      obj1 === null ||
      obj2 === null
    ) {
      return false
    }

    const keys1 = Object.keys(obj1)
    const keys2 = Object.keys(obj2)

    // Проверка на количество ключей
    if (keys1.length !== keys2.length) {
      return false
    }

    for (const key of keys1) {
      // Рекурсивная проверка значений по ключам
      if (!deepEqual(obj1[key], obj2[key])) {
        return false
      }
    }

    return true
  }

  // Примеры использования функции
  const obj1 = { a: 1, b: { c: 2 } }
  const obj2 = { a: 1, b: { c: 2 } }
  const obj3 = { a: 1, b: { c: 3 } }

  console.log(deepEqual(obj1, obj2)) // true
  console.log(deepEqual(obj1, obj3)) // false

  return <div>deepEqual()</div>
}
