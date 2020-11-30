function getCount(str) {
  let vowelsCount = 0;
  let strArray = str.split("");
  strArray.map((x)=>{
    if (x === "a" || x === "e" || x === "i" || x === "o" || x === "u"){
      vowelsCount = vowelsCount + 1;
    }
    return vowelsCount;
  })
  
  return vowelsCount;
}