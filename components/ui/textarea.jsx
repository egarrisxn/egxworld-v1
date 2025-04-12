import * as React from "react";
import { cn } from "@/lib/utils";

const Textarea = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <textarea
      className={cn(
        "border-foreground placeholder:text-muted-foreground focus-visible:ring-ring flex min-h-[140px] w-full rounded-md border bg-transparent px-3 py-2 shadow-xs focus-visible:ring-1 focus-visible:outline-hidden disabled:cursor-not-allowed disabled:opacity-50 2xl:min-h-48 2xl:text-2xl",
        className
      )}
      ref={ref}
      {...props}
    />
  );
});
Textarea.displayName = "Textarea";

export { Textarea };
