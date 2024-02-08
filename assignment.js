function calculateMoney(ticketSale) {
  if (typeof ticketSale !== "number" || ticketSale < 0) {
    return "Invalid Number";
  } else {
    return ticketSale * 120 - (500 + 8 * 50);
  }
}

function checkName(name) {
  if (typeof name !== "string") {
    return "invalid";
  } else {
    const lowercaseName = name.toLowerCase();
    const lastDigit = lowercaseName[name.length - 1];
    if (
      lastDigit === "a" ||
      lastDigit === "y" ||
      lastDigit === "i" ||
      lastDigit === "e" ||
      lastDigit === "o" ||
      lastDigit === "u" ||
      lastDigit === "w"
    ) {
      return "Good Name";
    } else {
      return "Bad Name";
    }
  }
}

function deleteInvalids(array) {
  if (!Array.isArray(array)) {
    return "Invalid Array";
  }
  const validNumbers = [];
  for (let x of array) {
    if (typeof x === "number" && !isNaN(x)) {
      validNumbers.push(x);
    }
  }
  return validNumbers;
}


function password(obj) {
  if (!("name" in obj) || !("birthYear" in obj) || !("siteName" in obj)) {
    return "invalid";
  } else if (
    typeof obj.birthYear !== "number" ||
    !(obj.birthYear >= 1000 && obj.birthYear < 10000)
  ) {
    return "invalid";
  } else {
    const password =
      obj.siteName.charAt(0).toUpperCase() +
      obj.siteName.slice(1) +
      "#" +
      obj.name +
      "@" +
      obj.birthYear;
    return password;
  }
}

function monthlySavings(arr, livingCost) {
  if (!Array.isArray(arr)) {
    return "invalid input";
  }
  if (typeof livingCost !== "number") {
    return "invalid input";
  }
  let sum = 0;
  for (x of arr) {
    if (x >= 3000) {
      x = x - x * (20 / 100);
    }
    sum += x;
  }
  let savings = sum - livingCost;
  if (savings >= 0) {
    return savings;
  } else {
    return "earn more";
  }
}

console.log(calculateMoney(10));
console.log(checkName("199"));
console.log(
  deleteInvalids([
    1,
    null,
    undefined,
    18,
    -19,
    NaN,
    "12",
    [1, 2],
    { ob: "lala" },
  ])
);


console.log(monthlySavings([1000, 2000, 3000], 5400));
console.log(password({name:"Shawon",birthYear:1999,siteName:"google"}))