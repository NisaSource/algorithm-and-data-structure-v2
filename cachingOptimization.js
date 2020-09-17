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

console.log(uniqSort([12, 3, 1, 54, 2, 2, 1, 12]));
