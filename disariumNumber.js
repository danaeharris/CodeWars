let disariumNumber = (n) => {
    let num = n;
    let newNum = 0;
    let numArray = num.toString().split('');
    numArray.forEach((x, i)=>{
        x = parseInt(x);
        newNum = newNum + Math.pow(x, i + 1);
    });
   return newNum === num ? "Disarium !!" : "Not !!";
  }