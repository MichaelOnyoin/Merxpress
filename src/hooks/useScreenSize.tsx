'use client';
import { useState, useEffect } from 'react';

const useScreenSize = () => {
    const [screenSize, setScreenSize] = useState({
        width: 0,
        height: 0
    });
   

    useEffect(() => {
        function getScreenSize() {
            
            return window.innerWidth;
                }
        function handleResize() {
            setScreenSize({
                width: getScreenSize(),
                height: window.innerHeight
                });
                }
                handleResize();
                window.addEventListener('resize', handleResize);
                return () => window.removeEventListener('resize', handleResize);
            }, []);

    
                return screenSize;
    }

export default useScreenSize;