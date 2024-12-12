import React, { createContext, useContext, useState } from "react";

const TransitionContext = createContext();

export const TransitionProvider = ({ children }) => {
  const [isFading, setIsFading] = useState(false);

  return (
    <TransitionContext.Provider value={{ isFading, setIsFading }}>
      {children}
    </TransitionContext.Provider>
  );
};

export const useTransition = () => useContext(TransitionContext);

