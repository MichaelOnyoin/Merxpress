import * as React from "react";
import { MerxCardProps } from "./types";

export const MerxCard: React.FC<MerxCardProps> = ({
  title,
  titleSpan,
  imageSrc,
  imageWidth = "w-40",
  imageAspect = "aspect-square",
  className = "",
  imageClassName = ""
}) => {
  return (
    <div className={`overflow-hidden pt-6 pl-10 bg-white rounded-2xl bg-blend-normal max-md:pl-5 ${className}`}>
      <div className="flex gap-1 max-md:flex-col">
        <div className="flex flex-col w-[50%] max-md:ml-0 max-md:w-full">
          <div className="mt-5 text-4xl font-semibold text-gray-700 max-md:mt-10">
            {title}<span className="text-red-500">{titleSpan}</span>
          </div>
        </div>
        <div className="flex flex-col ml-5 w-[54%] max-md:ml-0 max-md:w-full">
          <img
            loading="lazy"
            src={imageSrc}
            alt={`${title}${titleSpan} illustration`}
            className={`object-contain shrink-0 max-w-full ${imageWidth} ${imageAspect} ${imageClassName} max-md:mt-10`}
          />
        </div>
      </div>
    </div>
  );
};