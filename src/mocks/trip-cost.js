export const tripCost = (price, priceAdd) => {
  let totalPrice = 0;
  let totalPriceAdd = 0;

  price.forEach((item) => {
    totalPrice += +item.innerHTML;
  });

  priceAdd.forEach((add) => {
    totalPriceAdd += +add.innerHTML;
  });

  let total = totalPrice + totalPriceAdd;

  return total;
};
