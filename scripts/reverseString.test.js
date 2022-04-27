import reverseString from "./reverseString";

test("Strings are reversed", () => {
  expect(reverseString("asdf")).toBe("fdsa");
});

test("Empty string is still empty", () => {
  expect(reverseString("")).toBe("");
});

test("Capitalization is preserved", () => {
  expect(reverseString("AsDfGh")).toBe("hGfDsA");
});

test("Digits are preserved", () => {
  expect(reverseString("as8f")).toBe("f8sa");
});

test("Spaces are preserved", () => {
  expect(reverseString("as df")).toBe("fd sa");
});

test("Punctuation is preserved", () => {
  expect(reverseString("a!sdf")).toBe("fds!a");
});
