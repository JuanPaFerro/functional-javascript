function doubleAll(numbers) {
  var result = [];
  numbers.map((el) => result.push(el * 2));
  return result;
}

module.exports = doubleAll;
