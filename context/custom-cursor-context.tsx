"use client";

import React, {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";

type CursorVariant = "default" | "title" | "highlightedTitle" | "text";

type CustomCursorContextType = {
  showCursor: boolean;
  setShowCursor: Dispatch<SetStateAction<boolean>>;
  cursorVariant: CursorVariant;
  setCursorVariant: Dispatch<SetStateAction<CursorVariant>>;
};

interface ProviderProps {
  children: ReactNode;
}

export const CustomCursorContext =
  createContext<CustomCursorContextType | null>(null);

export const CustomCursorProvider = ({ children }: ProviderProps) => {
  const [showCursor, setShowCursor] = useState<boolean>(true);
  const [cursorVariant, setCursorVariant] = useState<CursorVariant>("default");

  return (
    <CustomCursorContext.Provider
      value={{
        showCursor,
        setShowCursor,
        cursorVariant,
        setCursorVariant,
      }}
    >
      {children}
    </CustomCursorContext.Provider>
  );
};
