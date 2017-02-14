var fruits = ["apple", "banana", "cherry"];

// 1A: Write a function called outputFruitOld that consoles every fruit in a fruit array.

// function outputFruitOld (array) {
// 	for (var i=0; i<array.length; i++) {
// 		console.log(array[i]);
// 	}
// }

// outputFruitOld(fruits);



// // 1B: Rewrite using forEach array method.

// outputFruitOld (element, index); {
// 	console.log(element);
// 	console.log("array[" + index + "] " + element);
// }

// fruits.forEach(outputFruits);

// fruits.forEach(function(fruit) {
// 	console.log(element);
// })





// 2A: Write a function called backwardFruitsOld that reverses the letters  
// in each word in the fruits array. 
 
// function backwardFruitsOld(array) {
// 	var backwardsFruit = [];
// 	for (var i=0; i<array.length; i++) {
// 		backwardsFruit.push(array[i].split("").reverse().join(""));
// 	}
// 	console.log(backwardsFruit);
// }

<!-- backwardFruitsOld(fruits);  -->

// 2B: Rewrite using map array method  

<!-- var backwardsFruit = fruits.map(function(fruits){ -->
<!--	return fruits.split("").reverse().join(""); -->

// console.log(backwardsFruit); 




// 3A: Write a function called fiveLettersOnlyOld that only returns fruits 
// that have five letters.

function fiveLettersOnlyOld (array) {
	var filteredFruits = [];
	for (var i=0; i<array.length; i++) {
		if (array[i].length === 5) {
			filteredFruits.push(array.[i]);
		}
	}
	console.log(filteredFruits);
}

fiveLettersOnlyOld(fruits);

// 3B: Rewrite using filter array method. 

function filterIt (fruit) {
	if (fruit.length === 5) }
	return fruit;
}

fruits.filter(filterIt);
console.log(filteredFruits);


// 4A: Write a function called addzOld that returns the sum of an array. 

function addzOld(array){
	for (var i=0; i<array.length; i++) {
		sum = sum + array[i];
	}
	console.log(sum);
}

addzold(numbers);


// 4B: Rewrite using reduce array method

var sum = [0,1,2,3,4].reduce(function(previousValue, currentValue, index) {
	console.log("current index " + index);
	console.log("previousValue ", previousValue);
	console.log("currentValue ", currentValue);
	return previousValue + currentValue;
});
console.log(sum);




