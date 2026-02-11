const players = [
  { name: "Dhoni", role: "wk", price: 1200 },
  { name: "Virat", role: "wk", price: 1300 },
  { name: "Bumra", role: "wk", price: 1400 },
  { name: "Rohit", role: "wk", price: 1500 },
];

const totalPrice = players.reduce((sum, p) => sum + p.price, 0);
console.log(totalPrice);
