const people = [
  { name: "John", age: 25, gender: "male" },
  { name: "Jane", age: 22, gender: "female" },
  { name: "Alice", age: 30, gender: "female" },
  { name: "Bob", age: 27, gender: "male" },
];

const res = people.filter((item) => item.gender !== "female");
const res1 = people.filter((item) => item.gender === "female");
console.log(res);
// console.log(res1);
