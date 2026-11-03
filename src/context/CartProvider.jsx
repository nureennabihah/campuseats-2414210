import { CartContext } from "./cart-context.js";
import { useLocalStorage } from "../hooks/useLocalStorage.js";

export function CartProvider({ children }) {
  const [cart, setCart] = useLocalStorage("cart", []); // lines of {item, qty}
  const [orders, setOrders] = useLocalStorage("orders", []);

  // header badge: total quantity
  const count = cart.reduce((sum, line) => sum + line.qty, 0);
  // compute the total before clearing the cart, otherwise it would be RM 0.00
  const total = cart.reduce((sum, line) => sum + line.item.price * line.qty, 0);

  // B3: a real cart. Adding an item already in the cart increases its qty.
  function addToCart(item) {
    setCart((prevCart) => {
      const existingLine = prevCart.find((line) => line.item.id === item.id);

      if (existingLine) {
        // already in the cart: copy every line, and add 1 to the matching one
        return prevCart.map((line) =>
          line.item.id === item.id ? { ...line, qty: line.qty + 1 } : line,
        );
      }
      return [...prevCart, { item, qty: 1 }];
    });
  }

  function changeQty(itemId, delta) {
    setCart(
      (prevCart) =>
        prevCart
          .map((line) =>
            line.item.id === itemId ? { ...line, qty: line.qty + delta } : line,
          )
          .filter((line) => line.qty > 0), // qty 0 means the line disappears
    );
  }

  // keep every line except the one being removed
  function removeFromCart(itemId) {
    setCart((prevCart) => prevCart.filter((line) => line.item.id !== itemId));
  }

  // B5: called by CheckoutForm once the form is valid
  function placeOrder(details) {
    const order = {
      id: Date.now(),
      ...details,
      lines: cart,
      total,
    };
    setOrders((prev) => [order, ...prev]); // save the order
    setCart([]); // clear the cart
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        orders,
        count,
        total,
        addToCart,
        changeQty,
        removeFromCart,
        placeOrder,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
