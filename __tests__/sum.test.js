const { sum } = require("../src/sum");

test("deve somar dois números corretamente", () => {
  expect(sum(2, 3)).toBe(5);
});

test("deve somar números negativos", () => {
  expect(sum(-2, -3)).toBe(-5);
});
