import caesarCipher from "./caesarCipher";

test("The empty string remains empty", () => {
  expect(caesarCipher("")).toBe("");
});

test("Single words can be encoded", () => {
  expect(caesarCipher("hello", 5)).toBe("mjqqt");
});

test("Other shift values work", () => {
  expect(caesarCipher("hello", 8)).toBe("pmttw");
});

test("A shift of 0 returns the same word", () => {
  expect(caesarCipher("hello", 0)).toBe("hello");
});

test("Other words work", () => {
  expect(caesarCipher("goodbye", 5)).toBe("lttigdj");
});

test("Capitalization is preserved", () => {
  expect(caesarCipher("HeLlO", 5)).toBe("MjQqT");
});

test("Spaces are preserved", () => {
  expect(caesarCipher("hello world", 5)).toBe("mjqqt btwqi");
});

test("digits are preserved", () => {
  expect(caesarCipher("hel5o", 5)).toBe("mjq5t");
});

test("punctuation is preserved", () => {
  expect(caesarCipher("hello!", 5)).toBe("mjqqt!");
});

test("Wrapping the alphabet works", () => {
  expect(caesarCipher("pizza", 5)).toBe("uneef");
});

test("Numbers larger than 26 are mod 26", () => {
  expect(caesarCipher("hello", 31)).toBe("mjqqt");
});

test("Negative numbers go backwards around the alphabet", () => {
  expect(caesarCipher("hello", -5)).toBe("czggj");
});
