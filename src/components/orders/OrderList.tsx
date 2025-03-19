'use client'

import { useEffect, useState } from "react";
//import { Order } from "@/db/definitions";
import axios from "axios";


const Orders = () => {
    const [orders, setOrders] = useState([]);
    
    useEffect(() => {
        axios.get("http://localhost:5000/orders")
          .then((res) => setOrders(res.data))
          .catch((err) => console.error(err));
      }, []);


      return(
        <div className="container mx-auto p-4 pt-6 md:p-6 lg:p 8">
            <h1 className="text-2xl font-bold text-slate-800">Orders</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {orders.map((order:any) => (
                    <div key={order.id} className="bg-white p-4 rounded-lg shadow-md flex flex-col mr-4 mb-4 relative" >
                        <h2 className="text-lg font-bold mb-4">{order.id}</h2>
                        <p className="text-lg text-gray-800 mb-4">${order.total}</p>
                        <p className="text-sm text-slate-600 mb-4">{order.status}</p>
                        <p className="text-sm text-slate-600 mb-4">{order.user_id}</p>
                        <p className="text-sm text-slate-600 mb-4">{order.items[0].title} and other products</p>
                        <img src={order.items[0].imageUrl} alt="Images" />
                        {/* I want to map all products in the items array */}
                        {/* {orders.map((item: Product) => (
                            <div key={item.id} className="bg-white p-4 rounded-lg shadow-md flex flex-col mr-4 mb-4 relative" >
                                <p className="text-lg font-bold mb-4">{item.title}</p>
                                <p className="text-sm text-gray-600 mb-4">{item.price}</p>
                                {/* <p className="text-sm text-gray-600 mb-4">{item.quantity}</p> 
                                
                            </div>
                        ))}*/}
                    </div> 
                ))}
            </div>
        </div>
        )

    }

export default Orders;
