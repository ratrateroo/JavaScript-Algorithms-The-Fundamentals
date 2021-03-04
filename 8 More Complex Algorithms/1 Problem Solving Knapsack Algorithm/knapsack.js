//The Knapsack Problem

//You got a list of items, where every item has a value and a weight.
//You got a bag that holds a maximum weight of X.

//Write a program that maximizes the value of the items you put into the bag whilst ensuring that you don't exceed the maximum weight.

function knapsack(items, cap, itemIndex) {
	if (cap === 0 || itemIndex < 0) {
		return { items: [], value: 0, weight: 0 };
	}
	if (cap < items[itemIndex].weight) {
		return knapsack(items, cap, itemIndex - 1);
	}
	const sackWithItem = knapsack(
		items,
		cap - items[itemIndex].weight,
		itemIndex - 1
	);
	const sackWithoutItem = knapsack(items, cap, itemIndex - 1);

	const valueWithItem = sackWithItem.value + items[itemIndex].value;
	const valueWithoutItem = sackWithoutItem.value;

	if (valueWithItem > valueWithoutItem) {
		const updatedSack = {
			items: sackWithItem.items.concat(items[itemIndex]),
			value: sackWithItem.value + items[itemIndex].value,
			weight: sackWithItem.weight + items[itemIndex].weight,
		};
		return updatedSack;
	} else {
		return sackWithoutItem;
	}
}

const items = [
	{ name: 'a', value: 3, weight: 3 },
	{ name: 'b', value: 6, weight: 8 },
	{ name: 'c', value: 10, weight: 3 },
];
const maxCap = 8;

const sack = knapsack(items, maxCap, items.length - 1);
console.log(sack);
