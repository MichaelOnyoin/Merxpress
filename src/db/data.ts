import { sql } from '@vercel/postgres';
import { unstable_noStore as noStore } from 'next/cache';
import { User, Product } from './definitions';
//import { neon } from "@neondatabase/serverless";
import { Order } from './definitions';

export const getPosts = async () => {
  const { rows } = await sql`SELECT * FROM posts`;
  return rows;
};

export const getItems = async()=>{
  const {rows} = await sql`SELECT * FROM products`;
  return rows;
}

export async function getProducts() {
    noStore();
  try{
    console.log('Fetching product data...');
    await new Promise((resolve) => setTimeout(resolve, 3000));
    
    const { rows } = await sql<Product>`SELECT * FROM products`;
    return rows;
  } 
  catch(error){
    console.log('Error fetching products', error);
    throw new Error('Error fetching products');
    //return [];
  }
}

export async function getOrders() {
  try {
    const { rows } = await sql<Order>`SELECT * FROM orders`;
    return rows;
  }
  catch (error) {
    console.error('Failed to fetch orders:', error);
    throw new Error('Failed to fetch orders.');
  }
}

export async function getUser(email: string) {
    try {
      const user = await sql`SELECT * FROM users WHERE email=${email}`;
      return user.rows[0] as User;
    } catch (error) {
      console.error('Failed to fetch user:', error);
      throw new Error('Failed to fetch user.');
    }
  }
  
//   export async function getData() {
//     const sql = neon(process.env.DATABASE_URL||'');
//     const data = await sql`SELECT * FROM products;`;
//     return data;
// }

const ITEMS_PER_PAGE= 10;
export async function fetchProducts(query: string) {
  try {
    const count = await sql`SELECT COUNT(*)
    FROM products
    WHERE
      products.title ILIKE ${`%${query}%`} OR
      products.description ILIKE ${`%${query}%`} OR
      products.price::text ILIKE ${`%${query}%`} OR
      
  `;

    const totalPages = Math.ceil(Number(count.rows[0].count) / ITEMS_PER_PAGE);
    return totalPages;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch total number of invoices.');
  }
}