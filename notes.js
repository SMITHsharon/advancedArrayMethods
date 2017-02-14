var fruits = ["apple", "banana", "cherry"];

// 1A: Write a function called outputFruitOld that consoles every fruit in a fruit array.

// function outputFruitOld (array) {
// 	for (i=0; i<array.length; i++) {
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
//in each word in the fruits array.

// 2B: Rewrite using map array method

function backwardFruitsOld(array) {
	var backwardsFruit = [];
	for (i=0; i<array.length; i++) {
		backwardsFruit.push(array[i].split("").reverse().join(""));
	}
}

backwardFruitsOld(fruits);



// 3A: Write a function called 
















