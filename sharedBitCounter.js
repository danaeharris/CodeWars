// In this Kata you need to write the method SharedBits that returns true if 2 integers share at least two '1' bits. For simplicity assume that all numbers are positive

// For example int seven = 7; //0111 int ten = 10; //1010 int fifteen = 15; //1111 SharedBits(seven, ten); //false SharedBits(seven, fifteen); //true SharedBits(ten, fifteen); //true

// seven and ten share only a single '1' (at index 3)
// seven and fifteen share 3 bits (at indexes 1, 2, and 3)
// ten and fifteen share 2 bits (at indexes 0 and 2)
// Hint: you can do this with just string manipulation, but binary operators will make your life much easier.

function sharedBits(a, b) {
    let aArray = a.toString(2).split("").reverse();
    let bArray = b.toString(2).split("").reverse();
    let sharedBitNum = 0;
    aArray.forEach((a, i) => {
        if (a === "1" & bArray[i] === "1") {
            sharedBitNum += 1;
        }
    })
    return sharedBitNum > 1;
}

