import * as React from "react";
import { NavIconProps } from "./types";

export const NavIcon: React.FC<NavIconProps> = ({ src, alt, className }) => (
  <img
    loading="lazy"
    src={src}
    alt={alt}
    className={`object-contain ${className}`}
  />
);