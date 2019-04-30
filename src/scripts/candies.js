const candies = [
  {
    name: "Lollipop",
    price: 2.99
  },
  {
    name: "Tootsie Roll",
    price: 1.49
  },
  {
    name: "Sugar Daddy",
    price: 2.49
  }
];

const firstCheapCandy = candies.find(candy =>
    candy.price < 2.00
);

console.table(firstCheapCandy)