'use client'
import React from 'react';
import { useCart } from './CartContext';
//import { ProductData } from "@/db/definitions";

const Cart: React.FC = () => {
  const { cartItems, cartTotal, removeFromCart, updateCartItemQuantity } = useCart();

  return (
    <div className="cart container mx-auto p-4 bg-white shadow-md rounded-lg mt-4">
      <h2 className='font-sans font-semibold text-xl'>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={item.product.id}>
              <div>
                <h3>{item.product.title}</h3>
                <img src={`${item.product.imageUrl}`} alt="" className='h-44 w-44 ' />
                <p className='text-lg text-slate-700'>Price: ${item.product.price}</p>
                <p>Quantity: {item.quantity}</p>
                <button className='bg-red-500 rounded-lg text-white px-4' onClick={() => removeFromCart(parseInt(item.product.id))}>Remove</button>
                <button className='text-green-500 px-4 ' onClick={() => updateCartItemQuantity(parseInt(item.product.id), item.quantity + 1)}>+</button>
                <button className='text-red-500 px-4' onClick={() => updateCartItemQuantity(parseInt(item.product.id), item.quantity - 1)}>-</button>
              </div>
            </li>
          ))}
        </ul>
      )}
      <h3>Total: ${cartTotal.toFixed(2)}</h3>
    </div>
  );
};

export default Cart;

// const products: ProductData[] = [
//     {
//       id: "1",
//       price: 379.00,
//       title: "Nintendo Switch™ Mario Kart™ 8 Deluxe Bundle",
//       description: "Full Game Download + 3 Mo. Nintendo Switch Online Membership Included",
//       imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/4357e4576d07360a680141b648322792c7db4c075130df9a3cf3dfe428119e83?apiKey=2c0ef7d7caa24d8d8c04d3962010fc58&"
//     },
//     {
//       id: "2",
//       price: 329.09,
//       title: "Dyson Airwrap Complete Long",
//       description: "Multi-styler for long hair, includes barrels and brushes, without extreme heat",
//       imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/635324012c59a51d38baaf8d47b415efb5fed34c0b5f083575d0a34b700bdcd4?apiKey=2c0ef7d7caa24d8d8c04d3962010fc58&"
//     },
//     {
//       id: "3",
//       price: 139.95,
//       title: "STAUB Cast Iron Dutch Oven 0.5-qt Round Cocotte",
//       description: "Made in France, Serves 1, Matte Black",
//       imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/e2f9cf814b41318de69e8b298333c0b0099165989a7afd53bfe20a719c4fb11d?apiKey=2c0ef7d7caa24d8d8c04d3962010fc58&"
//     },
//     {
//       id: "4",
//       price: 264.09,
//       originalPrice: 300.09,
//       discount: 5,
//       title: "Apple AirPods Pro 2nd Generation",
//       description: "Wireless MagSafe Charging Case (USB-C) with Apple 1 Year Limited Warranty",
//       imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/d0433d335c24498bc3580764f61c32165906c9432a46d7cd85a0a4ebc5201b95?apiKey=2c0ef7d7caa24d8d8c04d3962010fc58&"
//     },
//     {
//       id: "5",
//       price: 139.09,
//       title: "Fujifilm Instax Mini 12 Instant Camera Lilac Purple",
//       description: "Fuji Film Value Pack (40 Sheets) + Shutter Accessories Bundle, Incl. Compatible Carrying Case",
//       imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/85378febe8c069436016271d03832cd4fe70677d65df683d00dcc007d88c8a6f?apiKey=2c0ef7d7caa24d8d8c04d3962010fc58&"
//     },
//     {
//       id: "6",
//       price: 59.09,
//       title: "LEGO Icons Bouquet of Roses Building Set",
//       description: "Artificial Flowers for Dinner Table Centerpieces, Adults Ages 18+ - Fall & Thanksgiving Flower",
//       imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/2b7603fa7cf0c2bb016178aa2550fd0a8fd0488041aada4eb74fe455e416253b?apiKey=2c0ef7d7caa24d8d8c04d3962010fc58&"
//     },
//     {
//       id: "7",
//       price: 349.09,
//       originalPrice: 399.09,
//       discount: 13,
//       title: "Apple AirPods Pro 2nd Generation",
//       description: "Wireless MagSafe Charging Case (USB-C) with Apple 1 Year Limited Warranty",
//       imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/b4b14b781a66b3367fd47c1c4aa6d5935845f168ec4f70638b5bd15ad00bfbf4?apiKey=2c0ef7d7caa24d8d8c04d3962010fc58&"
//     },
//     {
//       id: "8",
//       price: 24.99,
//       title: "THERMOS Stainless King Vacuum-Insulated Travel Mug",
//       description: "16 Ounce, Matte Stainless Steel",
//       imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/558919269e4d2ab3408ad0b62a9d622f82774b286b7035624b9c8463f653c77d?apiKey=2c0ef7d7caa24d8d8c04d3962010fc58&"
//     }
//   ];