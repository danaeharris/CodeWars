// Count the number of Duplicates
// Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

// Example
// "abcde" -> 0 # no characters repeats more than once
// "aabbcde" -> 2 # 'a' and 'b'
// "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
// "indivisibility" -> 1 # 'i' occurs six times
// "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
// "aA11" -> 2 # 'a' and '1'
// "ABBA" -> 2 # 'A' and 'B' each occur twice

function duplicateCount(text) {


    const duplicateCharacters = [];
    const textItems = text.toLowerCase().split("");
    textItems.forEach((textItem, i) => {
        //loop through array and compare each item to text item
        textItems.forEach((otherTextItem, j) => {
            if (textItem === otherTextItem) {
                //Save that we found a duplicate and save the character that was duplicated.
                //Don't do this if we already found a duplicate for that character.

                //and don't do this if the duplicate we found is ourself.
                if (!duplicateCharacters.includes(textItem) && i !== j) {
                    duplicateCharacters.push(textItem);
                }
            }
        })
    })
    return duplicateCharacters.length;


}