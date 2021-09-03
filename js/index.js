/** @format */

const validateTitle = (value) => {
  if (typeof value !== "string") {
    return "Incorrect input data";
  }

  if (value.length <= 2 || value.length >= 20) {
    return "INVALID";
  }

  if (value[0] !== value[0].toUpperCase() || !isNaN(value[0])) {
    return "INVALID";
  }
  return "VALID";
};

// console.log(validateTitle("Title"));
// console.log(validateTitle("s"));
// console.log(validateTitle("12title"));
// console.log(validateTitle("Title?"));
// console.log(validateTitle(false));

const sum = (arg1, arg2) => {
  if (typeof arg1 === "number" && arg1 % 15 === 0) {
    arg1 *= -1;
  }

  if (typeof arg2 === "number" && arg2 % 15 === 0) {
    arg2 *= -1;
  }

  let sum = 0;
  sum = Number(arg1) + Number(arg2);
  return sum;
};

// console.log(sum("25", 15));
// console.log(sum(41, "3"));
// console.log(sum("3", 45));
// console.log(sum("15", 15));

const checkNumber = (arg) => {
  const isPrime = arg % arg === 0 && arg > 1;
  const isEven = arg % 2 === 0;
  const isMultiple = arg % 10 === 0;
  return [isPrime, isEven, isMultiple];
};

// console.log(checkNumber(7));
// console.log(checkNumber(-10));
