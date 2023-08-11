import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const useCart = () => {
  return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const existingCartItem = cart.find((item) => item.product.id === product.id);

    if (existingCartItem) {
      const updatedCart = cart.map((item) =>
        item.product.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      setCart(updatedCart);
    } else {
      const newCartItem = { product, quantity: 1 };
      setCart([...cart, newCartItem]);
    }
  };

  const removeFromCart = (cartItem) => {
    const updatedCart = cart.map((item) =>
      item.product.id === cartItem.product.id
        ? { ...item, quantity: item.quantity - item.quantity }
        : item
    );
    setCart(updatedCart.filter((item) => item.quantity > 0));
  };

  const getTotalPrice = () => {
    return cart.reduce((total, cartItem) => {
      return total + cartItem.product.price * cartItem.quantity;
    }, 0);
  };
 
   
  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, getTotalPrice }}>
      {children}
    </CartContext.Provider>
  );
};
