function sum(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    throw new Error("Divisão por zero não é permitida");
  }
  return a / b;
}

function power(a, b) {
  return Math.pow(a, b);
}

module.exports = { sum, subtract, multiply, divide, power };
