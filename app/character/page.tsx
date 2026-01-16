"use client";

import { Bell, Menu, Heart } from 'lucide-react';
import { useState, useEffect } from "react";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { FEATURES } from '../../data';

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
        flex items-center justify-center text-sm font-medium whitespace-nowrap font-medium px-3 py-2 rounded-full border
        ${isFirst ? 'ml-4' : ''}
        ${isActive
          ? "bg-[#F1F1F1] border-[#F1F1F1]"
          : "bg-transparent opacity-40"
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

function ImageOption({
  label,
  src,
  isSelected,
  onSelect,
}: {
  label: string
  src: string
  isSelected: boolean
  onSelect: () => void
}) {
  return (
    <button
      onClick={onSelect}
      className="flex flex-col items-start gap-2 w-full"
    >
      <div
        className={`
          w-full aspect-square rounded-full overflow-hidden bg-[#F1F1F1]
          ${isSelected ? 'outline-3 outline-offset-2 outline-black' : ''}
        `}
      >
        <img
          src={src}
          alt={label}
          className="w-full h-full object-cover"
        />
      </div>

      <p
        className={`
          text-sm font-medium w-full
          ${isSelected ? 'opacity-100' : 'opacity-50'}
        `}
      >
        {label}
      </p>
    </button>
  )
}

const IMAGES = [
  "avatar-1.webp",
  "avatar-2.webp"
];

export default function Character() {
  const [activeFeature, setActiveFeature] = useState(FEATURES[0].label)
  const [selectedOptions, setSelectedOptions] = useState<Record<string, string | null>>({})
  const [selectedImageIndex, setSelectedImageIndex] = useState(0)
  const [api, setApi] = useState<CarouselApi>()

  const activeFeatureData = FEATURES.find(
    (feature) => feature.label === activeFeature
  )

  useEffect(() => {
    if (!api) return

    api.on("select", () => {
      setSelectedImageIndex(api.selectedScrollSnap())
    })
  }, [api])


  return (
    <main className="flex h-[100dvh] w-full flex-col items-center bg-white overflow-x-hidden">
      <div className="w-full px-4 flex justify-between mb-2">
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

      <div className="relative h-1/3 aspect-square rounded-2xl overflow-hidden mb-6">
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

        <div className="absolute bottom-2 right-2 px-2 h-6 flex items-center justify-center rounded-full bg-black/70">
          <p className="text-xs font-semibold text-white">
            {selectedImageIndex + 1}/{IMAGES.length}
          </p>
        </div>
      </div>

      <div className="w-full">
        <div
          className="
      flex flex-nowrap w-full gap-1 pb-1
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
      </div>

      <div
        className="w-full px-4 pt-3 flex-1 overflow-y-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden "
      >
        {activeFeatureData?.options ? (
          <div className="grid grid-cols-3 gap-4">
            {activeFeatureData.options.map((option) => {
              const selectedForThisFeature = selectedOptions[activeFeature] ?? null

              return (
                <ImageOption
                  key={option.label}
                  label={option.label}
                  src={option.src}
                  isSelected={selectedForThisFeature === option.label}
                  onSelect={() =>
                    setSelectedOptions((prev) => ({
                      ...prev,
                      [activeFeature]:
                        prev[activeFeature] === option.label ? null : option.label,
                    }))
                  }
                />
              )
            })}
          </div>
        ) : (
          <div className='flex flex-col gap-2'>
            <div className='border rounded-md px-4 py-3 flex flex-col gap-2'>
              <p className="text-base opacity-50">
                {activeFeatureData?.placeholder}
              </p>
            </div>
            {
              activeFeatureData?.limit && (
                <p className='w-full text-sm font-medium opacity-50 text-right'>0/{activeFeatureData.limit} characters</p>
              )
            }
          </div>
        )}
      </div>
      <div className="fixed bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white via-white/65 to-transparent pointer-events-none" />
      <div className="fixed bottom-0 w-full px-4 flex justify-center">
        <button className="bg-black text-white rounded-full font-medium text-base h-12 px-6">
          Save Character
        </button>
      </div>
    </main>
  );
}
