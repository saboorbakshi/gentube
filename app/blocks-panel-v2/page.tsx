"use client";

import Image from 'next/image';
import { Bell, Menu, Settings2, Plus, Forward, Heart, RefreshCcw, Play, Shuffle } from 'lucide-react';
import { useState, useEffect } from "react";
import {
  Drawer,
  DrawerContent,
  DrawerTitle,
  DrawerTrigger
} from "@/components/ui/drawer"
import { CATEGORIES } from '../../data';

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
      {count != null && (
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
  onClick,
  isFirst
}: {
  label: string;
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
  "dragons.webp",
  "dragons.webp",
  "dragons.webp",
  "dragons.webp",
];

export default function BlocksPanelV2() {
  const [activeCategory, setActiveCategory] = useState(CATEGORIES[0].label)
  const [activeSubCategory, setActiveSubCategory] = useState<string | null>(null)
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  const [selectedImageIndex, setSelectedImageIndex] = useState(3)
  const [selectedTags, setSelectedTags] = useState<Set<string>>(new Set())
  const [favoriteTags, setFavoriteTags] = useState<Set<string>>(new Set())

  const activeCategoryData = CATEGORIES.find(c => c.label === activeCategory);
  const subCategories = activeCategoryData?.subcategories || [];

  const toggleSelect = (label: string) => {
    setSelectedTags(prev => {
      const next = new Set(prev)
      next.has(label) ? next.delete(label) : next.add(label)
      return next
    });
  };

  const toggleFavorite = (label: string) => {
    setFavoriteTags(prev => {
      const next = new Set(prev)
      next.has(label) ? next.delete(label) : next.add(label)
      return next
    });
  };

  useEffect(() => {
    const currentCategory = CATEGORIES.find(c => c.label === activeCategory);
    if (currentCategory?.subcategories && currentCategory.subcategories.length > 0) {
      setActiveSubCategory(currentCategory.subcategories[0].label);
    } else {
      setActiveSubCategory(null);
    }
  }, [activeCategory]);




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
              <Image src="thumb-up.svg" alt='thumb up' width={18} height={18} />
            </div>
            <div className="h-9 w-9 rounded-full flex items-center justify-center bg-black/50">
              <Image src="thumb-down.svg" alt='thumb up' width={18} height={18} />
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
            className={`h-full object-cover rounded-sm aspect-square cursor-pointer opacity-90 ${selectedImageIndex === index ? 'p-[1px] border-2 border-black opacity-100' : ''
              }`}
          />
        ))}
      </div>

      <div className="flex w-full gap-1.5 overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
        {CATEGORIES.map((category, index) => (
          <CategoryTag
            key={category.label}
            label={category.label}
            onClick={() => {
              setActiveCategory(category.label);
              setIsDrawerOpen(true);
            }}
            isFirst={index === 0}
          />
        ))}
        {/* Spacer for right side padding in scroll */}
        <div className="min-w-4" />
      </div>

      <Drawer open={isDrawerOpen} onOpenChange={setIsDrawerOpen} >
        <DrawerContent className="h-[60dvh]">
          <div className='mb-4'>
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
              <div className="min-w-4" />
            </div>
            <div className='w-full h-[1px] bg-[#E0E0E0]'></div>
          </div>

          {
            subCategories.length > 0 && (
              <div>
                <div className="flex w-full gap-2 overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden shrink-0">
                  {subCategories.map((subCategory, index) => (
                    <CategoryTagLine
                      key={subCategory.label}
                      label={subCategory.label}
                      count={subCategory.label === "Favourites" ? Array.from(favoriteTags).filter(tag => subCategories.some(sub => tag.startsWith(`${sub.label}-`))).length : subCategory.count}
                      isActive={activeSubCategory === subCategory.label}
                      onClick={() => setActiveSubCategory(subCategory.label)}
                      isFirst={index === 0}
                    />
                  ))}
                  <div className="min-w-4" />
                </div>
                <div className='w-full h-[1px] bg-[#E0E0E0]'></div>
              </div>
            )
          }

          <div className='px-4 pt-6 overflow-y-auto grow'>
            <div className="flex flex-wrap gap-2.5">
              {activeSubCategory === 'Favourites' ? (
                Array.from(favoriteTags)
                  .filter(tag => subCategories.some(sub => tag.startsWith(`${sub.label}-`)))
                  .map(label => (
                    <BlockTag
                      key={label}
                      label={label}
                      isSelected={selectedTags.has(label)}
                      isFavorite={true}
                      onToggleSelect={() => toggleSelect(label)}
                      onToggleFavorite={() => toggleFavorite(label)}
                    />
                  ))
              ) : (
                Array.from({
                  length:
                    subCategories.find(
                      sub => sub.label === activeSubCategory
                    )?.count ?? 0,
                }).map((_, index) => {
                  const label = `${activeSubCategory}-${index}`

                  return (
                    <BlockTag
                      key={label}
                      label={label}
                      isSelected={selectedTags.has(label)}
                      isFavorite={favoriteTags.has(label)}
                      onToggleSelect={() => toggleSelect(label)}
                      onToggleFavorite={() => toggleFavorite(label)}
                    />
                  )
                })
              )}
            </div>
          </div>
          <div className='w-full h-[1px] bg-[#E0E0E0]'></div>
          <div className='pt-4 px-4 flex gap-2'>
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
