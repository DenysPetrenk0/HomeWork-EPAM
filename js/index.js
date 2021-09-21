/** @format */

// ============================================= HW_02=======================================================

const validateTitle = (value) => {
  const validSingl = [" ", "!", ":", "-", "?", ".", ","];
  let result = "VALID";
  if (typeof value !== "string") {
    result = "Incorrect input data";
    return result;
  }

  if (
    value.length < 2 ||
    value.length > 20 ||
    value[0] !== value[0].toUpperCase() ||
    !isNaN(value[0])
  ) {
    result = "INVALID";
  }

  if (validSingl.includes(value[0])) {
    result = "VALID";
  }

  return result;
};

const checksArg = (arg) => {
  if (typeof arg === "number" && arg % 3 === 0 && arg % 5 === 0) {
    arg *= -1;
  }
  return arg;
};

const sum = (arg1, arg2) => {
  arg1 = checksArg(arg1);
  arg2 = checksArg(arg2);

  let sum = 0;
  sum = Number(arg1) + Number(arg2);
  return sum;
};

const checkIsPrime = (arg) => {
  let result = true;
  for (let i = 2; i < arg; i++) {
    if (arg % i === 0) {
      result = false;
    }
  }
  return result;
};

const checkNumber = (arg) => {
  const arr = [];
  const isMultiple = arg % 10 === 0;
  if (isMultiple) {
    arr.push(false);
    arr.push(true);
    arr.push(true);
    return arr;
  }

  const isPrime = arg < 0 ? false : checkIsPrime(arg);

  if (isPrime && arg !== 2 && arg !== 0) {
    arr.push(true);
    arr.push(false);
    arr.push(false);
    return arr;
  }

  const isEven = arg % 2 === 0;

  arr.push(isPrime);
  arr.push(isEven);
  arr.push(isMultiple);
  return arr;
};

// ============================================= HW_03=======================================================

const tickets = (persons) => {
  let twentyFiveDollar = 0;
  let fiftyDollars = 0;

  for (let i = 0; i < persons.length; i++) {
    switch (persons[i]) {
      case 25:
        twentyFiveDollar++;
        break;
      case 50:
        twentyFiveDollar--;
        fiftyDollars++;
        break;
      case 100:
        if (fiftyDollars > 0) {
          twentyFiveDollar--;
          fiftyDollars--;
        } else {
          twentyFiveDollar -= 3;
        }
        break;
      default:
        return "Invalid input";
    }

    if (twentyFiveDollar < 0 || fiftyDollars < 0) {
      return "NO";
    }
  }
  return "YES";
};

// console.log(tickets([25, 25, 50])); //+
// console.log(tickets([25, 100])); //-
// console.log(tickets([25, 25, 50, 100])); //+
// console.log(tickets([25, 25, 50, 100, 25, 25, 50, 100])); //+
// console.log(tickets([25, 50, 50])); //-
// console.log(tickets([25, 50, 25, 50, 100, 50])); //-

const getSum = (number1, number2) => {
  let sum = [];
  let increment = 0;
  let array1 = number1.toString().split("");
  let array2 = number2.toString().split("");

  while (array1.length > 0 || array2.length > 0) {
    let number = parseInt(array1.pop() || 0) + parseInt(array2.pop() || 0);

    if (number > 9) {
      number = number - 10 + increment;
      increment = 1;
    } else {
      number += increment;
      increment = 0;
    }
    sum.unshift(number);
  }
  if (increment) {
    sum.unshift(increment);
  }
  return sum.join("");
};

// console.log(getSum("119", "11119"));
// console.log(getSum("9999", "456"));
// console.log(getSum("99", "1"));
// console.log(getSum("1", "99"));
// console.log(getSum("99", "11"));
// console.log(getSum("199", "99"));

const getQuantityPostsByAuthor = (listOfPosts, authorName) => {
  let post = 0;
  let comm = 0;
  listOfPosts.forEach((item) => {
    if (item.author.includes(authorName)) {
      post += 1;
    }
    if (item.comments) {
      item.comments.forEach((comment) => {
        if (comment.author.includes(authorName)) {
          comm += 1;
        }
      });
    }
  });
  return `Post:${post},comments:${comm}`;
};

// let listOfPosts2 = [
//   {
//     id: 1,
//     post: "some post1",
//     title: "title 1",
//     author: "Ivanov",
//     comments: [
//       {
//         id: 1.1,
//         comment: "some comment1",
//         title: "title 1",
//         author: "Rimus",
//       },
//       {
//         id: 1.2,
//         comment: "some comment2",
//         title: "title 2",
//         author: "Uncle",
//       },
//     ],
//   },
//   {
//     id: 2,
//     post: "some post2",
//     title: "title 2",
//     author: "Ivanov",
//     comments: [
//       {
//         id: 1.1,
//         comment: "some comment1",
//         title: "title 1",
//         author: "Rimus",
//       },
//       {
//         id: 1.2,
//         comment: "some comment2",
//         title: "title 2",
//         author: "Uncle",
//       },
//       {
//         id: 1.3,
//         comment: "some comment3",
//         title: "title 3",
//         author: "Rimus",
//       },
//     ],
//   },
//   {
//     id: 3,
//     post: "some post3",
//     title: "title 3",
//     author: "Rimus",
//   },
//   {
//     id: 4,
//     post: "some post4",
//     title: "title 4",
//     author: "Uncle",
//   },
// ];

// ============================================= HW_04=======================================================

let complexFunction = function (arg1, arg2) {
  return arg1 + arg2;
};

const cache = (func) => {
  const cache = {};
  return (...args) => {
    const cachedValue = args;
    if (cachedValue in cache) {
      console.log("from cache");
      return cache[cachedValue];
    } else {
      cache[cachedValue] = func(...args);
      console.log("new");
      return cache[cachedValue];
    }
  };
};

const cachedFunction = cache(complexFunction);

const ladder = {
  step: 0,

  up() {
    this.step += 1;
    return this;
  },

  down() {
    this.step -= 1;
    return this;
  },

  showStep() {
    console.log(this.step);
    this.step = 0;
    return this;
  },
};

// ladder.up().up().down().up().showStep();
// ladder.up().up().down().up().showStep().down().up().showStep();

const mathSum = (args) => {
  return args.reduce.call(args, (arg, relust) => relust + arg, 0);
};

const mathMul = (args) => {
  return args.reduce.call(args, (arg, relust) => relust * arg, 1);
};

const applyAllES6 = (func, ...args) => func.call(null, args);

// console.log(applyAllES6(mathSum, 1, 2, 3, 2, 3));
// console.log(applyAllES6(mathMul, 2, 3, 5, 5));

function applyAll(func) {
  var args = [].slice.call(arguments, 1);
  return func.call(null, args);
}

// console.log(applyAll(mathSum, 1, 2, 3));
// console.log(applyAll(mathMul, 2, 3, 4));
