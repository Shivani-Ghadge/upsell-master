import * as React from "react";
import { cn } from "@/lib/utils";
import close from "../../assets/close.svg";

 interface ProductCardContextType {
    onClose?: () => void;
    closeIcon?: string;
  }
  
  const ProductCardContext = React.createContext<ProductCardContextType>({ })
  interface ProductCardProps extends React.HTMLAttributes<HTMLDivElement> {
    onClose?: () => void;
    closeIcon?: string;
  }

  const ProductCard = React.forwardRef<HTMLDivElement, ProductCardProps>(
        ({ className, onClose, closeIcon = close, ...props }, ref) => (
      <ProductCardContext.Provider value={{ onClose, closeIcon }}>
        <div ref={ref} className={cn("rounded-lg overflow-hidden bg-white border border shadow-box-shadow w-full h-max", className)} {...props} />
      </ProductCardContext.Provider>
  )
 );


  ProductCard.displayName = "ProductCard";


  const ProductHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
    ({ className, ...props }, ref) => (
      <div ref={ref} className={cn("flex items-center gap-2 p-3", className)} {...props} />
    )
  );
  ProductHeader.displayName = "ProductHeader";


interface ProductImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackSrc?: string;
}

const ProductImage = React.forwardRef<HTMLImageElement, ProductImageProps>(
  ({ className, fallbackSrc, alt, ...props }, ref) => {
    const [error, setError] = React.useState(false);

    return (
      <img
        ref={ref}
        className={cn("w-15 h-15 rounded-sm object-cover", className)}
        alt={alt || "Product image"}
        onError={() => {
          if (fallbackSrc && !error) {
            setError(true);
            props.src = fallbackSrc;
          }
        }}
        {...props}
      />
    );
  }
);
ProductImage.displayName = "ProductImage";

  interface ProductInfoProps extends React.HTMLAttributes<HTMLDivElement> {
    title: string;
    tags?: React.ReactNode;
    actions?: React.ReactNode;
  }
  
  const ProductInfo = React.forwardRef<HTMLDivElement, ProductInfoProps>(
    ({ title, tags, actions, className, ...props }, ref) => {
        const { onClose, closeIcon } = React.useContext(ProductCardContext)
        return (
      <div ref={ref} className={cn("flex flex-col", className)} {...props}>
        <div className="flex items-center justify-between">
        <h6 className="text-sm">{title}</h6>
        {onClose && (
        <img
          src={closeIcon ? closeIcon : close} 
          width="25px"
          alt="Close icon"
          className="cursor-pointer"
          onClick={onClose}
        />
      )}
        </div>
        <div className="flex justify-between gap-2 mt-1">
          {tags && <div className="flex gap-2">{tags}</div>}
          {actions}
        </div>
      </div>
    )}
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
    <h6 className="text-xs text-muted-foreground">{label}</h6>
    <p className="text-foreground text-sm mt-1">{value}</p>
  </div>
));
ProductStat.displayName = "ProductStat";

  

  const ProductFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
    ({ className, ...props }, ref) => (
      <div ref={ref} className={cn("text-center bg-dark-gray border border-r-0 border-l-0 border-b-0 py-2 px-5 text-foreground text-sm cursor-pointer", className)} {...props} />
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