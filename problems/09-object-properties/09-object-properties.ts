/* 9. Object Properties
Define function objectProperties(someObj)
Print every property and it's value. */
function objectProperties(someObj: object) {
  for (let prop in someObj) {
    let propValue = someObj[prop];
    console.log(`${prop}: ${propValue}`);
  }
}

let obj = {
  hello: "hello",
  f2: "world"
};
objectProperties(obj);
