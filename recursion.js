// Rewrite the function below so that it uses a loop rather than a recursion

const joinElements = (arr, joinStr) => {
	const recurse = (idx, tempResult) => {
		tempResult += arr[idx];

		if (idx === arr.length - 1) {
			return tempResult;
		} else {
			return recurse(idx + 1, tempResult + joinStr);
		}
	};

	return recurse(0, '');
};

//console.log(joinElements(['c', 'llst', 'ck'], 'a'));

const rewriteJoinElements = (arr, joinStr) => {
	let result = '';

	for (let i = 0; i < arr.length - 1; i++) {
		result += arr[i] + joinStr;
	}

	return result + arr[arr.length - 1];
};

console.log('----------TASK 1----------');
console.log(rewriteJoinElements(['c', 'llst', 'ck'], 'a'));

// Write a recursive factorial func

const factorialOf = (n) => {
	if (n === 0) {
		return 1;
	} else {
		return n * factorialOf(n - 1);
	}
};

console.log('----------TASK 2----------');
console.log(factorialOf(5));
