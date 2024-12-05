'use client'
import * as React from "react";
import { SearchBar } from "./SearchBar";
import { NavItem } from "./NavItem";
import { NavIcon } from "./NavIcon";

export const Navigation: React.FC = () => {
  const handleSearch = (query: string) => {
    console.log("Search query:", query);
  };

  const navItems = [
    { icon: "/icons/cart-outline.svg", label: "Cart", isActive: false },
    { icon: "/icons/settings-outline.svg", label: "Settings", isActive: true },
    { icon: "/icons/person-outline.svg", label: "Account", isActive: false }
    
  ];

  return (
    <div className="px-20 py-7 w-full bg-slate-900 max-md:px-5 max-md:max-w-full ">
      <div className="flex gap-2 p-4 max-md:flex-col">
        
        <div className="flex flex-col w-[20%] ml-0 max-md:ml-0 max-md:w-full">

          <NavIcon
            //src="https://cdn.builder.io/api/v1/image/assets/TEMP/136a5a4f9a7a31e0045473d90cea86ff7b61a29999c4184d334cb8dd7d827178?apiKey=2c0ef7d7caa24d8d8c04d3962010fc58&"
            src="merxpressLogo.svg"
            alt="Company logo"
            className="object-contain grow shrink-0 max-w-full aspect-[5.56] w-[230px] max-md:mt-10"
          />
        </div>
        <div className="flex flex-col ml-5 w-[50%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-wrap gap-10 w-full max-md:mt-10 max-md:max-w-full">
            <SearchBar onSearch={()=>handleSearch} />
            <div className="flex flex-auto items-start my-auto text-xl leading-tight whitespace-nowrap">
              <div className="flex gap-8 items-center mr-0">
               
                {navItems.map((item, index) => (
                  <NavItem
                    key={index}
                    icon={item.icon}
                    label={item.label}
                    
                    isActive={item.isActive}
                  />
                ))}
              </div>
             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};