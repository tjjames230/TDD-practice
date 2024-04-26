function capitalize(str) {
	let arr = str.split("");
	let firstChar = str.charAt(0).toUpperCase();
	arr.shift();
	arr.unshift(firstChar);
	return arr.join("");
}

function reverseString(str) {
	let newStr = str.split("").reverse().join("");
	return newStr;
}

const calculator = {
	add: (x, y) => {
		return x + y;
	},
	subtract: (x, y) => {
		return x - y;
	},
	multiply: (x, y) => {
		return x * y;
	},
	divide: (x, y) => {
		return x / y;
	},
};

module.exports = { capitalize, reverseString, calculator };
