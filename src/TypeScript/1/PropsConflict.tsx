// Условия задачи:
// сделать так, чтобы в button можно было передавать colors связанные только с одним вариантом и ts ругался

// Variant 'one' colors:
// - green
// - red
// - blue

// Variant 'two' colors:
// - green
// - yellow
// - black

const Button = () => {
  return <button>Button</button>
}

export const PropsConflict = () => {
  return (
    <main>
      <Button variant="one" color="yellow" />
    </main>
  )
}

// Условия задачи:
// сделать так, чтобы в button можно было передавать colors связанные только с одним вариантом и ts ругался

// Variant 'one' colors:
// - green
// - red
// - blue

// Variant 'two' colors:
// - green
// - yellow
// - black

// Решение
// type ColorGreen = 'green'
// type ColorBlue = 'blue'
// type ColorRed = 'red'
// type ColorYellow = 'yellow'
// type ColorBlack = 'black'
//
// type VariantOne = {
//     variant: 'one'
//     color: ColorGreen | ColorRed | ColorBlue
// }
//
// type VariantTwo = {
//     variant: 'two'
//     color: ColorGreen | ColorYellow | ColorBlack
// }
//
// type ButtonProps = VariantOne | VariantTwo

// const Button = ({ variant, color }: ButtonProps) => {
//     return <button>Button</button>
// }
