'use client'
import React from 'react'
//import { SearchBar } from './ui/SearchBar'
import { Settings, ShoppingCart, CircleUserRound, Mic, Search } from 'lucide-react'
//import { useSearchParams, usePathname, useRouter } from 'next/navigation';
// import { useDebouncedCallback} from 'use-debounce'
 import { useCart } from './CartContext';

export const Header=()=>{

    //const searchParams = useSearchParams();
    // const pathname = usePathname();
    // const { replace } = useRouter();
     const{cartCount} = useCart();
    // const [search, setSearch] = React.useState('');
    // const [debouncedSearch] = useDebounce(search, 300);
    // const [searchResults, setSearchResults] = React.useState([]);
    // const handleSearch = useDebouncedCallback((term) => {

    //     console.log(`Searching... ${term}`);
       // const params = new URLSearchParams(searchParams);
    //     params.set('page', '1');
    //     if (term) {
    //       params.set('query', term);
    //     } else {
    //       params.delete('query');
    //     }
    //     replace(`${pathname}?${params.toString()}`);
    //   }, 300);
    
    return(
        <nav className="bg-[#011627] p-4 flex justify-between items-center">
            <div className="flex items-center">
                <img src="https://res.cloudinary.com/dbfydxolq/image/upload/v1734592271/merxpressLogo_alez0i.svg" alt="Merxpress Logo" className="h-10" style={{height:"60px",width:"400px"}}/>
            </div>
            <div className="flex items-center space-x-5 ">
                <div className="relative w-auto flex-grow">
                    <input type="text" placeholder=" Search for anything" className="pl-10 pr-4 py-2 rounded-full bg-gray-800 text-white flex-stretch focus:outline-none"
                    
                    />
                    {/* <button type='submit' className='rounded-full '> */}
                    {/* <img src='icons/search-1.svg' className='absolute right-3 top-2.5 text-gray-400 rounded-full'/>*/}
                    <Search className='absolute right-3 top-2.5 text-gray-400' strokeWidth={1.5} fill='none' role='button' type='submit' aria-disabled/>
                    {/* </button>  */}
                </div>
                {/* <SearchBar onSearch={handleSubmit}/> */}
                {/* <img src='icons/mic-1.svg' className='text-gray-400 absolute left'/> */}
                <Mic className='h-8 text-gray-400 absolute left' strokeWidth={1.0} fill='none'/>
                <div className="relative ">
                    
                    {/* <img src='icons/cart-outline.svg' className='h-10 w-10 fill-white '/> */}
                     <ShoppingCart className='w-full h-8 stroke-white hover:stroke-red-500 ' strokeWidth={1.0} fill='none' href='/marketplace' />
                    <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full px-1">{cartCount}</span>
                    
                </div>
                <a href="/marketplace" className="text-gray-400 hover:text-red-500">Cart</a>
                
                <div className="">
                    
                    {/* <img src='Windows_Settings_icon.svg' className='h-7 w-7 fill-white '/> */}
                    <Settings className='w-full h-8 stroke-white hover:stroke-red-500 ' strokeWidth={1.0} fill='none' href='null'/> 
                    {/* <span className="absolute top-0 right-0 bg-red-500 hover:fill-red-500 text-white text-xs rounded-full px-1"></span> */}
                    
                </div>
                <a href="#" className="text-gray-400 hover:text-red-500">Settings</a>
                <div className="relative">
                    
                    <CircleUserRound className='w-8 h-8 stroke-white hover:stroke-red-500 shrink-0 self-stretch my-auto aspect-square' strokeWidth={1.0} fill='none' href='null'/>
                    
                </div>
                <a href="#" className="text-gray-400 hover:text-red-500">Account</a>
                {/* <div className="flex items-center gap-x-1 hover:text-[#EB4545] text-[#ECECEC] cursor-pointer">
                    
                    <CircleUserRound className='w-8 h-8 stroke-white shrink-0 self-stretch my-auto aspect-square' strokeWidth={1.0} fill='none' href='null'/>
                    <span className="text-xs md:text-[16px]">Account</span>
                </div> */}
            </div>
        </nav>
    )
}
