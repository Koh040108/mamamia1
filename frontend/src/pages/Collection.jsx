import React, { useContext, useState, useEffect } from 'react'
import { ShopContext } from '../context/ShopContext'

const Collection = () => {

    const { products } = useContext(ShopContext);
    const [showFilter,setShowFilter] = useState(false);
    const [filterProduct,setFilterProduct] = useState([]);

    useEffect(() => {
        setFilterProduct(products);
    },[]);

    return(
        <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>

            {/* Filter Options */}
            <div className='min-w-60'>
                <p className='my-2 text-xl flex items-center cursor-pointer gap-2'
                   onClick={() => setShowFilter(!showFilter)}
                >
                    FILTERS
                </p>
                {/* Category Filter */}
                <div className={`border border-gray-300 pl-5 py-3 mt-6 ${ showFilter ? '' : 'hidden' } sm:block`}>
                    <p className='mb-3 text-sm font-medium'>CATEGORIES</p>
                    <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
                        <button className='py-1 px-3 border border-gray-300 rounded'>Men</button>
                        <button className='py-1 px-3 border border-gray-300 rounded'>Women</button>
                        <button className='py-1 px-3 border border-gray-300 rounded'>Kids</button>
                    </div>
                </div>
            </div>

            {/* Right Side */}
            <div className=' flex-1'>

                <div className='flex justify-between text-base sm:text-2xl mb-4'>
                    < Title text1={'ALL'} text2={'COLLECTIONS'} />
                    {/* Product Sort */}
                    <select className='border-2 border-gray-300 text-sm px-2'>
                        <option value='relevant'>Sort by: Relevant</option>
                        <option value='low-high'>Sort by: Low to High</option>
                        <option value='high-low'>Sort by: High to Low</option>
                    </select>
                </div>

                {/* Map Product */}
                <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
                    {
                        filterProduct.map(product => (
                            <ProductItem key={product.id} name={product.name} id={product.id} price={product.price} image={product.image} />
                        ))
                    }
                </div>


            </div>
        </div>
    )
};

export default Collection;