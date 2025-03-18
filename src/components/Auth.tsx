'use server'
import React from 'react'
import Link from 'next/link'
import { getUserDetails } from '@/app/actions';
import { stackServerApp } from '@/stack';
import Image from 'next/image';


export default async function Auth () {
    
    
    const user = await stackServerApp.getUser();
    const app = stackServerApp.urls;
    const userProfile = await getUserDetails(user?.id);

    return (
        <div className="flex flex-col items-center justify-center w-[400px] bg-[#011627] rounded-lg">
            <div className="text-center p-4 text-white bg-transparent opacity-100"> 
                
            {user ? (
            <div className="flex items-center gap-4">
            <span className='inline-flex h-8 items-end flex-col'>
            {userProfile?.name && <span className="text-[14px] text-gray-600 dark:text-gray-300">
                {`Hello, ${userProfile?.name.split(' ')[0]}`}
            </span>}
            <Link
                href={app.signOut}
                className="bg-gray-100 px-1 underline text-[11px] hover:no-underline text-orange-300 rounded-lg"
            >
                Sign Out
            </Link>
            </span>
            {
                userProfile?.raw_json.profile_image_url && 
                <Image 
                src={userProfile?.raw_json.profile_image_url}
                alt="User avatar"
                width={32}
                height={32}
                className="rounded-full"
                />
            }
                
            </div>
      ) : (
        <div className="flex items-center gap-3">
          <Link
            href={app.signIn}
            className="inline-flex h-8 items-center justify-center rounded-md px-4 text-[13px] font-medium text-gray-700 transition-all hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-800"
          >
            Log In
          </Link>
          <Link
            href={app.signUp}
            className="inline-flex h-8 items-center justify-center font-medium  text-center rounded-full outline-none   dark:text-black bg-primary-1 hover:bg-[#00e5bf] whitespace-nowrap px-6 text-[13px] transition-colors duration-200"
          >
            Sign Up
          </Link>
        </div>
      )}
            </div>
        </div>
    )
}