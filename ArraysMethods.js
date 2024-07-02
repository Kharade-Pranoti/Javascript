// create an array
let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];

// print all the elements from the array
console.log(companies);

// remove the first company from the array
console.log(companies.shift());
console.log(companies);

// remove Uber and add Ola in it's place
console.log(companies.splice(1, 1, "Ola"));
console.log(companies);

// add amazon at last
companies.push("amazon");
console.log(companies);
