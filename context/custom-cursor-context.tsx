"use client";

import React, {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";

type CustomCursorContextType = {
  customCursor: boolean;
  setCustomCursor: Dispatch<SetStateAction<boolean>>;
};

interface ProviderProps {
  children: ReactNode;
}

export const CustomCursorContext = createContext<CustomCursorContextType | null>(null);

export const CustomCursorProvider = ({ children }: ProviderProps) => {
  const [customCursor, setCustomCursor] = useState<boolean>(true);

  return (
    <CustomCursorContext.Provider value={{ customCursor, setCustomCursor }}>
      {children}
    </CustomCursorContext.Provider>
  );
};
