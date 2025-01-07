function greeter(person: string): string {
  return `Hello, ${person}!`;
}

function greeterArray(persons: string[]): string {
  return `Hello, ${persons.join(', ')}!`;
}

let user = ["Jane", "Doe"];
console.log(greeterArray(user)); // Correctly handles the array

let singleUser = "Jane";
console.log(greeter(singleUser)); // Correctly handles a single string