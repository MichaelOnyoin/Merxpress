import * as React from "react";
import { NavIcon } from "./NavIcon";
import { NavItemProps } from "./types";


export const NavItem: React.FC<NavItemProps> = ({ icon, label, isActive }) => (
  <div className={`flex items-center self-stretch my-auto ${isActive ? 'text-red-500' : 'text-gray-200'}`}>
    
    <NavIcon
      src={icon}
      alt={label}
      
      className="shrink-0 self-stretch my-auto w-10 aspect-square"
    />
    <div className="self-stretch my-auto">{label}</div>
  </div>
);