
let userInput;
const numbers = [];
let validInput;

do{
  userInput = prompt('Введите число');
  validInput = userInput!==null;
        if (validInput){
        numbers.push(+userInput);
    }
}while(validInput);

let total = 0;

for (const userInput of numbers) {
  total += userInput;}

alert(`Общая сумма чисел равна ${total}`);
 console.log(total);
