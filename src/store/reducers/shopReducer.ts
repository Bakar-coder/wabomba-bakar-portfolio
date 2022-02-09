const shopState = {
  cart: null,
  product: null,
  products: null,
  order: null,
  orders: null,
  shipping: null,
  shipping2: null,
  cartTotal: 0,
  totalDiscount: 0,
  grandTotal: 0,
  coupon: null,
};

export const shopReducer = (state = shopState, action: any) => {
  const { type, payload } = action;

  switch (type) {
    default:
      return state;
  }
};
