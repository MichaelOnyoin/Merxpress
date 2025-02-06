import { sql } from '@vercel/postgres';
import { unstable_noStore as noStore } from 'next/cache';
import { User, Product } from './definitions';

export const getPosts = async () => {
  const { rows } = await sql`SELECT * FROM posts`;
  return rows;
};

export async function getProducts() {
    noStore();
  try{
    console.log('Fetching product data...');
    //await new Promise((resolve) => setTimeout(resolve, 3000));
    //const { rows } = await sql<Product>`SELECT * FROM products`;
    const { rows } = await sql<Product>`SELECT * FROM products`;
    return rows;
  } 
  catch(error){
    console.log('Error fetching products', error);
    throw new Error('Error fetching products');
    //return [];
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
  
