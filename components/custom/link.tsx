"use client";

import { useContext } from "react";
import { CustomCursorContext } from "@/context/custom-cursor-context";
import Link, { LinkProps } from "next/link";
import { MouseEventHandler, ReactNode } from "react";

interface CustomLinkProps extends LinkProps {
  children: ReactNode;
  onMouseEnter?: MouseEventHandler<HTMLAnchorElement>;
  onMouseLeave?: MouseEventHandler<HTMLAnchorElement>;
  className?: string;
}

const CustomLink: React.FC<CustomLinkProps> = ({
  children,
  className,
  ...props
}) => {
  const { setCustomCursor } = useContext(CustomCursorContext)!;

  return (
    <Link
      {...props}
      onMouseEnter={() => setCustomCursor(false)}
      onMouseLeave={() => setCustomCursor(true)}
      className={className}
    >
      {children}
    </Link>
  );
};

export default CustomLink;
