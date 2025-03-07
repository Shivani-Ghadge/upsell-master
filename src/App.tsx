import './App.css'
import shoes from "./assets/shoes.png";
import edit from "./assets/edit.svg";
import { ProductCard, ProductFooter, ProductHeader, ProductImage, ProductInfo, ProductStat, ProductStats } from './components/ui/product-card';
import { Button } from './components/ui/button';
import placeholder from "./assets/placeholder.png";
function App() {

  const product =  {
    image: shoes,
    title: "Secret Stadium Sauce",
    variant : "2 Variants",
    discount: "No discount",
    views: 0,
    conversion: "0.00%",
    revenue: "£0.00",
    visit: "£0.00"
  }

  return (
<div className='app grid grid-cols-4 gap-2'>
    <ProductCard onClose={() => console.log("Closed!")}>
      <ProductHeader>
      <ProductImage src={product.image} fallbackSrc={placeholder} alt="Product Image" className='border'/>
      <ProductInfo title={product.title}
        actions={
        <Button variant="tags" size="sm" className="text-foreground bg-light-gray">
        Edit Offer
       </Button>}
       tags={
      <>
      <Button variant="tags" size="sm" className="text-primary bg-accent">
        2 Variants
      </Button>
      <Button variant="tags" size="sm" className="text-warning bg-warning/10">
        No Discount
        <img src={edit} width="13" alt="Edit Icon" />
      </Button>
    </>
    }
    />
      </ProductHeader>
      <div className='border-[0.82px] w-full'></div>
      <ProductStats>
            <ProductStat label="Views" value={product.views} />
            <ProductStat label="Conversion" value={product.conversion} />
            <ProductStat label="Revenue" value={product.revenue} />
            <ProductStat label="Rev./ Visit" value={product.visit} />
          </ProductStats>
      <ProductFooter>
      Create A/B Test
      </ProductFooter>
    </ProductCard>
    </div>
  )
}

export default App
