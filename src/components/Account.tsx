
import React from 'react'
import Link from 'next/link'
import { HeroButton } from './ui/HeroButton'


export const Account =()=> {
  

    return (
        <div className="flex flex-col items-center justify-center w-[400px] bg-[#011627] rounded-lg">
            <div className="text-center p-4 text-white bg-transparent opacity-100 "> 
                <h1>Account</h1>
                   
                    <Link href='/handler/sign-in'>
                    <HeroButton text='Sign In' />
                    </Link> 
                <p className='text-lg '>OR</p>
                <p>Don&apos;t have an account?</p>
                <Link href="/handler/sign-up">
                    <HeroButton text='Sign Up'/>
                    
                </Link>
                {/* <Link href="/handler/sign-out" className='ml-4'>
                    <HeroButton text='Sign Out'/>
                    
                </Link> */}
         
            </div>
        </div>
    )
}