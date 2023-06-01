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
  function generateSnake(startValue: number, size: number) {
    const matrix = []
    for (let i = 0; i < size; i++) {
      matrix.push([])
      for (let j = 0; j < size; j++) {
        matrix[i].push(0)
      }
    }

    let value = startValue
    let direction = 0 // 0 - вправо, 1 - вниз, 2 - влево, 3 - вверх
    let row = 0
    let col = 0

    for (let i = 0; i < size * size; i++) {
      matrix[row][col] = value
      value++

      // Проверяем следующую позицию в зависимости от текущего направления
      switch (direction) {
        case 0: // вправо
          if (col + 1 >= size || matrix[row][col + 1] !== 0) {
            direction = 1 // меняем направление на вниз
            row++
          } else {
            col++
          }
          break
        case 1: // вниз
          if (row + 1 >= size || matrix[row + 1][col] !== 0) {
            direction = 2 // меняем направление на влево
            col--
          } else {
            row++
          }
          break
        case 2: // влево
          if (col - 1 < 0 || matrix[row][col - 1] !== 0) {
            direction = 3 // меняем направление на вверх
            row--
          } else {
            col--
          }
          break
        case 3: // вверх
          if (row - 1 < 0 || matrix[row - 1][col] !== 0) {
            direction = 0 // меняем направление на вправо
            col++
          } else {
            row--
          }
          break
      }
    }

    return matrix
  }

  function createSnakeMatrix(start: number, size: number): number[][] {
    const matrix: number[][] = []

    // Заполняем матрицу пустыми значениями
    for (let i = 0; i < size; i++) {
      matrix[i] = []
    }

    let counter = start // Инициализируем счетчик значением start
    let rowStart = 0 // Начальная позиция для строк
    let rowEnd = size - 1 // Конечная позиция для строк
    let colStart = 0 // Начальная позиция для столбцов
    let colEnd = size - 1 // Конечная позиция для столбцов

    // Функция для заполнения матрицы значениями
    const fillMatrix = (): void => {
      // Заполняем верхнюю горизонтальную строку
      for (let i = colStart; i <= colEnd; i++) {
        matrix[rowStart][i] = counter++ // Увеличиваем счетчик и присваиваем значение ячейке
      }
      rowStart++

      // Заполняем правый вертикальный столбец
      for (let i = rowStart; i <= rowEnd; i++) {
        matrix[i][colEnd] = counter++ // Увеличиваем счетчик и присваиваем значение ячейке
      }
      colEnd--

      // Заполняем нижнюю горизонтальную строку в обратном порядке
      for (let i = colEnd; i >= colStart; i--) {
        matrix[rowEnd][i] = counter++ // Увеличиваем счетчик и присваиваем значение ячейке
      }
      rowEnd--

      // Заполняем левый вертикальный столбец в обратном порядке
      for (let i = rowEnd; i >= rowStart; i--) {
        matrix[i][colStart] = counter++ // Увеличиваем счетчик и присваиваем значение ячейке
      }
      colStart++

      // Проверяем, остались ли еще ячейки для заполнения
      if (rowStart <= rowEnd && colStart <= colEnd) {
        fillMatrix() // Рекурсивно запускаем функцию для оставшейся части матрицы
      }
    }
    fillMatrix()

    return matrix
  }

  const snakeMatrix = createSnakeMatrix(1, 4)
  console.log(snakeMatrix)

  // for (let i = 0; i < snakeMatrix.length; i++) {
  //   console.log(snakeMatrix[i])
  // }

  return <div>getSnakes()</div>
}
