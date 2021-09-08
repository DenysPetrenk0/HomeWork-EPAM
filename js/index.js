/** @format */

// ============================================= HW_02=======================================================

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

const checkNumber = (arg) => {
  const isPrime = arg % arg === 0 && arg > 1;
  const isEven = arg % 2 === 0;
  const isMultiple = arg % 10 === 0;
  return [isPrime, isEven, isMultiple];
};

// ============================================= HW_03=======================================================

const tickets = (persons) => {
  let change = 0;
  const ticketCost = 25;

  for (const person of persons) {
    const pay = +person;

    if (change < pay - ticketCost) {
      return "NO. Vasya will not have enough money to give change to 100 dollars";
    }

    change += ticketCost;
  }

  return "YES";
};

console.log(tickets([25, 100]));

const getSum = (number1, number2) => {
  let sum = [];
  let increment = 0;
  let array1 = number1.toString().split("");
  let array2 = number2.toString().split("");

  while (array1.length > 0 || array2.length > 0) {
    let number = parseInt(array1.pop() || 0) + parseInt(array2.pop() || 0);
    if (number >= 10) {
      number = number - 10;
      increment = 1;
    } else {
      number += increment;
      increment = 0;
    }
    sum.unshift(number);
  }
  return sum.join("");
};

const getQuantityPostsByAuthor = (listOfPosts, authorName) => {
  let post = 0;
  let comm = 0;
  listOfPosts.forEach((item) => {
    if (item.author === authorName) {
      post += 1;
    }
    if (item.comments) {
      item.comments.forEach((comment) => {
        if (comment.author === authorName) {
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
