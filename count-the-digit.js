function nbDig(n, d) {
  // write a for loop that squares each number and makes numbers strings.
  //push squared version to an array and array.split them. ["1", "2",...]
  //array.filter for d. array.length.
  let counter = 0;
  for (let i = 0; i <= n; i++) {
    let num = i * i;
    counter += num
      .toString()
      .split("")
      .filter((x) => x === d.toString()).length;
  }
  return counter;
}
