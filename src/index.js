"use strict";

const fibonacci = () => {
  let contador = 0;
  let fibonacciNumber = 0;
  let fibonacciArray = [];

  while (true) {
    fibonacciNumber = fib(contador);
    if (fibonacciNumber > 14) {
      break;
    }
    contador++;
    fibonacciArray.push(fibonacciNumber);
  }

  return fibonacciArray;
};

const fib = (n) => {
  if (n < 2) {
    return n;
  }
  return fib(n - 1) + fib(n - 2);
};

const isFibonnaci = (num) => {
  return fibonacci().includes(num) ? true : false;
};

module.exports = {
  fibonacci,
  isFibonnaci,
};
