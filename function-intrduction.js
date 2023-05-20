// Make the task simple.

// repetitive work reduction.
// function printHello(/** Arguments */) {
// 	/**
// 	 * Main Body
// 	 */
// 	// Return
// }

// let printHello = 445;

// Void Function
function printHello() {
	let a = 10;
	let b = 20;
	let result = a + b;
	console.log(result);
}

// printHello();

// Return Something,
function giveMeValue() {
	let a = 10;
	let b = 20;
	let result = a + b;
	return result; // 30
}

// function checkBig() { }

let returnResult = giveMeValue();
// console.log(returnResult);

// Parameter(Arguments) Void
function addTwoNumbers(a, b) {
	// a, b => a+b => console.log(a+b)
	console.log(a + b);
}
// addTwoNumbers(10, 56);
// addTwoNumbers(54, 45);

// sumValue
// if (sumValue > 45) {
// 	console.log('Is bigger');
// } else {
// 	console.log('Is Smaller');
// }

/** Arguments Return Type */
function multiplyNumbers(a, b) {
	return a * b;
}
let result = multiplyNumbers(1, 3);
// console.log(result);

// Arguments Default Value
function sumNumber(a = 10, b = 20) {
	console.log(a + b);
}

// sumNumber();
// sumNumber(null, 65);

/**Arrow function */
let name = 'Rasel';

// const sayHello = (/**Arguments */) => {
// 	/**Body */
// };

const sayHello = (a) => {
	console.log(`Hi ${a} from Arrow Function.`);
};

sayHello(name);

console.log('Hi');
