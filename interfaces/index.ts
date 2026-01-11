// interfaces/index.ts

// ✅ Props for Card component
export interface CardProps {
  image: string;       // image path e.g. "/assets/house1.jpg"
  title: string;       // property title
  location: string;    // e.g. "Nairobi, Kenya"
  price: string;       // e.g. "$120/night"
}

// ✅ Props for Button component
export interface ButtonProps {
  label: string;       // button text
  onClick?: () => void; // optional click handler
  variant?: "primary" | "secondary"; // styling variant
}
