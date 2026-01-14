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
        px-3 py-1 text-sm rounded-full whitespace-nowrap transition-colors border font-medium
        ${isFirst ? 'ml-4' : ''}
        ${isActive 
          ? "bg-zinc-100 dark:bg-zinc-800 border-transparent" 
          : "bg-transparent border-zinc-200 dark:border-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-900"
        }
      `}
    >
      {label}
    </button>
  );
}

export default function Home() {
  const [activeCategory, setActiveCategory] = useState("For You");

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex h-[844px] w-[390px] flex-col items-center bg-white dark:bg-black sm:items-start py-4">
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
    </div>
  );
}
