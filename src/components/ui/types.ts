export interface NavIconProps {
    src: string;
    alt: string;
    className?: string;
  }
  
  export interface NavItemProps {
    icon: string;
    label: string;
    isActive?: boolean;
  }
  
  export interface SearchBarProps {
    onSearch: (query: string) => void;
  }

  export interface HeroProps {
    title: string;
    subtitle: string;
    buttonText: string;
    imageUrl: string;
    imageAlt: string;
  }