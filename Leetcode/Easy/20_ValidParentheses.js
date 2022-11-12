function validParentheses(s) {
  if (s.length % 2 !== 0) return false;
  let stack = [];
  for (let char of s) {
    if (char == '(' || char == '{' || char == '[') {
      stack.push(char);
    } else if (
      char == ')' &&
      !stack.length == 0 &&
      stack[stack.length - 1] === '('
    ) {
      stack.pop();
    } else if (
      char == '}' &&
      !stack.length == 0 &&
      stack[stack.length - 1] === '{'
    ) {
      stack.pop();
    } else if (
      char == ']' &&
      stack.length != 0 &&
      stack[stack.length - 1] === '['
    ) {
      stack.pop();
    } else {
      return false;
    }
  }

  return stack.length == 0;
}

module.exports = validParentheses;
