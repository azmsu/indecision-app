var nameVar = "Andy";
var nameVar = "Other";
console.log("nameVar", nameVar);

let nameLet = "Test";
nameLet = "Julia";
console.log("nameLet", nameLet);

const nameConst = "Frank";
console.log("nameConst", nameConst);

// Block scoping

const fullName = "Andy Su";
let firstName;

if (fullName) {
  firstName = fullName.split(" ")[0];
  console.log(firstName);
}

console.log(firstName);
