// constants/index.ts
import HeroImage from '@/public/assets/hero.png'
export const API_URL = "https://api.example.com";

export const bannerImg = HeroImage


export const DEFAULT_PROPERTIES = [
  {
    image: "/assets/house1.jpg",
    title: "Luxury Beach House",
    location: "Mombasa, Kenya",
    price: "$250/night",
  },
  {
    image: "/assets/house2.jpg",
    title: "Cozy Apartment",
    location: "Nairobi, Kenya",
    price: "$120/night",
  },
];



export interface PropertyProps {
  name: string;
  address: {
    state: string;
    city: string;
    country: string;
  };
  rating: number;
  category: string[];
  price: number;
  offers: {
    bed: string;
    shower: string;
    occupants: string;
  };
  image: string;
  discount: string;
}


// Array of filter labels to be mapped
export const FILTER_LABELS = [
  "Top Villa",
  "Free Reschedule",
  "Book Now, Pay later",
  "Self Checkin",
  "Instant Book",
];