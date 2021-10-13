/** @format */

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
