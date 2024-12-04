import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const addToCart = (game) => {
    setCart((prevCart) => {
      const newCart = [...prevCart, game];
      localStorage.setItem("cart", JSON.stringify(newCart)); 
      return newCart;
    });
  };

  const removeFromCart = (gameId) => {
    setCart((prevCart) => {
      const newCart = prevCart.filter((game) => game._id !== gameId);
      localStorage.setItem("cart", JSON.stringify(newCart)); 
      return newCart;
    });
  };

  const updateQuantity = (gameId, newQuantity) => {
    setCart((prevCart) => {
      const newCart = prevCart.map((game) =>
        game._id === gameId ? { ...game, quantity: newQuantity } : game
      );
      localStorage.setItem("cart", JSON.stringify(newCart)); 
      return newCart;
    });
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
