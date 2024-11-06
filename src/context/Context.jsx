// Provider.js
import React, { createContext, useState, useContext } from 'react';

// 1. Create the Provider
export const Provider = createContext();

// 2. Create the Context Provider component
export const MyProvider = ({ children }) => {
  const [state, setState] = useState('Hii');


  return (
    <Provider.Provider value={{ state,setState}}>
      {children}
    </Provider.Provider>
  );
};

// 3. Create a custom hook to use the Provider
export const useProvider = () => {
  const context = useContext(Provider);
  if (!context) {
    throw new Error("useProvider must be used within a MyProvider");
  }
  return context;
};
