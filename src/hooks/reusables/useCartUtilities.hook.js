import useUserCart from "@store/userCart.store";
import useSound from "use-sound";
import shallow from "zustand/shallow";

export const useCartUtilities = () => {
  const { addToCart, cart, removeProductFromCart } = useUserCart(
    (state) => ({
      cart: state.cart,
      addToCart: state.addToCart,
      removeProductFromCart: state.removeProductFromCart,
    }),
    shallow
  );
  const [play] = useSound("/sound.mp3");

  const addToCartHandler = (product) => {
    addToCart({ ...product });
    play();
  };

  const calculateSubTotal = () => {
    let subtotal = 0;

    for (let i = 0; i < cart.length; i++) {
      const newPrice = cart[i].price * cart[i].quantity;
      subtotal = subtotal + newPrice;
    }

    return subtotal;
  };

  return {
    addToCartHandler,
    cart,
    calculateSubTotal,
    removeProductFromCart,
  };
};
