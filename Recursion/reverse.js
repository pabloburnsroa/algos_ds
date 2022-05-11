// Accept a string and returns a new string in reverse

function reverse(str) {
  if (str.length === 0) {
    return '';
  } else {
    return reverse(str.substring(1)) + str[0];
  }
}

const result1 = reverse('hello');
console.log(result1);
