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

// Given an unsorted array, write a func that return
// that arr to be sorted

const mergeSort = (arr) => {
	if (arr.length === 1) {
		return arr;
	}

	const middle = Math.floor(arr.length / 2);
	const left = arr.slice(0, middle);
	const right = arr.slice(middle);
	const sortedLeft = mergeSort(left);
	const sortedRight = mergeSort(right);
	return mergeArr(sortedLeft, sortedRight);
};

const mergeArr = (arr1, arr2) => {
	let result = [];
	let i = 0;
	let j = 0;

	while (i < arr1.length && j < arr2.length) {
		// compare the elements
		if (arr1[i] < arr2[j]) {
			result.push(arr1[i]);
			i++;
		} else {
			result.push(arr2[j]);
			j++;
		}
	}

	return result.concat(arr1.slice(i)).concat(arr2.slice(j));
};

console.log('----------TASK 3----------');
console.log(mergeSort([2, 15, 8, 34, 9, 13, 32, 4, 12]));
