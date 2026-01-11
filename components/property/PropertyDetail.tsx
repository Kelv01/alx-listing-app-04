import React from "react";

type Property = {
  id: string;
  title: string;
  price: number;
  description: string;
  image: string;
  location: string;
};

type PropertyDetailProps = {
  property: Property;
};

export default function PropertyDetail({ property }: PropertyDetailProps) {
  return (
    <div className="max-w-3xl mx-auto p-4">
      <img
        src={property.image}
        alt={property.title}
        className="w-full rounded"
      />

      <h1 className="text-2xl font-bold mt-4">{property.title}</h1>
      <p className="text-gray-600">{property.location}</p>

      <p className="text-xl font-semibold mt-2">${property.price}</p>

      <p className="mt-4">{property.description}</p>
    </div>
  );
}
