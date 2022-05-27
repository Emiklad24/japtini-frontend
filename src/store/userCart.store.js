import create from "zustand";
import { persist, devtools } from "zustand/middleware";
import { storeVersion } from "@store/storeHelpers";

let store = (set, get) => ({
  cart: [],

  addToCart: (payload) => {
    //check if product is already in cart
    const currentIndexOfProductIfExists = get().cart.findIndex(
      (element) => element.id === payload.id
    );

    if (currentIndexOfProductIfExists !== -1) {
      let newCart = get().cart;
      let existingProductInCart = get().cart[currentIndexOfProductIfExists];

      //new product with quantity incremented
      const addQuantity = {
        ...existingProductInCart,
        quantity: existingProductInCart.quantity + 1,
      };

      newCart[currentIndexOfProductIfExists] = addQuantity;

      set(() => ({ cart: newCart }));
    } else {
      const newCart = [payload, ...get().cart];
      set(() => ({ cart: newCart }));
    }
  },

  clearCart: () => {
    set(() => ({ cart: [] }));
  },
  removeProductFromCart: (payload) => {
    const newCart = get().cart.filter((cartItem) => cartItem.id !== payload.id);
    set(() => ({ cart: newCart }));
  },
});

store = devtools(store);

store = persist(store, {
  name: "USER_CART_STORE",
  version: storeVersion,
});

const useUserCart = create(store);

export default useUserCart;
