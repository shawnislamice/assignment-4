function calculateMoney(ticketSale) {
  if (typeof ticketSale !== "number" || ticketSale < 0) {
    return "Invalid Number";
  } else {
    return ticketSale * 120 - (500 + (8 * 50));
  }
}
const result = calculateMoney(-130);
console.log(result);
