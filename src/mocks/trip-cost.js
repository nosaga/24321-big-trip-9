export const tripCost = (price) => {
  let totalPrice = 0;
  price.forEach((item) => {
    totalPrice += +item.innerHTML;
  });

  return totalPrice;
};
