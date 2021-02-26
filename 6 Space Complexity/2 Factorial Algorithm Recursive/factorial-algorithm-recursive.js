// ------------------------
// 2) Factorial (Recursion)
// ------------------------

function factRecursive(number) {
	if (number === 1) {
		// 1
		return 1; // 1
	}
	return number * factRecursive(number - 1); // 1
}

// Space Complexity: O(n)
