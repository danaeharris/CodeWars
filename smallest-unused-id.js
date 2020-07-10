function nextId(ids) {
  //call id.every to see if any id = 0 if so, add 1...
  let n = 0;
  while (ids.includes(n)) {
    n++;
  }
  return n;
}
