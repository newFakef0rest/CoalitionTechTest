import React, { createContext, useContext, useState } from "react";
import { ActiveContextProps } from "../type";

// Create a context for numbers
export const ActiveContext = createContext<ActiveContextProps | number>(3);

// Create a provider component for the context
export const ActiveProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [active, setActive] = useState<number>(3);

  return (
    <ActiveContext.Provider value={{ active, setActive }}>
      {children}
    </ActiveContext.Provider>
  );
};

// Custom hook to use the ActiveContext
export const useActiveContext = (): ActiveContextProps => {
  const activeContext = useContext(ActiveContext);

  if (typeof activeContext === "number") {
    throw new Error("ActiveContext must be used within ActiveProvider");
  }

  return activeContext;
};
