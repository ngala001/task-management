import Image from "next/image"
const getproduct = async(id) => {
    const res = await fetch(`https://fakestoreapi.com/products/${id}`)
    const product = await res.json()
    return product
}


export default async function Product({ params }) {
 const { id } = await params;
 const item = await getproduct(id)
  return (
    <section className="container mt-6 mx-auto">
        <div className="max-w-4xl mt-7 p-5 bg-base-100 shadow-sm mx-auto grid grid-cols-2 gap-10">
            <div className="content-center">
                <Image
                    src={item.image}
                    alt='product image'
                    width={95}
                    height={95}
                    className='h-36'
                        
                />

            </div>

            <div>
            <h2 className="font-bold text-xl border-b-2 border-gray-300 pb-2">{item.title}</h2>
            <p className="mt-7">{item.description}</p>
            </div>
        </div>

    </section>
  )
}