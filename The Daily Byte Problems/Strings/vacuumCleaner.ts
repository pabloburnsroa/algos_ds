function vacuumCleaner(s: String) {
  let pos = 0;
  for (let i = 0; i < s.length; i++) {
    switch (s[i]) {
      case 'L':
        pos--;
        break;
      case 'D':
        pos--;
        break;
      case 'U':
        pos++;
        break;
      case 'R':
        pos++;
        break;
      default:
        break;
    }
  }
  return pos == 0;
}

vacuumCleaner('URURD');
