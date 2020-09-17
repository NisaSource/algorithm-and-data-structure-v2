const uniqSort = (arr) => {
	const breadcrumbs = {};
	const result = [];

	for (let i = 0; i < arr.length; i++) {
		if (!breadcrumbs[arr[i]]) {
			result.push(arr[i]);
			breadcrumbs[arr[i]] = true;
		}
	}

	return result.sort((a, b) => a - b);
};

console.log('-----TASK 1-----');
console.log(uniqSort([12, 3, 1, 54, 2, 2, 1, 12]));

// Write a function that takes an argument and multiples n times 10

const times10 = (num) => {
	return num * 10;
};

console.log('-----TASK 2-----');
console.log(times10(9));

// Use an object to cache the results of times10 function.

const cache = {};

const memoTimes10 = (num) => {
	if (num in cache) {
		return `${cache[num]} is calculated`;
	} else {
		let result = times10(num);
		cache[num] = result;
		return `${result} is cached`;
	}
};

console.log('-----TASK 3-----');
console.log(memoTimes10(5));
console.log(memoTimes10(9));
console.log(memoTimes10(12));
console.log(memoTimes10(12));
