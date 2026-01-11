import React from "react";
import Image from "next/image";
import { CardProps } from "../../interfaces";

const Card: React.FC<CardProps> = ({ image, title, location, price }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
      <Image
        src={image}
        alt={title}
        width={400}
        height={250}
        className="w-full h-60 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-gray-500">{location}</p>
        <p className="text-teal-600 font-bold mt-2">{price}</p>
      </div>
    </div>
  );
};

export default Card;
