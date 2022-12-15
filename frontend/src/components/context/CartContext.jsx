import { createContext, useEffect, useState } from "react";

const CartContext = createContext({
  cart: [],
  totalPrice: 0,
  addToCart: (product) => {},
  removeFromCart: (product) => {},
  deleteCart: () => {},
});

export const CartContextProvider = (props) => {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const addToCartHandler = async (product) => {
    console.log("called cart");
    try {
      const res = await fetch(
        "https://tirupati-tailors.rushilmakvana.repl.co/add-to-cart",
        {
          method: "post",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ...product,
          }),
        }
      );
      const data = await res.json();
      setCart(data.cart);
      const sum = data.cart.reduce((s, current) => {
        // console.log("s = ", s, "curren = ", current.price);
        return s + current.price;
      }, 0);
      setTotal(sum);
      //   console.log("data = ", data);
    } catch (e) {
      console.log("error");
    }
  };
  const removeFromCartHandler = async (cartId) => {
    const token = localStorage.getItem("auth-token");
    const res = await fetch(
      "https://tirupati-tailors.rushilmakvana.repl.co/remove-from-cart",
      {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token, cartId }),
      }
    );
    const data = await res.json();
    setCart(data.cart);
    // console.log("remove cart = ", data.cart);
  };

  const getCart = async () => {
    // console.log("called get cart");
    const token = localStorage.getItem("auth-token");
    if (token) {
      const res = await fetch(
        "https://tirupati-tailors.rushilmakvana.repl.co/getCart",
        {
          method: "post",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ token }),
        }
      );
      const data = await res.json();
      setCart(data.cart);
      // console.log("data = ", data.cart);
      // data.cart.map((e) => console.log(e.price));
      const sum = data.cart.reduce((s, current) => {
        // console.log("s = ", s, "curren = ", current.price);
        return s + current.price;
      }, 0);
      setTotal(sum);
      // console.log("sum = ", sum);
      // console.log("response = ", data.cart);
    }
  };

  const deleteCart = () => {
    setCart([]);
    setTotal(0);
  };

  useEffect(() => {
    getCart();
  }, []);

  return (
    <CartContext.Provider
      value={{
        cart: cart,
        addToCart: addToCartHandler,
        removeFromCart: removeFromCartHandler,
        totalPrice: total,
        deleteCart: deleteCart,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContext;
