'use client'

import { use } from 'react';
import React from 'react';
import { Heart, CirclePlus } from "lucide-react";
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
    TooltipProvider,
  } from '@/components/ui/tooltip'
import Image from 'next/image';

export default function ProductsPage({
  products,
}: {
  products: Promise<{ id: string; title: string; description: string; price: number;  discount ?: number; originalPrice ?: number; imageUrl: string;}[]>
}) {
  const allProducts = use(products)
   //const allProducts = getProducts()
  return (
    <div className="" >
        <h1 className="text-3xl font-bold text-slate-900">Products</h1>
        <div className="flex flex-col mt-2">
      
      <div className='flex flex-row mb-4'>
      {allProducts.map((product) => (
        <div key={product.id} className="bg-white p-4 rounded-lg shadow-md flex flex-col mr-4 relative" >
         <Image 
         src={`/${product.imageUrl || 'images/drum.png'}`}
         alt={product.title} 
         height={200}
         width={200}
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
         <p className='text-stone-600'>Img:{product.imageUrl}</p>
         <TooltipProvider>
         <Tooltip>
             <TooltipTrigger asChild>
                 {/* <button className="bg-green-500 text-white p-2 rounded-lg mt-4">Add to Cart</button> */}
                 <CirclePlus className=' h-6 stroke-gray-800 mr-2 absolute bottom-4 right-0 hover:fill-green-700 hover:stroke-white' strokeWidth={1.0} fill='none' href='null' role="button"
                        //onClick={addToCart}
                     />
             </TooltipTrigger>
             <TooltipContent sideOffset={5} className="transform -translate-x-1/2 bg-gray-500 text-white p-4 rounded shadow-sm opacity-100 p-2 rounded-lg ">
                 Add this item to your cart
             </TooltipContent>
         </Tooltip>
         </TooltipProvider>
         
         </div>

      ))}
      </div>
    </div>
   </div>
  )
}