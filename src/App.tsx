import './App.css'
import shoes from "./assets/shoes.png";
import edit from "./assets/edit.svg";
import { ProductCard, ProductFooter, ProductHeader, ProductImage, ProductInfo, ProductStat, ProductStats } from './components/ui/product-card';
import { Button } from './components/ui/button';

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
    <ProductCard>
      <ProductHeader>
      <ProductImage src={product.image} alt="Product Image" className='border-[0.82px] border-[(var--card-border)]'/>
      <ProductInfo title={product.title}
      onClose={() => console.log("Closed!")}
        actions={
        <Button variant="tags" size="sm" className="text-[var(--text-color-dark)] bg-[var(--light-gray)]">
        Edit Offer
       </Button>}
       tags={
      <>
      <Button variant="tags" size="sm" className="text-[var(--primary)] bg-[var(--light-blue)]">
        2 Variants
      </Button>
      <Button variant="tags" size="sm" className="text-[var(--orange)] bg-[var(--light-orange)]">
        No Discount
        <img src={edit} width="13" alt="Edit Icon" />
      </Button>
    </>
    }
    />
      </ProductHeader>
      <div className='border-[0.82px] border-[var(--card-border)] w-full'></div>
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
    <Button variant="default">Close</Button>
    </div>
  )
}

export default App
