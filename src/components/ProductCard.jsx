import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const ProductCard = ({ product }) => {
  return (
    <div className='shadow-sm w-98 card bg-base-100 px-4 py-3'>
        <figure>
         <Image
            src={product.image}
            alt='product image'
            width={95}
            height={95}
           className='h-36'
            
         />
        </figure>
       <h1 className='text-lg font-semibold mt-6 truncate'>{product.title}</h1>
       <p className='mt-6 truncate'>{product.description}</p>
       <div className='mt-7 card-actions justify-end'>
         <Link href={`/product/${product.id}`} className="btn btn-primary">View Details</Link>
       </div>
    </div>
  )
}

export default ProductCard