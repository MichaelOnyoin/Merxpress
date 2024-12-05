import * as React from "react";
import { HeroContent } from "./HeroContent";
import type { HeroProps } from "./types";

export function Hero({ title, subtitle, buttonText, imageUrl, imageAlt }: HeroProps) {
  return (
    <div className="self-center mt-32 w-full max-w-[1720px] max-md:mt-10 max-md:max-w-full bg-white">
      <div className="flex gap-5 max-md:flex-col">
        <div className="flex flex-col w-[39%] max-md:ml-0 max-md:w-full">
          <HeroContent
            title={title}
            subtitle={subtitle}
            buttonText={buttonText}
          />
        </div>
        <div className="flex flex-col ml-5 w-[61%] max-md:ml-0 max-md:w-full">
          <img
            loading="lazy"
            src={imageUrl}
            alt={imageAlt}
            className="object-contain grow w-full rounded-2xl aspect-[2.12] max-md:mt-10 max-md:max-w-full"
          />
        </div>
      </div>
    </div>
  );
}