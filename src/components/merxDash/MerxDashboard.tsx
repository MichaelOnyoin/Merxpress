import * as React from "react";
import { MerxCard } from "./MerxCard";
import { MerxLayout } from "./MerxLayout";

const cardData = [
  {
    title: "E-",
    titleSpan: "Marketplace",
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/95ffaf49092aefcaf7fdcdbf2f8f4dddbfca8422e2c73d9912ceb94b4318a7d8?placeholderIfAbsent=true&apiKey=2c0ef7d7caa24d8d8c04d3962010fc58",
    className: "w-full",
    imageWidth: "w-full",
    imageAspect: "aspect-[1.52]"
  },
  {
    title: "Sell on Merx",
    titleSpan: "press",
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/27e77200f1f6446ded9470e846fddbf1d642967c269158041a64feb0bfd5b97c?placeholderIfAbsent=true&apiKey=2c0ef7d7caa24d8d8c04d3962010fc58",
    className: "w-full",
    imageWidth: "w-full",
    imageAspect: "aspect-[1.36]"
  },
  {
    title: "Merx",
    titleSpan: "Pay",
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/173dd5f0d02cd1bd83de69d2970b9bcb76aed2076d2506569c2f9be147e3d100?placeholderIfAbsent=true&apiKey=2c0ef7d7caa24d8d8c04d3962010fc58",
    imageWidth: "w-40"
  },
  {
    title: "Merx",
    titleSpan: "Care",
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/0301c95201e42505fe74248357105e51fb435105646d7001f169210489ac648d?placeholderIfAbsent=true&apiKey=2c0ef7d7caa24d8d8c04d3962010fc58",
    imageWidth: "w-[180px]",
    imageAspect: "aspect-[1.12]"
  },
  {
    title: "Merx",
    titleSpan: "Assist",
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/0301c95201e42505fe74248357105e51fb435105646d7001f169210489ac648d?placeholderIfAbsent=true&apiKey=2c0ef7d7caa24d8d8c04d3962010fc58",
    imageWidth: "w-[180px]",
    imageAspect: "aspect-[1.12]"
  },
  {
    title: "Merx",
    titleSpan: "Estates",
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/0301c95201e42505fe74248357105e51fb435105646d7001f169210489ac648d?placeholderIfAbsent=true&apiKey=2c0ef7d7caa24d8d8c04d3962010fc58",
    imageWidth: "w-[180px]",
    imageAspect: "aspect-[1.12]"
  },
  {
    title: "Merx",
    titleSpan: "Foundation",
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/0301c95201e42505fe74248357105e51fb435105646d7001f169210489ac648d?placeholderIfAbsent=true&apiKey=2c0ef7d7caa24d8d8c04d3962010fc58",
    imageWidth: "w-[180px]",
    imageAspect: "aspect-[1.12]"
  },
  {
    title: "Merx",
    titleSpan: "News",
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/0301c95201e42505fe74248357105e51fb435105646d7001f169210489ac648d?placeholderIfAbsent=true&apiKey=2c0ef7d7caa24d8d8c04d3962010fc58",
    imageWidth: "w-[180px]",
    imageAspect: "aspect-[1.12]"
  }
];

export const MerxDashboard: React.FC = () => {
  return (
    <MerxLayout>
      <div>
      <div className="flex gap-5 max-md:flex-col ">
        <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
          <div className="overflow-hidden grow pl-10 w-full bg-white rounded-2xl max-md:mt-5 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col">
              <div className="flex flex-col w-[35%] max-md:ml-0 max-md:w-full">
                <div className="mt-10 text-4xl font-semibold text-gray-600">
                  E-<span className="text-red-500">Marketplace</span>
                </div>
              </div>
              <div className="flex flex-col ml-5 w-[65%] max-md:ml-0 max-md:w-full">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/95ffaf49092aefcaf7fdcdbf2f8f4dddbfca8422e2c73d9912ceb94b4318a7d8?placeholderIfAbsent=true&apiKey=2c0ef7d7caa24d8d8c04d3962010fc58"
                  alt="E-Marketplace illustration"
                  className="object-contain grow w-full aspect-[1.52] max-md:mt-10 max-md:max-w-full background"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col ml-2 w-6/12 max-md:ml-0 max-md:w-full">
          <MerxCard {...cardData[1]} />
        </div>
      </div>
      <div className="mt-3 w-full  max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          {[...Array(4)].map((_, index) => (
            <div key={index} className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col w-full max-md:mt-5">
                <MerxCard {...cardData[index]} />
              </div>
            </div>
          ))}
        </div>
      </div>
      </div>
    </MerxLayout>
  );
};