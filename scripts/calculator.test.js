import calculator from "./calculator";

// calculator.add tests
test("Two numbers can be added, example 1", () => {
  expect(calculator.add(1, 1)).toBe(2);
});

test("Two numbers can be added, example 2", () => {
  expect(calculator.add(2, 2)).toBe(4);
});

test("Two numbers can be added, example 3", () => {
  expect(calculator.add(1, 2)).toBe(3);
});

test("Zero is the additive identity", () => {
  expect(calculator.add(0, 1)).toBe(1);
});

test("Addition is commutative", () => {
  expect(calculator.add(2, 1)).toBe(calculator.add(1, 2));
});

test("Adding negative numbers is subtraction", () => {
  expect(calculator.add(2, -1)).toBe(1);
});

test("Addition of large numbers works", () => {
  expect(calculator.add(1024, 2048)).toBe(3072);
});

// calculator.subtract tests
test("Two numbers can be subtracted, example 1", () => {
  expect(calculator.subtract(4, 2)).toBe(2);
});

test("Two numbers can be subtracted, example 2", () => {
  expect(calculator.subtract(8, 1)).toBe(7);
});

test("Two numbers can be subtracted, example 3", () => {
  expect(calculator.subtract(6, 3)).toBe(3);
});

test("Zero is the identity for subtraction too", () => {
  expect(calculator.subtract(5, 0)).toBe(5);
});

test("Subtraction is not commutative", () => {
  expect(calculator.subtract(5, 1)).not.toBe(calculator.subtract(0, 5));
});

test("Subtraction of large numbers works", () => {
  expect(calculator.subtract(2048, 1024)).toBe(1024);
});

// calculator.multiply tests
test("Two numbers can be multiplied, example 1", () => {
  expect(calculator.multiply(2, 2)).toBe(4);
});

test("Two numbers can be multiplied, example 2", () => {
  expect(calculator.multiply(2, 3)).toBe(6);
});

test("Two numbers can be multiplied, example 3", () => {
  expect(calculator.multiply(4, 3)).toBe(12);
});

test("One is the multiplicative identity", () => {
  expect(calculator.multiply(4, 1)).toBe(4);
});

test("Multiplication is commutative", () => {
  expect(calculator.multiply(4, 2)).toBe(calculator.multiply(2, 4));
});

test("Anything times zero is zero, example 1", () => {
  expect(calculator.multiply(4, 0)).toBe(0);
});

test("Anything times zero is zero, example 2", () => {
  expect(calculator.multiply(999, 0)).toBe(0);
});

test("Multiplying large numbers works", () => {
  expect(calculator.multiply(48, 20)).toBe(960);
});

//calculator.divide tests
test("Two numbers can be divided, example 1", () => {
  expect(calculator.divide(4, 2)).toBe(2);
});

test("Two numbers can be divided, example 2", () => {
  expect(calculator.divide(6, 2)).toBe(3);
});

test("Non-even division is possible", () => {
  expect(calculator.divide(5, 2)).toBe(2.5);
});

test("One is the identity for division too", () => {
  expect(calculator.divide(5, 1)).toBe(5);
});

test("Dividing by zero gives infinity", () => {
  expect(calculator.divide(5, 0)).toBe(Infinity);
});

test("Division is not commutative", () => {
  expect(calculator.divide(5, 1)).not.toBe(calculator.divide(1, 5));
});

test("Dividing large numbers works", () => {
  expect(calculator.divide(480, 120)).toBe(4);
});
