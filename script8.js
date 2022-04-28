// program that asks the user for a sum and that returns by console the numbers that are part of the operation. For example: “23+56” → the program will return 23 and 56. //
let sum = prompt("Enter the sum:");
if (sum.indexOf("+") != -1) {
    let sumPosition = sum.indexOf("+");
    let number1 = parseInt(sum.substring(0, sumPosition));
    let number2 = parseInt(sum.substring(sumPosition));
    console.log(number1);
    console.log(number2);
} else {
    alert("You have to enter a sum");
}