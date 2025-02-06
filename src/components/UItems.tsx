
import ProductsPage from "./ui/UICard";
import { getProducts } from '@/db/data';
import React from 'react';

export default function Products(){
    const products = getProducts().then(data =>
        data.map(products => ({ id: products.id, title: products.title, description: products.description, price: products.price, imageUrl: products.imageUrl, discount: products.discount, originalPrice: products.originalPrice })));
    return(
        <div>
        <ProductsPage products={products} />
        </div>
    )
}