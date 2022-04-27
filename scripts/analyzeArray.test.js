import analyzeArray from "./analyzeArray";

test("Empty array throws an error", () => {
  expect(() => {
    analyzeArray([]);
  }).toThrow("Arrays of zero length are not supported");
});

test("Arrays with one element", () => {
  let expected = {
    average: 5,
    min: 5,
    max: 5,
    length: 1,
  };
  expect(analyzeArray([5])).toStrictEqual(expected);
});

test("Arrays with two elements", () => {
  let expected = {
    average: 5,
    min: 4,
    max: 6,
    length: 2,
  };
  expect(analyzeArray([4, 6])).toStrictEqual(expected);
});

test("Arrays with two equal elements", () => {
  let expected = {
    average: 5,
    min: 5,
    max: 5,
    length: 2,
  };
  expect(analyzeArray([5, 5])).toStrictEqual(expected);
});

test("Long arrays", () => {
  let expected = {
    average: 4,
    min: 1,
    max: 7,
    length: 7,
  };
  expect(analyzeArray([1, 2, 3, 4, 5, 6, 7])).toStrictEqual(expected);
});
