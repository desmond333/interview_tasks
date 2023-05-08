import { FC } from "react"

// Сделать змейку
// 1  2  3  4  5
// 16 17 18 19 6
// 15 24 25 20 7
// 14 23 22 21 8
// 13 12 11 10 9
// Более легкий вариант
// 1 2 3
// 8 9 4
// 7 6 5
// 1 параметр - стартовое значение 2 параметр сколько в столбце и строке элементов

export const SnakesComponent: FC = () => {
  const getSnakes = (startPosition: number = 1, rowColumns: number = 3) => {
    const obj: any = {}
    
    for (let i = 0; i < rowColumns; i++) {
        const tempArray = [];

        const b = Object.keys(obj).length  === 0 ? 0 : obj[i-1][rowColumns-1]
        for (let j = b; j < 9; j++) {
            tempArray.push(startPosition + j);
            console.log(j)
        }

        
        obj[i] = tempArray;
        debugger
        console.log(tempArray)
    }
  }


  console.log("getSnakes()")
  console.log(getSnakes())


  return (
    <div>
      getSnakes()
    </div>
  )
}