//https://www.codewars.com/kata/5a092d9e46d843b9db000064

function solve(arr) {
  //do a for each loop that checks if currentItem's opposite exists.
  //if not return num
  let num = null;
  arr.forEach((item, i) => {
    if (!arr.includes(-item)) {
      num = item;
    }
  });
  return num;
}
