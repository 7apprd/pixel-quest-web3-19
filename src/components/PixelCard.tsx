import { ReactNode } from "react";
import { cn } from "@/lib/utils";
interface PixelCardProps {
  children: ReactNode;
  className?: string;
  animated?: boolean;
  glowing?: boolean;
  style?: React.CSSProperties;
}
export const PixelCard = ({
  children,
  className,
  animated = false,
  glowing = false,
  style
}: PixelCardProps) => {
  return (
    <div 
      className={cn(
        "border-2 border-primary bg-card/90 backdrop-blur-sm shadow-pixel p-6 transition-all duration-300",
        animated && "hover:shadow-glow hover:translate-x-[-2px] hover:translate-y-[-2px]",
        glowing && "shadow-glow border-primary-glow",
        className
      )}
      style={style}
    >
      {children}
    </div>
  );
};