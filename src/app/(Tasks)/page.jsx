import ProductCard from "@/components/ProductCard";
/* import TaskCard from "@/components/TaskCard"; */

const fetchProducts = async() => {
  const res = await fetch('https://fakestoreapi.com/products')
  const data = await res.json()
  return data
}

export default async function Home() {
  const products = await fetchProducts()
  return (
   <div className="container grid gap-10 grid-cols-3 mx-auto mt-7">
     {
        products.map(product => {
           return (
             <ProductCard key={product.id} product={product} />
           )
        })
    }
   </div>
  );
}



