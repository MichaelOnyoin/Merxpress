import React from "react";
import { ProductData, ProductCardProps } from "@/db/definitions";
import {getData} from '@/db/actions'
import { Heart, CirclePlus } from "lucide-react";
//import { ItemCard } from "./ItemCard";
//import { useCart } from "@/components/CartContext";

export const CatalogData: React.FC<ProductCardProps>= async () => {

  const products: ProductData[] =  await getData().then(data => data.map(product => ({ id: product.id, title: product.title, description: product.description, price: product.price, imageUrl: product.imageUrl, discount: product.discount, originalPrice: product.originalPrice })));
 
  
  return (
    <div className="flex flex-col mt-4 w-full max-md:mt-10 max-md:max-w-full">
      <h1 className="text-2xl font-bold mb-6 text-slate-900 max-md:max-w-full">
        Catalog
      </h1>
      <div className="flex flex-col mt-2">
        <div className="flex flex-row mb-4">
          {products.slice(0, 4).map((product) => (
           // <ItemCard key={product.id} {...product}/>
            <div className="bg-white p-4 rounded-lg shadow-md flex flex-col mr-4 relative" key={product.id}>
                
                <img 
                    src={product.imageUrl}
                    alt={product.title} 
                    
                    className="w-full object-contain mb-4"/>
                    <Heart className=' h-5 stroke-red-400 absolute top-4 mr-2 right-0 hover:fill-red-500' strokeWidth={1.0} fill='none' href='null' role="button" />
                                
                    <div className="flex justify-between items-center mb-0">
                    {product.discount ? (
                        <div className="relative ">
                            
                            <span className="text-red-500 text-xl font-bold">${product.price}</span>
                            <span className="text-gray-500 line-through">${product.originalPrice?.toFixed(2)}</span>
                            <span className="text-red-500 whitespace-nowrap">-{product.discount}%</span>
                            
                            
                        </div>
                    ) : (
                        <div className="gap-2.5 self-start text-xl whitespace-nowrap">
                        ${product.price}
                        </div>
                    )}
                    </div>
                    
                    <h2 className="text-lg  mb-2 text-slate-900">{product.title}</h2>
                    <p className="text-gray-500 leading-7">{product.description}</p>
                    <CirclePlus className=' h-6 stroke-gray-800 mr-2 absolute bottom-4 right-0 hover:fill-blue-700 hover:stroke-white' strokeWidth={1.0} fill='none' href='null' role="button"
                      //onClick={AddToCart}
                     />
            </div>

            
         ))}
        </div>
      </div>
      
    </div>
  );
};