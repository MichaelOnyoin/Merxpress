import React from "react";

export const Footer = () => {
    return (
        <footer className="text-sm py-8 bg-gray-900">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center md:items-start">
                    <div className="mb-6 md:mb-0">
                        <h1 className="text-4xl font-bold text-white">
                            <span className="text-white">Merx</span><span className="text-red-500">press</span>
                        </h1>
                    </div>
                    <div className="flex flex-col md:flex-row justify-between w-full md:w-auto">
                        <div className="mb-6 md:mb-0 md:mr-8">
                            <h2 className="text-gray-400 mb-2">Connect With Us</h2>
                            <ul>
                                <li className="mb-1"><a href="#" className="text-white hover:underline">Facebook</a></li>
                                <li className="mb-1"><a href="#" className="text-white hover:underline">LinkedIn</a></li>
                                <li className="mb-1"><a href="#" className="text-white hover:underline">Twitter</a></li>
                                <li className="mb-1"><a href="#" className="text-white hover:underline">Instagram</a></li>
                            </ul>
                        </div>
                        <div className="mb-6 md:mb-0 md:mr-8">
                            <h2 className="text-gray-400 mb-2">About Merxpress</h2>
                            <ul>
                                <li className="mb-1"><a href="#" className="text-white hover:underline">About Us</a></li>
                                <li className="mb-1"><a href="#" className="text-red-500 hover:underline">Merxpress Careers</a></li>
                                <li className="mb-1"><a href="#" className="text-white hover:underline">Blogs</a></li>
                                <li className="mb-1"><a href="#" className="text-white hover:underline">Merx Clips</a></li>
                                <li className="mb-1"><a href="#" className="text-white hover:underline">Merxpress Express</a></li>
                            </ul>
                        </div>
                        <div className="mb-6 md:mb-0 md:mr-8">
                            <h2 className="text-gray-400 mb-2">Customer Service</h2>
                            <ul>
                                <li className="mb-1"><a href="#" className="text-white hover:underline">Terms & Conditions</a></li>
                                <li className="mb-1"><a href="#" className="text-white hover:underline">Returns & Refund Policy</a></li>
                                <li className="mb-1"><a href="#" className="text-white hover:underline">Privacy Notice</a></li>
                                <li className="mb-1"><a href="#" className="text-white hover:underline">Seller Portal</a></li>
                                <li className="mb-1"><a href="#" className="text-white hover:underline">Report a Product</a></li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="text-gray-400 mb-2">Payment</h2>
                            <ul>
                                <li className="mb-1"><a href="#" className="text-white hover:underline">Payment on Delivery</a></li>
                                <li className="mb-1 flex items-center">
                                    <img src="visa.png" alt="Visa logo" className="mr-2 rounded-sm" style={{height:'20px', width:'30px'}}/>
                                    <img src="master.png" alt="Mastercard log" className="rounded-sm" style={{height:'20px', width:'30px'}}/>
                                   
                                </li>
                                <li className="mb-1"><a href="#" className="text-white hover:underline">Merx Cash</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="border-t border-gray-700 mt-8 pt-4 text-center">
                    <p className="text-gray-400">&copy; All Rights Reserved. 2024, Merxpress.com, Inc. or its affiliates</p>
                    <div className="flex justify-center space-x-4 mt-2">
                        <a href="#" className="text-white hover:underline">Conditions of Use</a>
                        <a href="#" className="text-white hover:underline">Privacy Notice</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};