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

