// Definition
// Jumping number is the number that All adjacent digits in it differ by 1.

// Task
// Given a number, Find if it is Jumping or not .

// Notes
// Number passed is always Positive .

// The difference between ‘9’ and ‘0’ is not considered as 1 .

// All single digit numbers are considered as Jumping numbers.

// jumpingNumber(79) ==> return "Not!!"
// Explanation:
// Adjacent digits don't differ by 1
// jumpingNumber(23) ==> return "Jumping!!"
// Explanation:
// Adjacent digits differ by 1

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