function makeChange(amount) {
  const change = {};

  // Quarters
  change.q = Math.floor(amount / 25);
  amount %= 25;

  // Dimes
  change.d = Math.floor(amount / 10);
  amount %= 10;

  // Nickels
  change.n = Math.floor(amount / 5);
  amount %= 5;

  // Pennies
  change.p = amount;

  return change;
}
