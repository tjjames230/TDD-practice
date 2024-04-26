const { capitalize, reverseString, calculator } = require("../src/practice");

// describe("capitalize tests", () => {
// 	test("first test", () => {
// 		expect(capitalize("string")).toBe("String");
// 		expect(capitalize("word")).toBe("Word");
// 		expect(capitalize("WORD")).toBe("WORD");
// 	});
// });

// describe("reverse string", () => {
// 	test("this function should reverse any given string", () => {
// 		expect(reverseString("string")).toBe("gnirts");
// 	});
// });

describe("calculator object", () => {
	test("add function", () => {
		expect(calculator.add(2, 3)).toBe(5);
	});
	test("subtract function", () => {
		expect(calculator.subtract(3, 2)).toBe(1);
	});
	test("multiply function", () => {
		expect(calculator.multiply(2, 2)).toBe(4);
	});
	test("divide function", () => {
		expect(calculator.divide(2, 2)).toBe(1);
	});
});
