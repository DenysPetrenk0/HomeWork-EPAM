"use strict";
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
                }
                else {
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
        let number = parseInt(array1.pop() || "0") + parseInt(array2.pop() || "0");
        if (number > 9) {
            number = number - 10 + increment;
            increment = 1;
        }
        else {
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
let listOfPosts2 = [
    {
        id: 1,
        post: "some post1",
        title: "title 1",
        author: "Ivanov",
        comments: [
            {
                id: 1.1,
                comment: "some comment1",
                title: "title 1",
                author: "Rimus",
            },
            {
                id: 1.2,
                comment: "some comment2",
                title: "title 2",
                author: "Uncle",
            },
        ],
    },
    {
        id: 2,
        post: "some post2",
        title: "title 2",
        author: "Ivanov",
        comments: [
            {
                id: 1.1,
                comment: "some comment1",
                title: "title 1",
                author: "Rimus",
            },
            {
                id: 1.2,
                comment: "some comment2",
                title: "title 2",
                author: "Uncle",
            },
            {
                id: 1.3,
                comment: "some comment3",
                title: "title 3",
                author: "Rimus",
            },
        ],
    },
    {
        id: 3,
        post: "some post3",
        title: "title 3",
        author: "Rimus",
    },
    {
        id: 4,
        post: "some post4",
        title: "title 4",
        author: "Uncle",
    },
];
