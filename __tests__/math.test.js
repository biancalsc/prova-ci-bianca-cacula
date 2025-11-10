const { sum, subtract, multiply, divide, power } = require("../src/math");

describe("Operações matemáticas básicas", () => {
  test("soma dois números corretamente", () => {
    expect(sum(2, 3)).toBe(5);
  });

  test("subtrai dois números corretamente", () => {
    expect(subtract(5, 2)).toBe(3);
  });

  test("multiplica dois números corretamente", () => {
    expect(multiply(4, 3)).toBe(12);
  });

  test("divide dois números corretamente", () => {
    expect(divide(10, 2)).toBe(5);
  });

  test("gera erro ao dividir por zero", () => {
    expect(() => divide(5, 0)).toThrow("Divisão por zero não é permitida");
  });

  test("calcula potenciação corretamente", () => {
    expect(power(2, 4)).toBe(16);
  });
});
