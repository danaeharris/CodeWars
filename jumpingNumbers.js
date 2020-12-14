let jumpingNumber = (n) => {
    let numArray = n.toString().split('');
    let previousNum = numArray[0] - 1;
    let jumping = true;
    numArray.forEach((num, i)=>{
        let currentNum = parseInt(num);
        if (currentNum + 1 === previousNum || currentNum - 1 === previousNum){
            previousNum = currentNum;
        }else {
            jumping = false;
        }
    })
    return jumping ? 'Jumping!!' : "Not!!";
  }