import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "min-w-20 inline-flex items-center justify-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        custom_green:
          "bg-[#deffe4] dark:bg-[#001f08] text-[#01a149] dark:text-[#57e57f] border-[#b4f9c2] dark:border-[#004519]",
        custom_red:
          "bg-[#fff2f1] dark:bg-[#360002] text-[#d60121] dark:text-[#ff9087] border-[#fbd5d0] dark:border-[#60020b]",
        custom_blue:
          "bg-[#ebecff] dark:bg-[#130051] text-[#492be2] dark:text-[#8d96ff] border-[#d2d7fe] dark:border-[#240080]",
        custom_yellow:
          "bg-[#fff3e5] dark:bg-[#251400] text-[#cc8e1f] dark:text-[#ffc073] border-[#ffe3c5] dark:border-[#533200]",
        custom_gray:
          "bg-[#f1f4f9] dark:bg-[#212121] text-[#324154] dark:text-[#d4d4d4] border-[#e3eaf1] dark:border-[#2e2e2e]",
        default:
          "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        outline: "text-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
