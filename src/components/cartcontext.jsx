import React, { createContext, useContext, useReducer, useEffect } from 'react';

// Creating a context
const CartContext = createContext();

// for persistency
const initialState = {
  cart: JSON.parse(localStorage.getItem('cart')) || [],
};

// Reducer function to manage cart state
const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      const existingProductIndex = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );

      if (existingProductIndex !== -1) {
        const updatedCart = [...state.cart];
        updatedCart[existingProductIndex].quantity += 1;
        return { ...state, cart: updatedCart };
      } else {
        return { ...state, cart: [...state.cart, { ...action.payload, quantity: 1 }] };
      }
    case 'REMOVE_FROM_CART':
      return { ...state, cart: state.cart.filter((item) => item.id !== action.payload) };
    case 'INCREASE_QUANTITY':
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ),
      };
    case 'DECREASE_QUANTITY':
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload && item.quantity > 1
            ? { ...item, quantity: item.quantity - 1 }
            : item
        ),
      };
    default:
      return state;
  }
};

// Creating a custom hook to use the CartContext
export const useCart = () => {
  return useContext(CartContext);
};

// CartProvider component to wrap around the app
export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(state.cart));
  }, [state.cart]);

  const addToCart = (product) => {
    dispatch({ type: 'ADD_TO_CART', payload: product });
  };

  const removeProduct = (id) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: id });
  };

  const increaseQuantity = (id) => {
    dispatch({ type: 'INCREASE_QUANTITY', payload: id });
  };

  const decreaseQuantity = (id) => {
    dispatch({ type: 'DECREASE_QUANTITY', payload: id });
  };

  return (
    <CartContext.Provider
      value={{
        cart: state.cart,
        addToCart,
        removeProduct,
        increaseQuantity,
        decreaseQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
