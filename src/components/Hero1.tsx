'use client'
import React from 'react'
import Link from 'next/link';

export const Page=()=>{
    

    return(
        <div className="mt-10 px-4 bg-white">
            <div className="flex flex-col md:flex-row items-center">
                <div className="ml-10 md:w-1/2">
                    <h1 className="text-6xl mr-2.5 font-bold text-gray-700">Welcome to Merxpress Mall</h1>
                    <p className="text-2xl text-gray-700 mt-4 font-semibold">Infinite opportunities for everyone <br></br> and everywhere</p>
                    <Link href="/marketplace">
                    <button className="mt-6 px-6 py-3 bg-red-500 text-white rounded-lg" >Explore More</button>
                    </Link>
                </div>
                <div className="md:w-1/2 mt-6 md:mt-0 mr-4">
                    <img src="Hero.png" alt="Two people working together on a computer" className="rounded-lg shadow-lg" style={{height:"400px",width:"700px"}} />
                </div>
            </div>
            <div className="flex flex-col mt-10 mb-10 md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4 p-4">
                <div className="relative w-full md:w-1/2">
                        
                    <img src="banner1.svg" alt="Earn points with every purchase banner" className="w-full rounded-lg hover:scale-105" style={{height:'200px',width:'600px'}} />
                        
                </div>
                <div className="relative  w-full md:w-1/2">
                    <img src="banner2.svg" alt="Weekend special discounts on our services banner" className="w-full rounded-lg hover:scale-105" style={{height:'200px',width:'600px'}}/>
                        
                </div>
            </div>


        </div>
    )
}