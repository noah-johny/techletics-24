"use client";

import { ChangeEventHandler, useContext } from "react";
import { CustomCursorContext } from "@/context/custom-cursor-context";
import { MouseEventHandler, ReactNode, SelectHTMLAttributes } from "react";

interface CustomSelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  children: ReactNode;
  onMouseEnter?: MouseEventHandler<HTMLSelectElement>;
  onMouseLeave?: MouseEventHandler<HTMLSelectElement>;
}

const CustomSelect: React.FC<CustomSelectProps> = ({
  children,
  className,
  value,
  onChange,
  id,
  name,
  ...props
}) => {
  const { setShowCursor } = useContext(CustomCursorContext)!;

  return (
    <select
      {...props}
      onMouseEnter={() => setShowCursor(false)}
      onMouseLeave={() => setShowCursor(true)}
      onChange={onChange}
      className={className + " cursor-pointer"}
      id={id}
      name={name}
    >
      {children}
    </select>
  );
};

export default CustomSelect;
