"use server";
import { neon } from "@neondatabase/serverless";
import { Product } from './definitions';
import { Order } from './definitions';
// import { getUserDetails } from '@/app/actions';
// import { stackServerApp } from '@/stack';
//import { CartItem } from "./definitions";

const db_key =process.env.DATABASE_URL;
export async function getData() {
    
    if (!process.env.DATABASE_URL) {
        throw new Error("DATABASE_URL is not defined");
    }
    const sql = neon(db_key||'');
    const data = await sql('SELECT * FROM products');
    console.log('Fetching product data...');
    return data as Product[];
}

export async function getOrder() {
    //const db_key =process.env.DATABASE_URL;
    if (!process.env.DATABASE_URL) {
        throw new Error("DATABASE_URL is not defined");
    }
    const sql = neon(db_key||'');
    //const data = await sql('SELECT * FROM orders WHERE id = $1', [id]);
    const data = await sql('SELECT * FROM orders');
    console.log('Fetching your placed order data...');
    return data as Order[];
}

//Insert data into the orders table that contains a column for total and items. The total is the total price of the items in the cart and the items is an array of the items in the cart. The items array is a JSON object that contains the id, title, price, and quantity of each item in the cart. The total price of the items in the cart is calculated by multiplying the price of each item by the quantity of that item and summing the results. The items array is created by mapping over the items in the cart and creating a new object for each item that contains the id, title, price, and quantity of that item. The items array is then passed to the INSERT INTO query as a parameter. The total price of the items in the cart is also passed to the INSERT INTO query as a parameter. The total price and items array are then inserted into the orders table in the database.
//javascript

// export async function setOrder(total:number, cartItems:any) {
   
//     const user = await stackServerApp.getUser();
//     const userProfile = await getUserDetails(user?.id);
//     if (!process.env.DATABASE_URL) {
//         throw new Error("DATABASE_URL is not defined");
//     }
//     const sql = neon(db_key||'');
//     // const items = cartItems.map((item: any) => {
//     //     return {
//     //         id: item.id,
//     //         title: item.title,
//     //         price: item.price,
//     //         quantity: item.quantity
//     //     }

//     // });
//     await sql('INSERT INTO orders (total, items, user_id) VALUES ($1, $2 , $3)', [total, JSON.stringify(cartItems), userProfile?.id]);
    
//     //await sql('INSERT INTO orders (total, items, user_id) VALUES ($1, $2 , $3)', [total, JSON.stringify(items), userProfile?.id]);
      
//     console.log('inserting into order data...');
    
// }

export async function getOrders() {
    const sql = neon(db_key||'');
    try {
        const data = await sql('SELECT * FROM orders');
        console.log('Fetching orders...');
        return data as Order[];
      
    } catch (error) {
        console.error("Error fetching orders:", error);
        throw error;
    }
};
