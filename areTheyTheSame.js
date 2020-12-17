function comp(array1, array2){
    let truth = true;

    if (array1 === null || array2 === null || array1.length !== array2.length) {
        return false
    }
    if (array1.length === 0  && array2.length === 0 ){
        return truth;
    } else {
        let sortedArray1 = array1.sort((a, b)=> a - b);
        let sortedArray2 = array2.sort((a, b)=> a - b);
        sortedArray1.forEach((x, i)=>{
            if (sortedArray2[i] !== x * x) {
                truth = false;
            }
        })
        return truth;
    } 
}