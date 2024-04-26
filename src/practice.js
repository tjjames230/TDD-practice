function capitalize(str) {
	let arr = str.split("");
	let firstChar = str.charAt(0).toUpperCase();
	arr.shift();
	arr.unshift(firstChar);
	return arr.join("");
}

module.exports = capitalize;
