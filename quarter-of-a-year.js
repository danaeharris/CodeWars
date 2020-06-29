const quarterOf = (month) => {
  // check if month is <= 3, <=6, <=9, <=12
  return month <= 3 ? 1 : month <= 6 ? 2 : month <= 9 ? 3 : 4;
};
