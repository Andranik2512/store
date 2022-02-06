import * as actionTypes from "../constans/cartConstans";



const CART_INITIAL_STATE = {
  cartItems: [],
};

export const cartReducer = (state = CART_INITIAL_STATE, action:any) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      const item = action.payload;

      const existItem:any = state.cartItems.find((x:any) =>x.product === item.product);

      if (existItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((x:any) =>
            x.product === existItem.product ? item : x
          ),
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, item],
        };
      }
    case actionTypes.REMOVE_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter((x:any) => x.product !== action.payload),
      };
    default:
      return state;
  }
};