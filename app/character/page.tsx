"use client";

import { Bell, Menu, Plus, Heart, RefreshCcw, Search } from 'lucide-react';
import { useState, useEffect } from "react";
import {
  Drawer,
  DrawerContent,
  DrawerOverlay,
} from "@/components/ui/drawer"
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { CATEGORIES, FEATURES } from '../../data';

function FeatureTag({
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
        flex items-center justify-center gap-1 mx-2 pb-2 text-base whitespace-nowrap font-medium border-b border-b-2
        ${isFirst ? 'ml-4' : ''}
        ${isActive
          ? "border-black"
          : "border-transparent opacity-50"
        }
      `}
    >
      <p className='text-sm'>{label}</p>
      {/* {count != null && (
        <div className='py-0.5 px-2 bg-[#f1f1f1] rounded-full text-[13px] flex items-center justify-center'>
          <p>{count}</p>
        </div>
      )
      } */}
    </button>
  );
}

function BlockTag({
  label,
  isFavorite = false,
  onToggleFavorite,
  isSelected = false,
  onToggleSelect,
}: {
  label: string;
  isFavorite?: boolean;
  onToggleFavorite: () => void;
  isSelected?: boolean;
  onToggleSelect: () => void;
}) {
  return (
    <button
      onClick={onToggleSelect}
      className={`
        relative px-3 py-2 text-[13px] font-medium rounded-full w-fit
        ${isSelected ? 'bg-black text-white' : 'bg-[#F1F1F1]'}
      `}
    >
      {label}
      <div
        onClick={(e) => {
          e.stopPropagation();
          onToggleFavorite();
        }}
        className="absolute -top-2 -right-1 cursor-pointer"
      >
        <Heart
          size={22}
          color="white"
          strokeWidth={2}
          fill={isFavorite ? 'red' : '#AAA'}
        />
      </div>
    </button>
  );
}

const IMAGES = [
  "avatar-1.webp",
  "avatar-2.webp"
];

export default function Character() {
  const [activeFeature, setActiveFeature] = useState(CATEGORIES[0].label)
  const [selectedImageIndex, setSelectedImageIndex] = useState(0)
  const [api, setApi] = useState<CarouselApi>()

  useEffect(() => {
    if (!api) return

    api.on("select", () => {
      setSelectedImageIndex(api.selectedScrollSnap())
    })
  }, [api])


  return (
    <main className="flex h-[100dvh] w-full flex-col items-center bg-white gap-2 overflow-x-hidden">
      <div className="w-full px-4 flex justify-between">
        <div className="h-9 w-9"></div>
        <div className="flex gap-2">
          <div className="h-9 w-9 rounded-full flex items-center justify-center border">
            <Bell size={18} />
          </div>
          <div className="h-9 w-9 rounded-full flex items-center justify-center border">
            <Menu size={18} />
          </div>
        </div>
      </div>

      <div className="relative w-3/5 aspect-square rounded-xl overflow-hidden">
        <Carousel setApi={setApi} className="h-full w-full">
          <CarouselContent className="h-full">
            {IMAGES.map((image, index) => (
              <CarouselItem key={index} className="h-full pl-0">
                <img
                  src={image}
                  className="h-full w-full object-cover"
                  alt={`Image ${index + 1}`}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-2" />
          <CarouselNext className="right-2" />
        </Carousel>

        <div className="absolute bottom-2 right-2 px-3 h-8 flex items-center justify-center rounded-full bg-black/50">
          <p className="text-sm font-medium text-white">
            {selectedImageIndex + 1}/{IMAGES.length}
          </p>
        </div>
      </div>

      <div className="my-6 w-full">
        <div
          className="
      flex flex-nowrap w-full gap-2
      overflow-x-auto overflow-y-hidden
      [scrollbar-width:none] [-ms-overflow-style:none]
      [&::-webkit-scrollbar]:hidden
    "
        >
          {FEATURES.map((feature, index) => (
            <FeatureTag
              key={feature.label}
              label={feature.label}
              isActive={activeFeature === feature.label}
              onClick={() => setActiveFeature(feature.label)}
              isFirst={index === 0}
            />
          ))}
          <div className="min-w-4" />
        </div>
        <div className="w-full h-[1px] bg-[#E0E0E0]" />
      </div>

    </main>
  );
}
