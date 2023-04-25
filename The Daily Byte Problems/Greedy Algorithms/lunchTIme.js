function lunchTime(items) {
  let balanced = 0;
  let meals = 0;
  for (let i = 0; i < items.length; i++) {
    if (items[i] === 'F') {
      balanced -= 1;
    } else {
      balanced += 1;
    }
    if (balanced === 0) meals += 1;
  }
  return meals;
}

console.log(lunchTime('FDFDFD'));
console.log(lunchTime('FDFFDFDD'));
