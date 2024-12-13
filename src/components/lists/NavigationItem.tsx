import * as React from 'react';

interface NavigationItemProps {
  label: string;
  isHighlighted?: boolean;
}
//<button className="mt-6 px-6 py-3 bg-red-500 text-white rounded-lg">Explore More</button>
export function NavigationItem({ label, isHighlighted }: NavigationItemProps) {
  return (
    <div
      className={`self-stretch my-auto hover:text-red-500 ${
        isHighlighted 
          ? isHighlighted === true && label === 'Catalog'
            ? 'mt-6 px-6 py-3 bg-red-500 text-white ml-2 rounded-lg'
            : 'text-red-500'
          : ''
      }`}
      role="button"
      tabIndex={0}
    >
      {label}
    </div>
  );
}