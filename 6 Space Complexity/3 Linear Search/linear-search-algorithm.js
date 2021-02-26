// ------------------------
// 3) Linear Search
// ------------------------

function linearSearch(arr, element, comparatorFn) {
	let index = 0;
	for (const item of arr) {
		if (
			typeof element === 'object' &&
			element !== null &&
			comparatorFn(element, item)
		) {
			return index;
		}
		if (item === element) {
			return index;
		}
		index++;
	}
}

// Space Complexity: O(1)
