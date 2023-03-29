function validPalindrome(s: string): Boolean {
  let modifiedStr = s.toLowerCase().replace(/[^a-z]/g, '');
  console.log(modifiedStr);
  return false;
}

validPalindrome('leVel123');
