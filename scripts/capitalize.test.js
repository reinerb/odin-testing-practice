import capitalize from "./capitalize";

test("First letter is capitalized, case 1", () => {
  expect(capitalize("asdf")).toBe("Asdf");
});

test("First letter is capitalized, case 2", () => {
  expect(capitalize("fDSA")).toBe("FDSA");
});

test("Capital first letter does not become lowercase", () => {
  expect(capitalize("Asdf")).toBe("Asdf");
});

test("Leading digits are not affected", () => {
  expect(capitalize("12fds")).toBe("12fds");
});

test("Leading punctuation is not affected", () => {
  expect(capitalize("!asdf")).toBe("!asdf");
});

test("Leading spaces are not affected", () => {
  expect(capitalize(" asdf")).toBe(" asdf");
});
