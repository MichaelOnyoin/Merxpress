'use client'
import * as React from "react";
import { NavIcon } from "./NavIcon";
import { SearchBarProps } from "./types";

export const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = React.useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchQuery);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-wrap flex-auto items-center mr-0 max-md:max-w-full">
      <div className="flex gap-2 items-center self-stretch px-6 my-auto rounded-s-lg bg-slate-600 min-h-[58px] w-[78px] max-md:px-5">
        <NavIcon
          //src="https://cdn.builder.io/api/v1/image/assets/TEMP/b45483c2488cc55740f95892f57323d973ce3a4017c1e1c79ef852ff3a7164b8?apiKey=2c0ef7d7caa24d8d8c04d3962010fc58&"
          src="/icons/menu-1.svg"
          alt="Search icon"
          className="self-stretch my-auto w-10 aspect-square"
        />
      </div>
      <div className="flex flex-wrap flex-1 shrink gap-5 items-center self-stretch px-5 py-4 my-auto text-xl leading-tight border-t border-b border-solid basis-6 border-y-slate-600 min-h-[40px] min-w-[140px] text-slate-500 max-md:max-w-full">
        <label htmlFor="searchInput" className="sr-only">Search for anything</label>
        <input
          type="text"
          id="searchInput"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search for anything"
          className="flex-1 shrink self-stretch my-auto basis-0 max-md:max-w-full bg-transparent border-none outline-none"
        />
        <NavIcon
          src="/icons/mic-1.svg"
          alt="Search options"
          className="shrink-0 self-stretch my-auto w-6 aspect-square"
        />
      </div>
      <button type="submit" className="flex gap-2 items-center self-stretch px-8 my-auto bg-red-500 rounded-e-lg  min-h-[60px] w-[88px] max-md:px-5">
        <NavIcon
        //src="https://cdn.builder.io/api/v1/image/assets/TEMP/cf91e74de6fbe1fe94c2da6db1518ec149a101eef1420e18386b3e3c8b1930fc?apiKey=2c0ef7d7caa24d8d8c04d3962010fc58&"
          src="/icons/search-1.svg"
          alt="Submit search"
          className="self-stretch my-auto w-6 aspect-square"
        />
      </button>
    </form>
  );
};