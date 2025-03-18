import * as React from "react";

interface HeroButtonProps {
  text: string;
}

export function HeroButton({ text }: HeroButtonProps) {
  return (
    <button 
      className="gap-2 self-start px-10 mt-5 text-lg text-white bg-red-500 rounded-lg min-h-[40px] max-md:px-5"
      aria-label={text}
    >
      {text}
    </button>
  );
}