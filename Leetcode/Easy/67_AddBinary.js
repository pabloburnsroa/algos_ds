const { createIf } = require('typescript');

const addBinary = (a, b) => {
  let result = '';
  let carry = 0;

  while (a || b || carry) {
    // use Unary plus(+) to convert its operand to a number
    const sum = +a.slice(-1) + +b.slice(-1) + carry;

    if (sum > 1) {
      result = (sum % 2) + result;
      carry = 1;
    } else {
      result = sum + result;
      carry = 0;
    }
    a = a.slice(0, -1);
    b = b.slice(0, -1);
  }
  return result;
};

let binary1 = '1010';
let binary2 = '1011';

console.log(addBinary(binary1, binary2));
