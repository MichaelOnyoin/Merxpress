'use client'
import ProductsPage from '@/app/ui/products';
import { getProducts } from '@/db/data';
import React,{Suspense} from 'react';
//import { getData } from '@/db/data';

export default function Products(){
    const products = getProducts().then(data =>
        data.map(products => ({ id: products.id, price: products.price, originalPrice: products.originalPrice, discount: products.discount, title: products.title, description: products.description,  imageUrl: products.imageUrl  })));
    return(
        <div>
        <Suspense fallback={<div>Loading...</div>}>
        <ProductsPage products={products} />
        </Suspense>
        </div>
    )
}