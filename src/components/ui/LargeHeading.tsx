import { FC, forwardRef, HTMLAttributes } from "react";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const headingVariants = cva(
  "text-black dark:text-white text-center lg:text-left font-extrabold leading-tight tracking-tighter ",
  {
    variants: {
      size: {
        default: "text-4xl md:text-5xl lg:text-6xl ",
        sm: "text-2xl md:text-3xl lg:text-4xl",
        lg: "text-5xl md:text-6xl lg:text-7xl"
      },
    },
    defaultVariants: {
      size: "default",
    },
  }
);

interface ParagraphProps
  extends HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof headingVariants> {}

// eslint-disable-next-line react/display-name
const Paragraph = forwardRef<HTMLHeadingElement, ParagraphProps>(
  ({ className, size, children, ...props }, ref) => {
    return (
      <h1
        ref={ref}
        {...props}
        className={cn(
          headingVariants({
            size,
            className,
          })
        )}
      >
        {children}
      </h1>
    );
  }
);

Paragraph.displayName = 'Paragraph'

export default Paragraph;
