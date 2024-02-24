"use client";

import { useContext } from "react";
import { CustomCursorContext } from "@/context/custom-cursor-context";
import { MouseEventHandler, ReactNode, ButtonHTMLAttributes } from "react";

interface CustomButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    onMouseEnter?: MouseEventHandler<HTMLButtonElement>;
    onMouseLeave?: MouseEventHandler<HTMLButtonElement>;
    className?: string;
}

const CustomButton: React.FC<CustomButtonProps> = ({
    children,
    className,
    ...props
}) => {
    const { setShowCursor } = useContext(CustomCursorContext)!;

    return (
        <button
            {...props}
            onMouseEnter={() => setShowCursor(false)}
            onMouseLeave={() => setShowCursor(true)}
            className={className}
        >
            {children}
        </button>
    );
};

export default CustomButton;
