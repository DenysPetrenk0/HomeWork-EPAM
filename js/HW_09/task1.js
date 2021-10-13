/** @format */

const test = (func, value, name) => {
  const start = performance.now();
  func(value);
  const timePassed = (performance.now() - start).toFixed(4);
  return console.log(`${name} - ${timePassed} ms`);
};

const calculateFibByCycle = (num) => {
  if (!Number.isInteger(num)) {
    return "Passed argument is not a number";
  }
  let prev = 1;
  let next = 1;
  for (let i = 3; i <= num; i++) {
    let sum = prev + next; //calculate the next element of the sequence
    prev = next;
    next = sum; //element is remembered does not require recalculation
  }
  return next;
};

const calculateFibByRecursion = (num) => {
  if (!Number.isInteger(num)) {
    return "Passed argument is not a number";
  }
  if (num <= 1) {
    return num;
  } else {
    return calculateFibByRecursion(num - 1) + calculateFibByRecursion(num - 2); //all elements of the sequence are recalculated
  }
};
test(calculateFibByCycle, 75, "Cycle");
test(calculateFibByRecursion, 20, "Recursion");
