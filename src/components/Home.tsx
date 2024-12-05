import React from 'react';


export const Tome=()=>{
    return (
        
            
                <div>
                            <nav className="bg-gray-900 p-4 flex justify-between items-center">
                                <div className="flex items-center">
                                    <img src="merxpressLogo.svg" alt="Merxpress Logo" className="h-10" style={{height:"60px",width:"250px"}}/>
                                </div>
                                <div className="flex items-center space-x-4">
                                    <div className="relative">
                                        <input type="text" placeholder=" Search for anything" className="pl-10 pr-4 py-2 rounded-full bg-gray-800 text-white focus:outline-none"/>
                                        {/* <i className="fas fa-search absolute left-3 top-2.5 text-gray-400"></i> */}
                                        <img src='icons/search-1.svg' className='absolute right-3 top-2.5 text-gray-400'/>
                                    </div>
                                    {/* <i className="fas fa-microphone text-gray-400"></i> */}
                                    <img src='icons/mic-1.svg' className='text-gray-400'/>
                                    {/* <img src='icons/menu-1.svg' className='absolute text-gray-400'/> */}
                                    {/* <i className="fas fa-bars text-gray-400"></i> */}
                                    <div className="relative">
                                        {/* <i className="fas fa-shopping-cart text-gray-400"></i> */}
                                        <img src='icons/cart-outline.svg' className='h-10 w-10 '/>
                                        <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full px-1">21</span>
                                        
                                    </div>
                                    <a href="#" className="text-gray-400">Cart</a>
                                    <a href="#" className="text-gray-400">Settings</a>
                                    <a href="#" className="text-gray-400">Account</a>
                                </div>
                            </nav>
                            <div className="mt-10 px-4 bg-white">
                                <div className="flex flex-col md:flex-row items-center">
                                    <div className="md:w-1/2">
                                        <h1 className="text-6xl mr-2.5 font-bold text-gray-900">Welcome to Merxpress Mall</h1>
                                        <p className="text-2xl text-gray-700 mt-4 font-semibold">Infinite opportunities for everyone <br></br> and everywhere</p>
                                        <button className="mt-6 px-6 py-3 bg-red-500 text-white rounded-lg">Explore More</button>
                                    </div>
                                    <div className="md:w-1/2 mt-6 md:mt-0">
                                        <img src="Hero.png" alt="Two people working together on a computer" className="rounded-lg shadow-lg" style={{height:"400px",width:"700px"}} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    
    
    )
}
