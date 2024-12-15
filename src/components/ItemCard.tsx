'use client'
import * as React from "react";
import { Heart } from "lucide-react";

import { ProductCardProps } from "@/components/popularItems/types";



export const ItemCard: React.FC<ProductCardProps>=({
    price,
    originalPrice,
    discount,
    title,
    description,
    imageUrl
})=>{
    const [likeCount, setLikeCount] = React.useState(0); // State to hold the like count

    function handleClick() {
        setLikeCount(likeCount + 1); // Increment the like count
        alert(`Liked this! Total likes: ${likeCount + 1}`); // Show the updated count

    }

    
    return(

            <div className="bg-white p-4 rounded-lg shadow-md flex flex-col mr-4 relative" >
                    <img 
                    src={imageUrl}
                    alt={title} 
                    className="w-full object-contain mb-4"/>
                    <Heart className=' h-5 stroke-red-400 absolute top-4 mr-2 right-0 hover:fill-red-500' strokeWidth={1.0} fill='none' href='null' role="button" onClick={handleClick}/>
                                
                    <div className="flex justify-between items-center mb-0">
                    {discount ? (
                        <div className="relative ">
                            
                            <span className="text-red-500 text-xl font-bold">${price.toFixed(2)}</span>
                            <span className="text-gray-500 line-through">${originalPrice?.toFixed(2)}</span>
                            <span className="text-red-500 whitespace-nowrap">-{discount}%</span>
                            
                            
                        </div>
                    ) : (
                        <div className="gap-2.5 self-start text-xl whitespace-nowrap">
                        ${price.toFixed(2)}
                        </div>
                    )}
                    </div>
                    
                    <h2 className="text-lg  mb-2 text-slate-900">{title}</h2>
                    <p className="text-gray-500 leading-7">{description}</p>
            </div>
        

    )
}