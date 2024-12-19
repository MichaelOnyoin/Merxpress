'use client'
import * as React from "react";
import { Heart, CirclePlus } from "lucide-react";
import { Product, ProductCardProps } from "@/db/definitions";
import { useCart } from "./CartContext";
import CustomAlert from "./CustomAlert";



export const ItemCard: React.FC<ProductCardProps>=({
    price,
    originalPrice,
    discount,
    title,
    description,
    imageUrl
})=>{
    const [likeCount, setLikeCount] = React.useState(0); // State to hold the like count
    const { addToCart } = useCart();
    const [showAlert, setShowAlert] = React.useState(false); // State to control alert visibility

    function handleLike() {
        setLikeCount(prevLikeCount => prevLikeCount + 1); // Increment the like count
        setShowAlert(true); // Show the alert
        //alert(`Liked this! Total likes: ${likeCount + 1}`); // Show the updated count
        //make the alert message appear for only 2 seconds ?
    }
    
    const handleAddToCartClick = (product: Product) => {
        addToCart(product);
    };

    
    return(
            <div className="bg-white p-4 rounded-lg shadow-md flex flex-col mr-4 relative" >
                {showAlert && (
                <CustomAlert
                    message={`Liked this! Total likes: ${likeCount}`}
                    duration={2000}
                    onClose={() => setShowAlert(false)}
                />
                )}
                    <img 
                    src={imageUrl}
                    alt={title} 
                    className="w-full object-contain mb-4"/>
                    <Heart className=' h-5 stroke-red-400 absolute top-4 mr-2 right-0 hover:fill-red-500' strokeWidth={1.0} fill='none' href='null' role="button" onClick={handleLike}/>
                                
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
                    <CirclePlus className=' h-5 stroke-gray-800 mr-2 absolute bottom-4 right-0 hover:fill-blue-500 hover:stroke-white' strokeWidth={1.0} fill='none' href='null' role="button"
                      onClick={() => handleAddToCartClick({
                          price, title, description, imageUrl,
                          id: ""
                      })}
                     />
            </div>
        

    )
}

