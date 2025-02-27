import React from 'react';
import { cn } from "@/lib/utils";

interface CardSpotlightProps extends React.HTMLAttributes<HTMLDivElement> {}

export function CardSpotlight({ className, ...props }: CardSpotlightProps) {
  const [position, setPosition] = React.useState<{ x: number; y: number }>({ x: 0, y: 0 });

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  }

  return (
    <div
      className={cn(
        "group relative rounded-xl border bg-background",
        className
      )}
      onMouseMove={handleMouseMove}
      {...props}
    >
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(139,92,246,.1), transparent 40%)`,
        }}
      />
      {props.children}
    </div>
  );
} 