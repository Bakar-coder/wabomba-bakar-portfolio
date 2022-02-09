export const getTotal = (cart: any[]): number =>
  parseFloat(
    cart
      .map(item => parseFloat(item.price))
      .reduce((a: number, b: number) => a + b)
      .toFixed(2)
  );

export const getDiscount = (cart: any[]): number =>
  parseFloat(
    cart
      .map(item => parseFloat(item.discount))
      .reduce((a: number, b: number) => a + b)
      .toFixed(2)
  );

export const getGrandTotal = (cart: any[]): number => {
  const total = getTotal(cart);
  const discount = getDiscount(cart);
  return parseFloat((total - discount).toFixed(2));
};
