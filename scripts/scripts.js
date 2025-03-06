//1
// for (let i = 0; i <= 10; i += 2) {
//   console.log(i);
// }

//2
// const array = ["a", "b", "c", "d", "f", "f", "e", "f"];
// const numberArray = [1, 5];

// function removeByIndex(array, numberArray) {
//   let result = [];
//   for (let i = 0; i < array.length; i++) {
//     for (let index = 0; index < numberArray.length; index++) {
//       if (i == numberArray[index]) {
//         result.push(array[i]);
//       }
//     }
//   }
//   return result;
// }

// const result = removeByIndex(array, numberArray);
// console.log(result);

//3
// const numbers = 12345;

// let numString = numbers.toString();
// let result = [];

// for (let i = 0; i < numString.length; i++) {
//   result.push(Number(numString[i]));
// }
// console.log(result);

//4
arrayOne = [1, 2, 3];
arrayTwo = ["a", "b", "c", "d"];

function output(arrayOne, arrayTwo) {
  let result = [];
  for (let i = 0; i < arrayOne.length; i++) {
    for (let index = 0; index < arrayTwo.length; index++) {
      result.push(arrayOne[i], arrayTwo[index]);
      result.push(arrayTwo[index], arrayOne[i]);
    }
  }
  return result;
}

const result = output(arrayOne, arrayTwo);
console.log(result);
