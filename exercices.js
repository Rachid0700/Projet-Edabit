/*
EXERCICE 1

function Age(annee,jours){
    return annee*jours;
}
 
console.log(Age(2,365))
*/



/*

EXERCICES 2
function convert(minutes){
    return minutes*60;
}

console.log(convert(5))
*/




/*

EXERCICES 3
function triArea(base, height) {
	return base*height/2;
}
console.log(triArea(3,2))
*/



/*

EXERCIE 4
function cubes(a) {
	return a ** 3
}
console.log(cubes(3))
*/



/*
EXERCICE 5

let arr =[1,2,3]

function getFirstValue(arr) {

	return arr[0]

}

console.log(getFirstValue(arr))

*/



/*

EXERCICES 6

function circuitPower(voltage, current) {
	return voltage*current
}
console.log(circuitPower(230,10))
*/




/*
EXERCICE 7

function howManySeconds(hours) {
	return hours*3600
}
console.log(howManySeconds(2))
*/



/*


EXERCICE 8

function nextEdge(side1, side2) {
        let largeur = (side1+side2)-1
	return largeur;
}   
console.log(nextEdge(8,10))

*/


/*

EXERCICE 9


function sumNumbersUpTo(n) {
    if (typeof n !== "number" || n <= 0 ) {
      return "Veuillez fournir un nombre positif.";
    }
  
    let sum = 0;
    for (let i = 1; i <= n; i++) {
      sum+=i;
    }
  
    return sum;
  }
  
  const inputNumber =5;
  const result = sumNumbersUpTo(inputNumber);
  console.log(`La somme des nombres de 1 à ${inputNumber} est : ${result}`);
*/



/*
 
EXERCICE 10

function addUp(num) {
	if(typeof num !=="number" || num<=0){
     return `Veuillez saisir une valeur positif s'il Vous Plaît`
    }

    let sum=0;
    for(let i=1; i<=num; i++){
    sum= sum+i
    }
    return sum;
}

 const num= 5;
 const resultat = addUp(num)

 console.log(` La somme des nombres de 1 à ${num} est ${resultat}`)
*/



/*

EXERCICE 11


function minMax(numbersArray) {
    if (!Array.isArray(numbersArray) || numbersArray.length === 0) {
      return "Le paramètre doit être un tableau non vide.";
    }
  
    const minimum = Math.min(...numbersArray);
    const maximum = Math.max(...numbersArray);
  
    return [minimum, maximum];
  }
  
  const numbers = [1, 2, 3, 4, 5];
  const result = minMax(numbers);
  
  console.log(`Nombre minimum : ${result[0]}`);
  console.log(`Nombre maximum : ${result[1]}`);
*/



/*

EXERCICE 12

function binary(decimalNumber) {
    const decimal = parseInt(decimalNumber, 10);
    
    if (isNaN(decimal)) {
      return "Please provide a valid decimal number.";
    }
  
    if (decimal === 0) {
      return "0";
    }
  
    let binary = "";
    let bitValue = 1;
  
    while (bitValue <= decimal) {
      binary = (decimal & bitValue ? "1" : "0") + binary;
      bitValue *= 2;
    }
  
    return binary;
  }
  
  const decimal = "149"; // Example decimal number
  const binaryRepresentation = binary(decimal);
  console.log(`Binary representation of ${decimal}: ${binaryRepresentation}`);
  */