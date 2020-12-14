// Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

// Examples:

// solution('abc') // should return ['ab', 'c_']
// solution('abcdef') // should return ['ab', 'cd', 'ef']

let solution = (str) => {
   let stringArray = str.split('');
   let newArray = [];
   let previousStr;
   stringArray.forEach((str, i)=>{
    if (stringArray.length % 2 !== 0 && stringArray.length === i + 1) {
            newArray.push(`${str}_`);
    } else if (i % 2 === 0){
        previousStr = str;
    } else {
        newArray.push(`${previousStr}${str}`);
    }
   });
   return newArray;
}

