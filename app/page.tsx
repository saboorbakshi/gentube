"use client";

import { Bell, Menu, Settings2, Box, Trash2, Heart, RefreshCcw, Play, Shuffle } from 'lucide-react';
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
  DrawerOverlay
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


const IMAGES = [
  "dragons.webp",
  "dragons.webp", 
  "dragons.webp",
  "dragons.webp",
];

export default function Home() {
  const [activeCategory, setActiveCategory] = useState(CATEGORIES[0]);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(3);

  return (
      <main className="flex h-[100dvh] w-full flex-col items-center bg-white gap-2">
        <div className="w-full px-4 flex justify-between">
          <img src="gentube.svg" className="h-8 w-8"></img>
          <div className="flex gap-2">
            <div className="h-8 w-8 rounded-full flex items-center justify-center border">
              <Bell size={16} />
            </div>
            <div className="h-8 w-8 rounded-full flex items-center justify-center border">
              <Menu size={16} />
            </div>
          </div>
        </div>
        
        <div className="flex-1 min-h-0 px-1 w-full flex items-center justify-center">
          <div className="relative max-h-full max-w-full aspect-[9/16]">
            <img
              src={IMAGES[selectedImageIndex]}
              className="h-full w-full object-cover rounded-lg"
            />
            <div className='absolute top-2 right-2 rounded-full flex gap-2 items-center justify-center'>
              <div className="h-8 w-8 rounded-full flex items-center justify-center bg-black/60">
                <Trash2 size={16} color="white" />
              </div>
              <div className="h-8 w-8 rounded-full flex items-center justify-center bg-black/60">
                <Settings2 size={16} color="white" />
              </div>
            </div>

            <div className='absolute bottom-2 right-2 rounded-full flex flex-col gap-2 items-center justify-center'>
              <div className="h-8 w-8 rounded-full flex items-center justify-center bg-black/60">
                <RefreshCcw size={16} color="white" />
              </div>
              <div className="h-8 w-8 rounded-full flex items-center justify-center bg-black/60">
                <Shuffle size={16} color="white" />
              </div>
              <div className="h-8 w-8 rounded-full flex items-center justify-center bg-black/60">
                <Play size={16} color="white" />
              </div>
            </div>

            <div className='absolute bottom-2 left-2 rounded-full flex gap-2 items-center justify-center'>
              <div className="h-8 w-8 rounded-full flex items-center justify-center bg-black/60">
                <Heart size={16} color="white" />
              </div>
              <div className="h-8 w-8 rounded-full flex items-center justify-center bg-black/60">
                <Settings2 size={16} color="white" />
              </div>
            </div>
          </div>
        </div>

        <div className="flex gap-1 w-full h-10 justify-center items-center">
          <div className="flex h-full rounded-sm aspect-square bg-[#f1f1f1] font-semibold items-center justify-center">+2</div>
          {IMAGES.map((image, index) => (
            <img 
              key={index}
              src={image} 
              onClick={() => setSelectedImageIndex(index)}
              className={`h-full object-cover rounded-sm aspect-square cursor-pointer ${
                selectedImageIndex === index ? 'p-[1px] border-2 border-black' : ''
              }`}
            />
          ))}
        </div>

        <div className="w-full flex gap-2 px-4 pt-2">
          <div className="relative cursor-pointer" onClick={() => setIsDrawerOpen(true)}>
            <div className="h-12 w-12 rounded-full bg-black shrink-0 flex items-center justify-center">
              <Box size={22} color='white'/>
            </div>
            <div className="absolute -top-2 -right-2 bg-green-500 text-white text-xs font-bold h-6 w-6 flex items-center justify-center rounded-full border-2 border-white">
              3
            </div>
          </div>
          <div className="h-12 bg-[#f1f1f1] p-2 flex grow rounded-full items-center min-w-0">
            <p className="flex-1 truncate px-2 font-medium">Two dragons in battle among some</p>
            <div className="h-8 w-8 rounded-full flex items-center justify-center border shrink-0">
              <Settings2 size={16} />
            </div>
          </div>
        </div>
          
        

        <Drawer open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
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
