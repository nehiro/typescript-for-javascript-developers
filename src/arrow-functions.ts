export {};

let bmi: (height: number, weight: number) => number = (
  height: number,
  weight: number
): number => weight / (height * height);

console.log(bmi(1.7, 63));

// ): number => {
//   return weight / (height * height);
// };
