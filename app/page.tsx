"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { randomImage } from "@/lib/json";
import Image from "next/image";

const ValentineApp = () => {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);

  const handleYesClick = () => {
    setYesPressed(true);
  };

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  const getNoButtonPosition = () => {
    const positions = [
      "translate-x-8",
      "-translate-x-8",
      "translate-y-8",
      "-translate-y-8",
      "translate-x-16",
      "-translate-x-16",
      "translate-y-16",
      "-translate-y-16",
    ];
    return positions[noCount % positions.length];
  };
  console.log(randomImage());

  return (
    <div className="min-h-screen bg-pink-100 flex flex-col items-center justify-center p-8">
      {yesPressed ? (
        <div className="text-center">
          <h1 className="text-4xl font-bold text-pink-600 mb-8">Yay! 💖</h1>
          <p className="text-2xl text-pink-500">I knew you would say yes!</p>

          <Image src={randomImage().src} alt={randomImage().alt} />
        </div>
      ) : (
        <div className="">
          <h1 className="text-5xl font-bold text-pink-600 mb-8">
            Would you be my Valentine?
          </h1>
          <div className="flex gap-4 items-center w-full justify-between">
            <Button
              variant="destructive"
              className={`transition-transform duration-200 ${getNoButtonPosition()} hover:bg-red-600  p-6`}
              onClick={handleNoClick}>
              <p className="text-xl">No</p>
            </Button>
            <Button
              className="bg-pink-500 hover:bg-pink-600 p-6"
              onClick={handleYesClick}>
              <p className="text-xl">Yes</p>
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ValentineApp;
