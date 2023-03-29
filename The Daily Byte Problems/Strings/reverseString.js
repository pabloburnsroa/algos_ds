/**

Given a string, reverse all of its characters and return the resulting string.

Ex: Given the following strings...
“Cat”, return “taC”
“The Daily Byte”, return "etyB yliaD ehT”
“civic”, return “civic”
 
 */
function reverseString(s) {
    var _a;
    var left = 0;
    var right = s.length - 1;
    while (left <= right) {
        _a = [s[right], s[left]], s[left] = _a[0], s[right] = _a[1];
        left++;
        right--;
    }
}
reverseString([""]);
