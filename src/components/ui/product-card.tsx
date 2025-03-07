import * as React from "react";
import { cn } from "@/lib/utils";
import close from "../../assets/close.svg";

  const ProductCard = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
    ({ className, ...props }, ref) => (
      <div ref={ref} className={cn("rounded-lg overflow-hidden bg-white border border-[var(--card-border)] shadow-[var(--card-box-shadow)] w-full h-max", className)} {...props} />
    )
  );
  ProductCard.displayName = "ProductCard";

  const ProductHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
    ({ className, ...props }, ref) => (
      <div ref={ref} className={cn("flex items-center gap-2 p-3", className)} {...props} />
    )
  );
  ProductHeader.displayName = "ProductHeader";

  const ProductImage = React.forwardRef<HTMLImageElement, React.ImgHTMLAttributes<HTMLImageElement>>(
    ({ className, ...props }, ref) => (
      <img ref={ref} className={cn("w-15 h-15 rounded-sm object-cover", className)} {...props} />
    )
  );
  ProductImage.displayName = "ProductImage";

  interface ProductInfoProps extends React.HTMLAttributes<HTMLDivElement> {
    title: string;
    onClose?: () => void;
    tags?: React.ReactNode;
    actions?: React.ReactNode;
  }
  
  const ProductInfo = React.forwardRef<HTMLDivElement, ProductInfoProps>(
    ({ title, onClose, tags, actions, className, ...props }, ref) => (
      <div ref={ref} className={cn("flex flex-col", className)} {...props}>
        <div className="flex items-center justify-between">
        <h6 className="text-sm">{title}</h6>
        {onClose && (
        <img
          src={close} 
          width="25px"
          alt="Close icon"
          className="cursor-pointer"
          onClick={onClose}
        />
      )}
        </div>
        <div className="flex justify-between mt-1">
          {tags && <div className="flex gap-2">{tags}</div>}
          {actions}
        </div>
      </div>
    )
  );
  
  ProductInfo.displayName = "ProductInfo";  

  const ProductStats = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
    ({ className, ...props }, ref) => (
      <div
        ref={ref}
        className={cn("flex items-center justify-between p-3", className)}
        {...props}
      />
    )
  );
  ProductStats.displayName = "ProductStats";


  const ProductStat = React.forwardRef<HTMLDivElement, { label: string; value: string | number } 
  & React.HTMLAttributes<HTMLDivElement>>(({ label, value, className, ...props }, ref) => (
  <div ref={ref} className={cn("text-center", className)} {...props}>
    <h6 className="text-xs text-[var(--muted-foreground)]">{label}</h6>
    <p className="text-[var(--card-text-color-dark)] text-sm mt-1">{value}</p>
  </div>
));
ProductStat.displayName = "ProductStat";

  

  const ProductFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
    ({ className, ...props }, ref) => (
      <div ref={ref} className={cn("text-center bg-[var(--card-footer-bg)] border border-r-0 border-l-0 border-b-0 border-[var(--card-border)] py-2 px-5 text-[var(--card-text-color-dark)] text-sm cursor-pointer", className)} {...props} />
    )
  );
  ProductFooter.displayName = "ProductFooter";

  export {
    ProductCard,
    ProductHeader,
    ProductImage,
    ProductInfo,
    ProductStats,
    ProductStat,
    ProductFooter,
  };