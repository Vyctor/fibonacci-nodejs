"use strict";

const fibonacci = () => {
  let index = 0;
  let fibonacciArray = [];

  while (fib(index) <= 350) {
    fibonacciArray.push(fib(index));
    index++;
  }
  return fibonacciArray;
};

const fib = (n) => {
  if (n < 2) {
    return n;
  }
  return fib(n - 1) + fib(n - 2);
};

const isFibonnaci = (num) => fibonacci().includes(num);

module.exports = {
  fibonacci,
  isFibonnaci,
};
