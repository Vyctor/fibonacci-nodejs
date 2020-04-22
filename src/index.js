"use strict";

const fibonacci = () => {
  let contador = 0;
  let fibonacciArray = [];

  while (contador <= 15) {
    fibonacciArray.push(fib(contador));
    contador++;
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
  return fibonacci().includes(num);
};

module.exports = {
  fibonacci,
  isFibonnaci,
};
