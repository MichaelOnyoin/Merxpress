// 'use client'

// import { use } from 'react';
// import React from 'react';
// //import { CartItem } from '@/db/definitions';

// export default function OrderPage({
//     orders,
//   }: {
//     orders: Promise<{ id: string; total: number; status: string; items : any;}[]>
//   }) {
    
//     const allOrders = use(orders);
    
//            return (
//             <div className="orders-page">
//                 {/* <h1>Orders</h1> */}
//                 {allOrders.map((order) => (
//                         <div key={order.id} className="bg-white p-4 rounded-lg shadow-md flex flex-col mr-4 mb-4 relative" >
//                          {/* const Orders = use(orders.items); */}
//                          <div className="flex justify-between items-center mb-4 space-x-4">
//                             <h2 className="text-lg font-bold mb-4">{order.id}</h2>
//                             <p className="text-sm text-gray-600 mb-4">{order.total}</p>
//                             <p className="text-sm text-slate-600 mb-4">{order.status}</p>
//                             <p className="text-sm text-gray-600 mb-4">{order.items[0].title}</p>
//                             {/* <p className="text-sm text-gray-600 mb-4">{order.items[0].product.title}</p> */}
//                             {/* I want to map all products in the items array */}
//                             {/* {order.items.map((item: any) => (
//                                 <div key={item.id} className="bg-white p-4 rounded-lg shadow-md flex flex-col mr-4 mb-4 relative" >
//                                     <p className="text-lg font-bold mb-4">{item.title}</p>
//                                     <p className="text-sm text-gray-600 mb-4">{item.price}</p>
//                                     <p className="text-sm text-gray-600 mb-4">{item.quantity}</p>
                                    
//                                 </div>
//                             ))} */}
//                         </div>
//                         </div> 
//                 ))}
//             </div>

//         )


//   }