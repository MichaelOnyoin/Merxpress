import * as React from "react";

interface HeroProps {
  title: string;
  subtitle: string;
  buttonText: string;
}

export const Hero: React.FC<HeroProps> = () => {
  return (
    <div className="flex flex-col self-stretch my-auto w-full font-bold text-slate-900 max-md:mt-10 max-md:max-w-full">
      <div className="mr-2.5 text-6xl leading-[83px] max-md:max-w-full max-md:text-4xl max-md:leading-[57px]">
        Welcome to Merxpress Mall
      </div>
      <div className="mt-10 text-4xl font-semibold max-md:max-w-full">
        Infinite opportunities for everyone and everywhere
      </div>
      <button 
        className="gap-2 self-start px-10 mt-10 text-xl text-gray-200 bg-red-500 rounded-lg min-h-[60px] max-md:px-5"
        tabIndex={0}
        aria-label="Explore More"
      >
        Explore More
      </button>
    </div>
  );
}