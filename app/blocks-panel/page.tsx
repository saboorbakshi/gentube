"use client";

import Image from 'next/image';
import { Bell, Menu, Settings2, Plus, Forward, Heart, RefreshCcw, Play, Shuffle } from 'lucide-react';
import { useState } from "react";
import {
  Drawer,
  DrawerContent,
  DrawerTitle,
  DrawerTrigger
} from "@/components/ui/drawer"

const CATEGORIES = [
  { label: "For You", count: null },
  { label: "Style", count: 91 },
  { label: "Place", count: 54 },
  { label: "Subject", count: 123 },
  { label: "Characters", count: 3 },
  { label: "Search All", count: null },
];

function CategoryTagLine({ 
  label,
  count, 
  isActive, 
  onClick, 
  isFirst 
}: { 
  label: string; 
  count: number | null;
  isActive: boolean; 
  onClick: () => void;
  isFirst?: boolean;
}) {
  return (
    <button
      onClick={onClick}
      className={`
        flex items-center justify-center gap-1 mx-2 pb-2 text-base whitespace-nowrap font-medium border-b border-b-2
        ${isFirst ? 'ml-4' : ''}
        ${isActive 
          ? "border-black" 
          : "border-transparent opacity-50"
        }
      `}
    >
      <p className='text-sm'>{label}</p>
      {count && (
        <div className='py-0.5 px-2 bg-[#f1f1f1] rounded-full text-[13px] flex items-center justify-center'>
          <p>{count}</p>
        </div>
        )
      }
    </button>
  );
}

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
        px-3 py-2 text-sm font-medium rounded-full whitespace-nowrap bg-transparent border border-[#EAEAEA]
        ${isFirst ? 'ml-4' : ''}`}
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

function MoreBlocksDrawer({ count }: { count: string }) {
  return (
    <Drawer>
      <DrawerTrigger className='px-3 py-2 text-[13px] font-medium bg-[#F1F1F1] rounded-full w-fit outline-none'>
        {count}
      </DrawerTrigger>
      <DrawerContent>
        <div className="p-4 pt-0">
          <DrawerTitle className="font-semibold text-sm">All Subcategory Blocks</DrawerTitle>
          <div className='flex flex-wrap gap-2 mt-4'>
            {Array.from({ length: 10 }, (_, i) => (
              <div key={i} className='px-3 py-2 text-[13px] font-medium bg-[#F1F1F1] rounded-full w-fit'>
                Nested Item {i + 1}
              </div>
            ))}
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
}

export default function BlocksPanel() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(3);

  return (
      <main className="flex h-[100dvh] w-full flex-col items-center bg-white gap-2">
        <div className="w-full px-4 flex justify-between">
          <div className="h-8 w-8"></div>
          <div className="flex gap-2">
            <div className="h-8 w-8 rounded-full flex items-center justify-center border">
              <Bell size={16} />
            </div>
            <div className="h-8 w-8 rounded-full flex items-center justify-center border">
              <Menu size={16} />
            </div>
          </div>
        </div>

        <div className="w-full flex gap-2 px-4">
          <div className="h-12 bg-[#f1f1f1] p-2 flex grow rounded-full items-center min-w-0">
            <p className="flex-1 truncate px-2">Two dragons in battle among warriors rocky mountain</p>
            <div className="h-8 w-8 rounded-full flex items-center justify-center border shrink-0">
              <Settings2 size={16} />
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
              <div className="h-9 w-9 rounded-full flex items-center justify-center bg-black/50">
                <Image src="thumb-up.svg" alt='thumb up' width={18} height={18}/>
              </div>
              <div className="h-9 w-9 rounded-full flex items-center justify-center bg-black/50">
                <Image src="thumb-down.svg" alt='thumb up' width={18} height={18}/>
              </div>
            </div>

            <div className='absolute bottom-2 right-2 rounded-full flex flex-col gap-2 items-center justify-center'>
              <div className="h-9 w-9 rounded-full flex items-center justify-center bg-black/50">
                <RefreshCcw size={18} color="white" />
              </div>
              <div className="h-9 w-9 rounded-full flex items-center justify-center bg-black/50">
                <Shuffle size={18} color="white" />
              </div>
              <div className="h-9 w-9 rounded-full flex items-center justify-center bg-black/50">
                <Play size={18} color="white" />
              </div>
            </div>

            <div className='absolute bottom-2 left-2 rounded-full flex gap-2 items-center justify-center'>
              <div className="h-9 w-9 rounded-full flex items-center justify-center bg-black/50">
                <Heart size={18} color="white" />
              </div>
              <div className="h-9 w-9 rounded-full flex items-center justify-center bg-black/50">
                <Forward size={18} color="white" />
              </div>
            </div>
          </div>
        </div>

        <div className="flex gap-1 w-full h-10 justify-center items-center">
          <div className="flex h-full rounded-sm aspect-square bg-[#f1f1f1] text-sm font-medium items-center justify-center">+2</div>
          {IMAGES.map((image, index) => (
            <img 
              key={index}
              src={image} 
              onClick={() => setSelectedImageIndex(index)}
              className={`h-full object-cover rounded-sm aspect-square cursor-pointer opacity-90 ${
                selectedImageIndex === index ? 'p-[1px] border-2 border-black opacity-100' : ''
              }`}
            />
          ))}
        </div>

        <div className="flex w-full gap-1.5 overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
          {CATEGORIES.map((category, index) => (
            <CategoryTag
              key={category.label}
              label={category.label}
              isActive={activeCategory === category.label}
              onClick={() => {
                setActiveCategory(category.label);
                setIsDrawerOpen(true);
              }}
              isFirst={index === 0}
            />
          ))}
          {/* Spacer for right side padding in scroll */}
          <div className="min-w-[16px]" />
        </div>

        <Drawer open={isDrawerOpen} onOpenChange={setIsDrawerOpen} >
            <DrawerContent className="h-[60dvh]">
              <div className="flex w-full gap-2 overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden shrink-0">
                {CATEGORIES.map((category, index) => (
                  <CategoryTagLine
                    key={category.label}
                    label={category.label}
                    count={category.count}
                    isActive={activeCategory === category.label}
                    onClick={() => setActiveCategory(category.label)}
                    isFirst={index === 0}
                  />
                ))}
                {/* Spacer for right side padding in scroll */}
                <div className="min-w-4" />
              </div>

              <div className='w-full h-[1px] bg-[#E0E0E0]'></div>

              <div className='p-4 overflow-y-auto flex flex-col gap-8'>
                <div className='flex flex-col gap-2'>
                  <p className='text-sm font-semibold'>My {activeCategory} Blocks</p>
                  <div className='flex flex-wrap gap-2'>
                    <div className='w-8 h-8 flex justify-center items-center bg-[#F1F1F1] rounded-full'>
                      <Plus size={16}></Plus>
                    </div>
                  </div>
                </div>

                <div className='flex flex-col gap-2'>
                  <p className='text-sm font-semibold'>Favourites</p>
                  <div className='flex flex-wrap gap-2'>
                    <div className='px-3 py-2 text-[13px] font-medium bg-black text-white rounded-full w-fit'>
                      Cute Skeleton
                    </div>
                    <div className='px-3 py-2 text-[13px] font-medium bg-black text-white rounded-full w-fit'>
                      Random
                    </div>
                    <div className='px-3 py-2 text-[13px] font-medium bg-[#F1F1F1] rounded-full w-fit'>
                      Cyberpunk Gandolf
                    </div>
                    <div className='px-3 py-2 text-[13px] font-medium bg-[#F1F1F1] rounded-full w-fit'>
                      Samurai Jackson Heights
                    </div>
                    <MoreBlocksDrawer count="+2" />
                  </div>
                </div>

                <div className='flex flex-col gap-2'>
                  <p className='text-sm font-semibold'>Section 2</p>
                  <div className='flex flex-wrap gap-2'>
                    <div className='px-3 py-2 text-[13px] font-medium bg-[#F1F1F1] rounded-full w-fit'>
                      Cute Skeleton
                    </div>
                    <div className='px-3 py-2 text-[13px] font-medium bg-[#F1F1F1] rounded-full w-fit'>
                      Random
                    </div>
                    <div className='px-3 py-2 text-[13px] font-medium bg-[#F1F1F1] rounded-full w-fit'>
                      Cyberpunk Gandolf
                    </div>
                    <div className='px-3 py-2 text-[13px] font-medium bg-[#F1F1F1] rounded-full w-fit'>
                      Samurai Jackson Heights
                    </div>
                    <MoreBlocksDrawer count="+36" />
                  </div>
                </div>

                <div className='flex flex-col gap-2'>
                  <p className='text-sm font-semibold'>Section 3</p>
                  <div className='flex flex-wrap gap-2'>
                    <div className='px-3 py-2 text-[13px] font-medium bg-[#F1F1F1] rounded-full w-fit'>
                      Cute Skeleton
                    </div>
                    <div className='px-3 py-2 text-[13px] font-medium bg-[#F1F1F1] rounded-full w-fit'>
                      Random
                    </div>
                    <div className='px-3 py-2 text-[13px] font-medium bg-[#F1F1F1] rounded-full w-fit'>
                      Cyberpunk Gandolf
                    </div>
                    <div className='px-3 py-2 text-[13px] font-medium bg-[#F1F1F1] rounded-full w-fit'>
                      Samurai Jackson Heights
                    </div>
                    <MoreBlocksDrawer count="+36" />
                  </div>
                </div>
              </div>
              <div className='w-full h-[1px] bg-[#E0E0E0]'></div>
              <div className='p-4 flex gap-2'>
                <div className='border flex-2/3 grow h-9 px-2 rounded-sm flex items-center text-sm'>
                  <p className='opacity-60'>Search {activeCategory} Blocks... </p>
                </div>
                <div className='border flex-1/3 grow h-9 px-2 rounded-sm flex gap-1.5 items-center text-sm'>
                  <RefreshCcw size={16}></RefreshCcw>
                  <p>Randomize</p>
                </div>
              </div>
            </DrawerContent>
          </Drawer>
      </main>
  );
}
