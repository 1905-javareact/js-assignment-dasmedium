/* 10 Object Creation
Create an object using an object literal, constructor function, and es6 class.
The object should have the fields name and age.*/

let human = {
  name: "John",
  age: 29
};
function makeHuman(name, age) {
  return {
    name,
    age
  };
}
console.log(makeHuman("hello", 2));

class HumanClass {
  name;
  age;
  constructor(name: string, age: number) {
    (this.name = name), (this.age = age);
  }
}

let newHuman = new HumanClass("John", 29);

console.log(newHuman);
