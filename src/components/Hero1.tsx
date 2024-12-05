import React from 'react'

export const Page=()=>{
    return(
        <div className="mt-10 px-4 bg-white">
            <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2">
                    <h1 className="text-6xl mr-2.5 font-bold text-gray-700">Welcome to Merxpress Mall</h1>
                    <p className="text-2xl text-gray-700 mt-4 font-semibold">Infinite opportunities for everyone <br></br> and everywhere</p>
                    <button className="mt-6 px-6 py-3 bg-red-500 text-white rounded-lg">Explore More</button>
                </div>
                <div className="md:w-1/2 mt-6 md:mt-0 mr-4">
                    <img src="Hero.png" alt="Two people working together on a computer" className="rounded-lg shadow-lg" style={{height:"400px",width:"700px"}} />
                </div>
            </div>
            <div className="flex flex-col mt-10 mb-10 md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4 p-4">
                <div className="relative w-full md:w-1/2">
                        {/* <img src="https://placehold.co/600x200" alt="Earn points with every purchase banner" className="w-full rounded-lg" style={{height:'',width:''}} /> */}
                        <img src="banner1.svg" alt="Earn points with every purchase banner" className="w-full rounded-lg" style={{height:'200px',width:'600px'}} />
                        <div className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1"> 
                            <button type="button"><img src="icons/arrow-forward.svg" alt=" arrow" style={{height:'10px', width:'10px'}} /></button>
                        </div>
                </div>
                <div className="relative  w-full md:w-1/2">
                        <img src="banner2.svg" alt="Weekend special discounts on our services banner" className="w-full rounded-lg" style={{height:'200px',width:'600px'}}/>
                        <div className="absolute top-2 right-2 bg-red-500 text-white rounded-lg p-1">
                          <button type="button" className='resultOptions i'><img src="icons/arrow-forward.svg" alt=" arrow" style={{height:'10px', width:'10px'}} /></button>  
                        </div>
                </div>
            </div>


        </div>
    )
}