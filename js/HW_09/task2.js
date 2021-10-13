/** @format */

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
