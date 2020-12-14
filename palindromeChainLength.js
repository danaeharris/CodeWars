let palindromeChainLength = function(n) {
    let num = n;
    let reverseNum = parseInt(num.toString().split('').reverse().join(''));
    let i = 0;
    if (num === reverseNum){
      return 0;
    } else {
        while (num !== reverseNum) {
          num = num + reverseNum;
          reverseNum = parseInt(num.toString().split('').reverse().join(''));
          i += 1;
        }
    }
    return i
    };