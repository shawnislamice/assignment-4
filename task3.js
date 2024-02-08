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

const numbers = { num: [1, 2, 3] };  ;  
const result = deleteInvalids(numbers);
console.log(result);
