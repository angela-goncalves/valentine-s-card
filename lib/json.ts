import kitten from "@/public/images/susy's copy.jpg";
import kitten2 from "@/public/images/susy's copy2.jpg";
import kitten3 from "@/public/images/susy's copy 3.jpg";
import kitten4 from "@/public/images/susy's copy3.jpg";

export const randomImage = () => {
  const randomIndex = Math.floor(Math.random() * images.length);
  return images[randomIndex];
};

const images = [
  { id: 1, src: kitten, alt: "kitten with ballon of hearts and roses" },
  { id: 2, src: kitten2, alt: "kitten with ballon of hearts and roses" },
  { id: 3, src: kitten3, alt: "kitten with ballon of hearts and roses" },
  { id: 4, src: kitten4, alt: "kitten with ballon of hearts and roses" },
];
