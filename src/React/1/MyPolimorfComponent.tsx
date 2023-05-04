// Условия задачи:
// сделать так, чтобы MyPolimorfComponent
// в зависимости от переданных пропсов был link or btn or div
const MyPolimorfComponent = () => {
  return <>MyPolimorfComponent</>
}

export const MyPolimorfComponent = () => {
  return (
    <section>
      <MyPolimorfComponent tag="a" href="https://www.google.com/">
        I am link
      </MyPolimorfComponent>

      <MyPolimorfComponent tag="button" type="submit">
        I am submit button
      </MyPolimorfComponent>

      <MyPolimorfComponent>I am Div</MyPolimorfComponent>
    </section>
  )
}

// Условия задачи:
// сделать так, чтобы MyPolimorfComponent
// в зависимости от переданных пропсов был link or btn or div
// Решение

// import { ComponentPropsWithoutRef, ElementType } from "react";
//
// type Props<T extends ElementType> = {
//     tag?: T
// } & ComponentPropsWithoutRef<T>
//
// // Пример использования ComponentPropsWithoutRef<T>
// // type Button = ComponentPropsWithoutRef<'button'>
//
// function MyPolimorfComponent<T extends ElementType>({children, tag, rest}: Props<T>) {
//     const Component = tag || 'div'
//     return (
//         <Component {...rest}>{children}</Component>
//     )
// }
//
// export const MyPolimorfComponent = () => {
//     return (
//         <section>
//             <MyPolimorfComponent tag='a' href='https://www.google.com/'>
//                 I am link
//             </MyPolimorfComponent>
//
//             <MyPolimorfComponent tag='button' type="submit">
//                 I am submitted button
//             </MyPolimorfComponent>
//
//             <MyPolimorfComponent>
//                 I am Div
//             </MyPolimorfComponent>
//         </section>
//     )
// }
