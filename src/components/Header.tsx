import React from 'react'
//import { SearchBar } from './ui/SearchBar'

export const Header=()=>{
    
    return(
        <nav className="bg-gray-900 p-4 flex justify-between items-center">
            <div className="flex items-center">
                <img src="merxpressLogo.svg" alt="Merxpress Logo" className="h-10" style={{height:"60px",width:"250px"}}/>
            </div>
            <div className="flex items-center space-x-5">
                <div className="relative w-auto">
                    <input type="text" placeholder=" Search for anything" className="pl-10 pr-4 py-2 rounded-full bg-gray-800 text-white focus:outline-none"/>
                    <button type='submit'>
                    <img src='icons/search-1.svg' className='absolute right-3 top-2.5 text-gray-400'/></button>
                </div>
                {/* <SearchBar onSearch={handleSubmit}/> */}
                <img src='icons/mic-1.svg' className='text-gray-400 absolute left'/>
                
                <div className="relative">
                    
                    <img src='icons/cart-outline.svg' className='h-10 w-10 fill-white '/>
                    <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full px-1">21</span>
                    
                </div>
                <a href="#" className="text-gray-400">Cart</a>
                <a href="#" className="text-gray-400">Settings</a>
                <a href="#" className="text-gray-400">Account</a>
            </div>
        </nav>
    )
}