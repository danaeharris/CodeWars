// Friday 13th or Black Friday is considered as unlucky day. Calculate how many unlucky days are in the given year.
// Find the number of Friday 13th in the given year.
// Input: Year in Gregorian calendar as integer.
// Output: Number of Black Fridays in the year as an integer.
// Examples:
// unluckyDays(2015) == 3
// unluckyDays(1986) == 1

function unluckyDays(year){
    let unluckyDays = 0;
    let month = 0;
    while (month < 12) {
      let newDate = new Date(year, month, 13);
      if (newDate.getDay() === 5) {
        unluckyDays += 1;
      }
      month += 1;
    }
    return unluckyDays;
  }