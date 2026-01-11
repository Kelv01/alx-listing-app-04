import React, { useState } from "react";
import Card from "../components/common/Card";
import Button from "../components/common/Button";
import { DEFAULT_PROPERTIES } from "../constants";

import { bannerImg } from "@/constants";
import Pill from "@/components/common/Pill";
import { FILTER_LABELS } from "@/constants";

export default function Home() {

  const [activeFilter, setActiveFilter] = useState("All");

  return (
    <section>
    
      <section className="m-8 h-[500px] w-[1200px] relative bg-cover bg-center rounded-xl" style={{backgroundImage: `url(${bannerImg.src})`}}>
         <div className="h-[500px] w-[1200px] absolute inset-0 bg-black/50 rounded-xl "  /> 
      <div className="items-center text-center text-white z-10 relative">
        <h1 className="text-3xl font-bold text-center text-white p-8 ">Find your favourite place here!</h1>
        <p className="text-sm text-center mb-4">The best prices for over 2 million properties worldwide</p>
      </div>
      </section>



      <div className="py-4 px-8 flex justify-between items-center w-full">
      {/* Left Side: Filter Pills */}
      <div className="flex items-center gap-3 overflow-x-auto">
        {/* "All" pill is handled separately */}
        <Pill
          label="All"
          onClick={() => setActiveFilter("All")}
          isActive={activeFilter === "All"}
        />

        {/* Map over the filter labels to create the other pills */}
        {FILTER_LABELS.map((label) => (
          <Pill
            key={label}
            label={label}
            onClick={() => setActiveFilter(label)}
            isActive={activeFilter === label}
          />
        ))}
      </div>

      {/* Right Side: Filter & Sort */}
      <div className="flex items-center gap-4 flex-shrink-0">
        {/* Filter Button */}
        <button className="flex items-center gap-2 border border-gray-300 rounded-lg px-4 py-2 text-sm font-medium hover:bg-gray-50">
          {/* Add your Filter SVG icon here */}
          <span>Filter</span>
        </button>

        {/* Sort By Dropdown */}
        <div className="flex items-center gap-2 text-sm">
          <label htmlFor="sort" className="text-gray-600">
            Sort by:
          </label>
          <select
            id="sort"
            className="font-medium border-none outline-none focus:ring-0 p-0"
          >
            <option>Highest Price</option>
            <option>Lowest Price</option>
            <option>Recommended</option>
          </select>
        </div>
      </div>
    </div>

      

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {DEFAULT_PROPERTIES.map((property, index) => (
          <Card
            key={index}
            image={property.image}
            title={property.title}
            location={property.location}
            price={property.price}
          />
        ))}
      </div>

      <div className="mt-10 text-center">
        <Button
          label="View More Listings"
          variant="primary"
          onClick={() => alert("Navigating to more listings...")}
        />
      </div> 
    
    </section>
  );
}
