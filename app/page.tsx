"use client";

import { useState } from "react";

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
        px-2.5 py-1 text-base rounded-full whitespace-nowrap transition-colors border
        ${isFirst ? 'ml-4' : ''}
        ${isActive 
          ? "bg-[#222222] border-transparent" 
          : "bg-transparent border-[#222222]"
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
      <main className="flex max-h-screen h-[844px] w-[390px] flex-col items-center bg-black sm:items-start pt-4">
        <div className="flex grow">

        </div>
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
      </main>
  );
}
