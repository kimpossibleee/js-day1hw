// Question #1

// Write a function that takes a string (sentence) and an array of strings (in this example dog_names) and check if one of the list members (dog names) is in the string (sentence). Return an array of the dog names found in the array

function checkDogInList(sentence, dogNames){
    const filteredList = dogNames.filter(dog => sentence.includes(dog))
    return filteredList
}

var dogNames = ["Max","Fido","Gizmo","Nala"]
let testString1 = "Hello, my dog is Max, and they have purple eyes!"
console.log(checkDogInList(testString1, dogNames))

// Question #2

// Write a Function using map to convert an array of number from inches to feet
// 1 foot = 12 inches

function convertToFeet(array){
    const convertedArray = array.map(x => x / 12)
    return convertedArray
}

const heightsInInches = [66, 64, 60, 52, 72, 80, 51]
console.log(convertToFeet(heightsInInches))

// Question #3

// Using the Ternary Operator and map create an array that adds is eating pizza to every name from the array tmnt that ends with o and add is being rude to any other name.

function pizzaOrRude(nameList){
    const statementList = nameList.map(person => person.slice(-1) === 'o'? `${person} is eating pizza` : `${person} is being rude`)
    return statementList
}

const tmnt = ["Leonardo", "Michelangelo", "Donatello", "Raphael"]
console.log(pizzaOrRude(tmnt));

// Question #4

// Write an arrow function to find the max number in a list. Do not use the Math.max Function.

// The List will be all positive numbers

let findAMax=[123,5436,45784,1234,34,65,234125,645,3452,13216,49]

const findMaxNumber = (findAMax) => {
    if (findAMax.length == 0){
        return 'Your list is empty'
    }
    let maxNum = findAMax[0];
    for (let i = 1; i < findAMax.length; i++ ){
        if (findAMax[i] > maxNum){
            maxNum = findAMax[i]
        }
    }
    return maxNum;
};

console.log(findMaxNumber(findAMax))

// Question #5

// At the end of the third Iteration (the third time the loop has ran) of this for Loop, define the state of all the variables used in the cell

var bingo = "B-I-N-G-O"
var ognib = ""
for(let i=bingo.length-1; i>=0; i--){
    ognib+=(bingo[i])
    //define state from this line on the third iteration
    if (i === bingo.length-3){
        console.log(`bingo value is ${bingo}`);
        console.log(`ognib value is ${ognib}`)
        console.log(`i value is ${i}`)
    }
}

//bingo value is

//ognib value is

// i value is

// CODEWARS 1: Reverse Vowels In A String

function reverseVowels(s) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    const v = Array.from(s).filter(c => vowels.includes(c.toLowerCase()));

    return Array.from(s).map(c => {
      if (vowels.includes(c.toLowerCase())) {
        return v.pop();
      }
      return c;
    }).join('');
  }

console.log(reverseVowels('hello'))

// CODEWARS 2: Format any integer provided into a string with "," (commas) in the correct places.

function formatIntegerWithCommas(integer) {
    const str = integer.toString();
    const length = str.length;
    let formatted = '';

    for (let i = 0; i < length; i++) {
      formatted = str[length - 1 - i] + formatted;
      if (i !== length - 1 && (i + 1) % 3 === 0) {
        formatted = ',' + formatted;
      }
    }

    return formatted;
  }
console.log(formatIntegerWithCommas('10000000909'))

// CODEWARS 3: Find duplicates
function findDuplicates(arr) {
    var seen = new Set();
    var duplicates = [];

    for (var i = 0; i < arr.length; i++) {
      var item = arr[i];

      if (!seen.has(item)) {
        seen.add(item);
      } else if (!duplicates.includes(item)) {
        duplicates.push(item);
      }
    }

    return duplicates;
  }
let result = findDuplicates([1, 2, 4, 4, 3, 3, 1, 5, 3, "5"])
console.log(result)
