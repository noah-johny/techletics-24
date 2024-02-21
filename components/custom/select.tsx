"use client";

import { ChangeEventHandler, useContext } from "react";
import { CustomCursorContext } from "@/context/custom-cursor-context";
import { MouseEventHandler, ReactNode } from "react";

interface CustomSelectProps {
  children: ReactNode;
  onMouseEnter?: MouseEventHandler<HTMLSelectElement>;
  onMouseLeave?: MouseEventHandler<HTMLSelectElement>;
  onChange?: ChangeEventHandler<HTMLSelectElement>;
  className?: string;
}

const CustomSelect: React.FC<CustomSelectProps> = ({
  children,
  className,
  onChange,
  ...props
}) => {
  const { setShowCursor } = useContext(CustomCursorContext)!;

  return (
    <select
      {...props}
      onMouseEnter={() => setShowCursor(false)}
      onMouseLeave={() => setShowCursor(true)}
      onChange={onChange}
      className={className}
    >
      {children}
    </select>
  );
};

export default CustomSelect;
