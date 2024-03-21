const addDecimals = (num) => {
  return (Math.round(num * 100) / 100).toFixed(2);
};
const updateCart = (state) => {
  //calculate item's price
  state.itemPrice = addDecimals(
    state.cartItems.reduce((acc, item) => acc + item.price * item.qty, 0)
  );
  state.shippingPrice = Number(addDecimals(state.itemsPrice > 100 ? 0 : 10));
  //Calculate tax price
  state.taxPrice = Number(addDecimals(0.15 * state.itemPrice)).toFixed(2);
  console.log(state.taxPrice);
  state.totalPrice = (
    Number(Number(state.itemPrice)) +
    Number(Number(state.shippingPrice)) +
    Number(Number(state.taxPrice))
  ).toFixed(2);
  localStorage.setItem("cart", JSON.stringify(state));
  return state;
};
export { updateCart, addDecimals };
