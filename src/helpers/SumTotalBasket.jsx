export const sumTotalBasket = (list) => {
  return list?.reduce((accumulator, item) => {
    const itemTotal = +item?.price * item?.count;
    return accumulator + itemTotal;
  }, 0);
};

export const sumTotalBasketOldPrice = (list) => {
  return list?.reduce((accumulator, item) => {
    const itemTotal = (+item?.oldPrice || +item?.price) * item?.count;
    return accumulator + itemTotal;
  }, 0);
};
