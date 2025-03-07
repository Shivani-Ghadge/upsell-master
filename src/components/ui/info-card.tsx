import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

// Create a context to track the InfoCard variant
const InfoCardContext = React.createContext<{
  variant?: "default" | "active" | null;
}>({
  variant: "default",
});

const infoCardVariants = cva(
  "rounded-xl border flex items-center gap-4 p-6 transition-all duration-200 group",
  {
    variants: {
      variant: {
        default:
          "bg-white text-card-foreground cursor-pointer hover:bg-accent hover:border-primary hover:ring-2 hover:ring-primary/20",
        active:
          "bg-accent cursor-pointer text-primary border-primary ring-2 ring-primary/20",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

interface InfoCardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof infoCardVariants> {}

const InfoCard = React.forwardRef<HTMLDivElement, InfoCardProps>(
  ({ className, variant, ...props }, ref) => (
    <InfoCardContext.Provider value={{ variant }}>
      <div
        ref={ref}
        className={cn(infoCardVariants({ variant, className }))}
        {...props}
      />
    </InfoCardContext.Provider>
  )
);
InfoCard.displayName = "InfoCard";

const CardIcon = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  // Get the parent InfoCard's variant from context
  const { variant } = React.useContext(InfoCardContext);

  const isTransparent = className?.includes("bg-transparent");

  return (
    <div
      ref={ref}
      className={cn(
        "flex items-center justify-center w-12 h-12 aspect-square rounded-lg p-3 transition-colors duration-200",
        variant === "active"
          ? "bg-primary text-white"
          : `bg-accent ${
              !isTransparent && "group-hover:bg-primary group-hover:text-white"
            }`,
        className
      )}
      {...props}
    />
  );
});
CardIcon.displayName = "CardIcon";

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5", className)}
    {...props}
  />
));
CardHeader.displayName = "CardHeader";

const CardTitle = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("font-semibold leading-none tracking-tight", className)}
    {...props}
  />
));
CardTitle.displayName = "CardTitle";

const CardDescription = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  // Get the parent InfoCard's variant from context
  const { variant } = React.useContext(InfoCardContext);

  return (
    <div
      ref={ref}
      className={cn(
        "text-sm text-muted-foreground",
        variant === "active" ? "text-primary" : "text-muted-foreground",
        className
      )}
      {...props}
    />
  );
});
CardDescription.displayName = "CardDescription";

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex justify-between w-full", className)}
    {...props}
  />
));
CardContent.displayName = "CardContent";

const CardCount = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("flex items-center", className)} {...props} />
));
CardCount.displayName = "CardCount";

export {
  InfoCard,
  CardIcon,
  CardHeader,
  CardCount,
  CardTitle,
  CardDescription,
  CardContent,
};