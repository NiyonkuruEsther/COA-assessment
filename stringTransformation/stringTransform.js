function transformString(input) {
  let output = input;
  const length = input.length;

  if (length % 15 === 0) {
    // Reverse and then convert to ASCII
    output = output.split("").reverse().join("");
    output = output
      .split("")
      .map((char) => char.charCodeAt(0))
      .join(" ");
  } else if (length % 3 === 0) {
    // Reverse the string
    output = output.split("").reverse().join("");
  } else if (length % 5 === 0) {
    // Convert each character to ASCII
    output = output
      .split("")
      .map((char) => char.charCodeAt(0))
      .join(" ");
  }

  return output;
}

// Test cases
console.log(transformString("Hamburger")); // "regrubmaH"
console.log(transformString("Pizza")); // "80 105 122 122 97"
console.log(transformString("Chocolate Chip Cookie")); // "eikooCpihCetalocohC"
console.log(transformString("Burger")); // "regruB"
console.log(transformString("Fries")); // "70 114 105 101 115"
