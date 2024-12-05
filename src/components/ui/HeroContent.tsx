import * as React from "react";
import { HeroButton } from "./HeroButton";

interface HeroContentProps {
  title: string;
  subtitle: string;
  buttonText: string;
}

export function HeroContent({ title, subtitle, buttonText }: HeroContentProps) {
  return (
    <div className="flex flex-col self-stretch my-auto w-full font-bold text-slate-900 max-md:mt-10 max-md:max-w-full ">
      <h1 className="mr-2.5 text-6xl leading-[83px] max-md:max-w-full max-md:text-4xl max-md:leading-[57px]">
        {title}
      </h1>
      <h2 className="mt-10 text-4xl font-semibold max-md:max-w-full">
        {subtitle}
      </h2>
      <HeroButton text={buttonText} />
    </div>
  );
}