import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface PixelButtonProps {
  children: ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "accent";
  size?: "sm" | "md" | "lg";
  className?: string;
  disabled?: boolean;
}

export const PixelButton = ({ 
  children, 
  onClick, 
  variant = "primary", 
  size = "md",
  className,
  disabled = false
}: PixelButtonProps) => {
  const baseClasses = "pixel-font border-2 shadow-pixel transition-all duration-100 hover:shadow-glow disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variantClasses = {
    primary: "bg-primary text-primary-foreground border-primary-glow hover:bg-primary-glow",
    secondary: "bg-secondary text-secondary-foreground border-secondary hover:bg-secondary/80",
    accent: "bg-accent text-accent-foreground border-accent hover:bg-accent/80"
  };

  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg"
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={cn(
        baseClasses,
        variantClasses[variant],
        sizeClasses[size],
        !disabled && "hover:translate-x-[-2px] hover:translate-y-[-2px]",
        className
      )}
    >
      {children}
    </button>
  );
};