"use server";
import { neon } from "@neondatabase/serverless";
import { Product } from './definitions';


export async function getData() {
    const db_key =process.env.DATABASE_URL;
    if (!process.env.DATABASE_URL) {
        throw new Error("DATABASE_URL is not defined");
    }
    const sql = neon(db_key||'');
    const data = await sql('SELECT * FROM products');
    console.log('Fetching product data...');
    return data as Product[];
}




// 'use server'
// import {sql} from '@vercel/postgres';
// import {unstable_noStore as noStore} from 'next/cache';
//import {z} from 'zod';
// import { revalidatePath } from 'next/cache';
// import { redirect } from 'next/navigation';
// import { signIn } from '@/auth';
//  import { AuthError } from 'next-auth';

// export async function authenticate(
//     prevState: string | undefined,
//     formData: FormData,
//   ) {
//     try {
//       await signIn('credentials', formData);
//     } catch (error) {
//       if (error instanceof AuthError) {
//         switch (error.type) {
//           case 'CredentialsSignin':
//             return 'Invalid credentials.';
//           default:
//             return 'Something went wrong.';
//         }
//       }
//       throw error;
//     }
//   }