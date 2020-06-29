function getDrinkByProfession(param) {
  let drink = "";
  switch (param.toLowerCase()) {
    case "jabroni":
      drink = "Patron Tequila";
      break;
    case "school counselor":
      drink = "Anything with Alcohol";
      break;
    case "programmer":
      drink = "Hipster Craft Beer";
      break;
    case "bike gang member":
      drink = "Moonshine";
      break;
    case "politician":
      drink = "Your tax dollars";
      break;
    case "rapper":
      drink = "Cristal";
      break;
    default:
      drink = "Beer";
  }
  return drink;
}
