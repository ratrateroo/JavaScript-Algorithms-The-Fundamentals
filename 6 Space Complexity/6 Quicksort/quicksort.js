// ------------------------
// 6) Quicksort
// ------------------------

function quickSort(arr) {
	const copiedArray = [...arr];

	if (copiedArray.length <= 1) {
		return copiedArray;
	}

	const smallerElementsArray = [];
	const biggerElementsArray = [];
	const pivotElement = copiedArray.shift();
	const centerElementsArray = [pivotElement];

	while (copiedArray.length) {
		const currentElement = copiedArray.shift();
		if (currentElement === pivotElement) {
			centerElementsArray.push(currentElement);
		} else if (currentElement < pivotElement) {
			smallerElementsArray.push(currentElement);
		} else {
			biggerElementsArray.push(currentElement);
		}
	}

	const smallerElementsSortedArray = quickSort(smallerElementsArray);
	const biggerElementsSortedArray = quickSort(biggerElementsArray);
	return smallerElementsSortedArray.concat(
		centerElementsArray,
		biggerElementsSortedArray
	);
}

// Space Complexity: O(n)
