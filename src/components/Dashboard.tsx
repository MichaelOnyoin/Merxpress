import React from 'react';
import Image from 'next/image';

export const Dash = () => {
    return (
        <div className="p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className='w-full bg-white p-0 rounded-2xl h-60 hover:shadow-md flex justify-between col-span-1 sm:col-span-2 '>
            <div className="text-2xl font-semibold p-4">
                <span className="text-gray-600">E-</span><span className="text-red-600">Marketplace</span>
            </div>
            <img src="dash2.png" alt="Various products" className="w-24 h-24 object-cover" style={{height:'100%', width:'50%',borderRadius:'16px'}}/>
            </div>
            <div className="bg-white p-0 hover:shadow-md rounded-2xl flex justify-between col-span-1 sm:col-span-2">
                <div className="text-2xl font-semibold p-4 ">
                    Sell on <span className="text-red-600">Merxpress</span>
                </div>
                
                <img src="dash1.png" alt="Various products" className="w-24 h-24 object-cover" style={{height:'100%', width:'50%',borderRadius:'16px'}}/>
                {/* <Image loading='lazy' src={'/dash1.png'} alt='Various products' height={100} width={100} className='object-cover w-[50%] h-full rounded-2xl'/> */}
            </div>
            
            <div className="bg-white p-0 rounded-2xl hover:shadow-md flex justify-between row-span-2">
                <div className="text-2xl font-semibold p-4">
                    Merx<span className="text-red-600">Assist</span>
                </div>
                <img src="robo.png" alt="Robot assistant" className="w-24 h-24 object-cover self-end" style={{height:'55%', width:'42%',borderRadius:'16px'}} />
                {/* <Image loading='lazy' src={'/robo.png'} alt='Robot Assistant' height={24} width={24} className='object-cover h-[55%] w-[45%] rounded-2xl'/> */}
            </div>
            <div className="bg-white p-0 rounded-2xl hover:shadow-md flex justify-between">
                <div className="text-2xl font-semibold p-4">
                    Merx<span className="text-red-600">Pay</span>
                </div>
                <img src="pay.png" alt="Payment cards" className="w-24 h-24 object-cover"  style={{height:'100%', width:'50%',borderRadius:'16px'}}/>
            </div>
            <div className="bg-white p-4 rounded-2xl hover:shadow-md flex justify-between row-span-2">
                <div className="text-2xl font-semibold">
                    Merx<span className="text-red-600">Estates</span>
                </div>
                <img src="https://placehold.co/100x100" alt="Buildings" className="w-24 h-24 object-cover"/>
            </div>
            <div className="bg-white p-4 rounded-2xl hover:shadow-md flex justify-between">
                <div className="text-2xl font-semibold">
                    Merx<span className="text-red-600">Foundation</span>
                </div>
                <img src="https://placehold.co/100x100" alt="Hands planting a seedling" className="w-24 h-24 object-cover"/>
            </div>
            <div className="bg-white p-0 rounded-2xl hover:shadow-md flex justify-between">
                <div className="text-2xl font-semibold p-4">
                    Merx <span className="text-red-600">E-Hub</span>
                </div>
                <img src="globe.png" alt="Globe" className="w-24 h-24 object-cover self-end" style={{height:'90%', width:'40%',borderRadius:'16px'}}/>
            </div>
            <div className="bg-white p-4 rounded-2xl hover:shadow-md flex justify-between">
                <div className="text-2xl font-semibold">
                    Merx<span className="text-red-600">News</span>
                </div>
                <img src="https://placehold.co/100x100" alt="Person reading news" className="w-24 h-24 object-cover"/>
            </div>
            <div className="bg-white p-4 rounded-2xl hover:shadow-md flex justify-between">
                <div className="text-2xl font-semibold">
                    Merx<span className="text-red-600">Academy</span>
                </div>
                <img src="https://placehold.co/100x100" alt="Graduation cap and books" className="w-24 h-24 object-cover"/>
            </div>
            <div className="bg-white p-4 rounded-2xl hover:shadow-md flex justify-between">
                <div className="text-2xl font-semibold">
                    E-<span className="text-red-600">Services</span>
                </div>
                <img src="https://placehold.co/100x100" alt="Laptop" className="w-24 h-24 object-cover"/>
            </div>
            <div className="bg-white p-0 rounded-2xl hover:shadow-md flex justify-between">
                <div className="text-2xl font-semibold p-4">
                    Merx<span className="text-red-600">Care</span>
                </div>
                <img src="dr.png" alt="Smiling person" className="w-24 h-24 object-cover"  style={{height:'100%', width:'50%',borderRadius:'16px'}}/>
            </div>
            <div className="bg-white p-4 rounded-2xl hover:shadow-md flex justify-between">
                <div className="text-2xl font-semibold">
                    Merx<span className="text-red-600">Clips</span>
                </div>
                <img src="https://placehold.co/100x100" alt="Television" className="w-24 h-24 object-cover"/>
            </div>
        </div>
    );
};