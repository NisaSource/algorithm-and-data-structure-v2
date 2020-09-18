// Given an array and a number, create a func
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
console.log(linearSearch([2, 15, 8, 34, 9, 13], 9));

// create a function that accepts an unsorted array, and return the sorted array.

const swapElements = (arr, i, j) => {
	let temp = arr[i];
	arr[i] = arr[j];
	arr[j] = temp;
};

const bubbleSort = (arr) => {
	let countOuter = 0;
	let countInner = 0;
	let countSwap = 0;

	let swapped;
	do {
		countOuter++;
		swapped = false;
		for (let i = 0; i < arr.length; i++) {
			countInner++;
			if (arr[i] && arr[i + 1] && arr[i] > arr[i + 1]) {
				countSwap++;
				swapElements(arr, i, i + 1);
				swapped = true;
			}
		}
	} while (swapped);

	console.log('outer:', countOuter, 'inner:', countInner, 'swap:', countSwap);
	return arr;
};

console.log('----------TASK 2----------');
console.log(bubbleSort([2, 15, 8, 34, 9, 13]));
