"use client";

import { useState } from "react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"

const CATEGORIES = [
  "For You",
  "Style",
  "Place",
  "Subject",
  "Characters",
  "Search All",
];

function CategoryTag({ 
  label, 
  isActive, 
  onClick, 
  isFirst 
}: { 
  label: string; 
  isActive: boolean; 
  onClick: () => void;
  isFirst?: boolean;
}) {
  return (
    <button
      onClick={onClick}
      className={`
        px-3 py-1.5 text-base rounded-full whitespace-nowrap transition-colors border
        ${isFirst ? 'ml-4' : ''}
        ${isActive 
          ? "bg-black border-transparent text-white" 
          : "bg-transparent border-[#EAEAEA]"
        }
      `}
    >
      {label}
    </button>
  );
}

export default function Home() {
  const [activeCategory, setActiveCategory] = useState(CATEGORIES[0]);

  return (
      <main className="flex max-h-screen h-[844px] w-[390px] flex-col items-center bg-white sm:items-start gap-2">
        <div className="w-full px-4 flex justify-between">
          <div className="h-9 w-9 bg-red rounded-full flex items-center justify-center border"/>
          <div className="h-9 w-9 bg-red rounded-full flex items-center justify-center border"/>
        </div>
        <img src="dragons.webp" className="h-[65%] rounded-xl"></img>

        <div className="flex gap-1 w-full h-13 px-4 justify-center items-center">
          <div className="flex h-full rounded-sm aspect-square bg-[#f1f1f1] font-semibold items-center justify-center">+2</div>
          <img src="dragons.webp" className="h-full object-cover rounded-sm aspect-square"></img>
          <img src="dragons.webp" className="h-full object-cover rounded-sm aspect-square"></img>
          <img src="dragons.webp" className="h-full object-cover rounded-sm aspect-square"></img>
          <img src="dragons.webp" className="h-full object-cover rounded-sm aspect-square"></img>
        </div>
          
        

        <Drawer>
            <DrawerTrigger>Open</DrawerTrigger>
            <DrawerContent>
              <div className="flex w-full gap-2 overflow-x-auto pb-4 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
                {CATEGORIES.map((category, index) => (
                  <CategoryTag
                    key={category}
                    label={category}
                    isActive={activeCategory === category}
                    onClick={() => setActiveCategory(category)}
                    isFirst={index === 0}
                  />
                ))}
                {/* Spacer for right side padding in scroll */}
                <div className="min-w-[16px]" />
              </div>
              <DrawerHeader>
                <DrawerTitle>Are you absolutely sure?</DrawerTitle>
                <DrawerDescription>This action cannot be undone.</DrawerDescription>
              </DrawerHeader>
              <DrawerFooter>
                <DrawerClose>
                  <div>Close</div>
                </DrawerClose>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
      </main>
  );
}
