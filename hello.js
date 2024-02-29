const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const items = [];

console.log(items);
console.log(items.length);

function addItemsToList() {
  if (items.length === 5) {
    rl.close();
    console.log(items);
    return console.log("List is full");
  }
  rl.question("Enter an item: ", function (product) {
    items.push(item);
    console.log("Items: ", items);
    return addItemsToList();
  });

  const productIndex = items.findIndex((item) => item === product);
  if (productIndex !== -1) {
    console.log("Item already exists");
    return addItemsToList();
  }
}
addItemsToList();
