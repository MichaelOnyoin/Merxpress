import * as React from 'react';
import { NavigationItem } from './NavigationItem';
import { navigationItems } from './NavigationData';

export function Navigation() {
  return (
    <nav className="flex flex-wrap gap-2 mb-8 justify-between items-center text-sm font-bold text-slate-900 mr-2 ">
      {navigationItems.map((item) => (
        <NavigationItem
          
          key={item.id}
          label={item.label}
          isHighlighted={item.isHighlighted}
        />
      ))}
    </nav>
  );
}