"use client";

import { cn } from "@/lib/utils";
import { HTMLAttributes, forwardRef } from "react";

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  as?: React.ElementType;
}

const Container = forwardRef<HTMLDivElement, ContainerProps>(
  ({ className, as: Component = "div", ...props }, ref) => {
    return (
      <Component
        ref={ref}
        className={cn("mx-auto w-full max-w-7xl xl:max-w-[1420px] 2xl:max-w-[1500px] px-4 sm:px-6 lg:px-8 xl:px-10", className)}
        {...props}
      />
    );
  }
);

Container.displayName = "Container";

export { Container };
