import { useState, ReactNode } from "react";

interface ChildrenProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Modal({
  children,
}: {
  children: (props: ChildrenProps) => ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return <>{children({ isOpen, setIsOpen })}</>;
}
