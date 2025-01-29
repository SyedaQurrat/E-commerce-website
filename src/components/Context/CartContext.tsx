'use client'; // Mark this as a client component

import React, { createContext, useContext, useReducer, ReactNode } from 'react';

// Define the type for Cart Item
type CartItem = {
  id: string;
  name: string;
  image: string;
  price: number;
  quantity: number;
};

// Define the state type
type CartState = {
  items: CartItem[];
};

// Define the action types
type CartAction =
  | { type: 'ADD_TO_CART'; payload: CartItem }
  | { type: 'UPDATE_QUANTITY'; payload: { id: string; quantity: number } }
  | { type: 'REMOVE_FROM_CART'; payload: string };

// Define the CartContextType
type CartContextType = {
  state: CartState;
  dispatch: React.Dispatch<CartAction>;
  addToCart: (item: CartItem) => void;
  getTotalPrice: () => number;  // Add getTotalPrice function
};

// Initial state
const initialState: CartState = {
  items: [],
};

// Create the CartContext
const CartContext = createContext<CartContextType | undefined>(undefined);

// Reducer function to handle actions
const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    case 'UPDATE_QUANTITY':
      return {
        ...state,
        items: state.items.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: action.payload.quantity }
            : item
        ),
      };
    case 'REMOVE_FROM_CART':
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload),
      };
    default:
      return state;
  }
};

// CartProvider component to provide the context value
export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  // Function to add an item to the cart
  const addToCart = (item: CartItem) => {
    dispatch({ type: 'ADD_TO_CART', payload: item });
  };

  // Calculate total price of all items in the cart
  const getTotalPrice = () => {
    return state.items.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <CartContext.Provider value={{ state, dispatch, addToCart, getTotalPrice }}>
      {children}
    </CartContext.Provider>
  );
};

// Custom hook to use CartContext
export const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};





