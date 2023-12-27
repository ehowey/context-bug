import { createContext, useState, useContext, PropsWithChildren } from "react";

interface Context {
  count: number;
  setCount: (number: number) => void;
}

const AppContext = createContext<Context | null>(null);

export const AppProvider = ({ children }: PropsWithChildren) => {
  const [count, setCount] = useState<number>(0);

  const value: Context = {
    count,
    setCount,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppContext = (): Context => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};
