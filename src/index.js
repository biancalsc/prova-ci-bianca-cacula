const { sum, subtract, multiply, divide, power } = require("./math");

function main() {
  console.log("=== Operações Matemáticas ===");
  console.log("Soma: 2 + 3 =", sum(2, 3));
  console.log("Subtração: 5 - 2 =", subtract(5, 2));
  console.log("Multiplicação: 4 × 3 =", multiply(4, 3));
  console.log("Divisão: 10 ÷ 2 =", divide(10, 2));
  console.log("Potência: 2 ^ 4 =", power(2, 4));
}

main();
