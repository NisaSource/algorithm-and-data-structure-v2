// Implement a linear search.
// Given a sorted array and a number, create a func
// that returns at which index of the array the number is.

const linearSearch = (arr, item) => {
	let index = -1;

	arr.forEach((val, idx) => {
		if (val === item) {
			index = idx;
		}
	});

	return index;
};

console.log('----------TASK 1----------');
console.log(linearSearch([2, 5, 8, 9, 13], 9));
