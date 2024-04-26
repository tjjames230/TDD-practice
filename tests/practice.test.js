const capitalize = require("../src/practice");

describe("capitalize tests", () => {
	test("first test", () => {
		expect(capitalize("string")).toBe("String");
		expect(capitalize("word")).toBe("Word");
		expect(capitalize("WORD")).toBe("WORD");
	});
});
