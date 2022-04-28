// Program that, given a word or phrase in lowercase, displays half of the word in lowercase and the other half in uppercase to the console. //
let text = prompt("Please enter the word or phrase in lowercase:");
let halfText = parseInt(text.length / 2);
let firstHalf = text.substring(0, halfText);
let secondtHalf = text.substring(halfText);
console.log(firstHalf);
console.log(secondtHalf);
alert(firstHalf.toLowerCase() + secondtHalf.toUpperCase());
