/** @format */

// ==================================================TASK 1=============================================================================

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

// ==================================================TASK 2=============================================================================
const json1 = "role: student, company: EPAM, mentor: cool mentor";
const json2 = '{"role": "student", "company": "EPAM","mentor": "cool mentor"}';

const parseJSON = (json) => {
  try {
    return JSON.parse(json);
  } catch (error) {
    return null;
  }
};

// console.log(parseJSON(json1));
// console.log(parseJSON(json2));

// ==================================================TASK 3=============================================================================
const json3 = '{"name": "student", "company": "EPAM"}';
const json4 = 'name": "student", "company": "EPAM';
const json5 = '{"name": "student", "surname": "Cool"}';

const parseJSON = (json) => {
  window.onerror = (message) => {
    console.log(message);
    return true;
  };
  const result = JSON.parse(json);

  if (!result.name || !result.company) {
    throw new Error("got invalid user data");
  } else {
    return result;
  }
};

// console.log(parseJSON(json3));
// console.log(parseJSON(json4));
// console.log(parseJSON(json5));
