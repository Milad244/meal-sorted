"use client";

import MealCard, { MealProps } from "@/components/MealCard";
import SelectMealCard from "@/components/SelectMealCard";
import { useState } from "react";

const sampleMeals: MealProps[] = [
  {
    name: "Spaghetti Bolognese",
    id: 1,
    description: "Classic Italian pasta with meat sauce.",
    ingredients: ["spaghetti", "ground beef", "tomato sauce", "onion", "garlic"],
    instructions: [
      "Boil pasta for 10 minutes",
      "Brown beef, add tomato sauce and onion",
      "Mix pasta and sauce, serve hot",
    ],
    rating: 4.5,
  },
  {
    name: "Chicken Tacos",
    id: 2,
    description: "Quick and spicy weeknight tacos.",
    ingredients: ["chicken breast", "taco shells", "lettuce", "cheese", "salsa"],
    instructions: [
      "Season and grill chicken 6 minutes per side",
      "Fill shells with chicken, lettuce, cheese, salsa",
    ],
    rating: 4,
  },
];

export default function Home() {
  const [selectedMealId, setSelectedMealId] = useState<number | null>(null);

  function updateSelectMealID(id: number | null) {
    setSelectedMealId(id);
  }

  function renderMealCard() {
    if (selectedMealId == null) return null;

    const meal = sampleMeals.find((meal) => meal.id === selectedMealId);
    if (meal === undefined) return null;
    
    return <MealCard meal={meal}></MealCard>;
  }

  return (
    <main className="min-h-screen px-6 py-8">
      {/* Header */}
      <header className="relative mx-auto w-full max-w-7xl">
        <h1 className="text-center text-5xl font-bold text-rose-700 font-lobster">
          Meal Sorted
        </h1>

        {/* Header Buttons */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2">
          {/* Settings */}
        </div>
      </header>

      {/* Main content */}
      <section className="mx-auto mt-10 grid w-full max-w-350 grid-cols-[16rem_minmax(0,1fr)] gap-12">
        {/* Left sidebar */}
        <aside className="flex flex-col gap-3">
          {sampleMeals.map((meal) => (
            <SelectMealCard
              key={meal.id}
              meal={meal}
              onSelect={updateSelectMealID}
              isSelected={meal.id === selectedMealId}
            />
          ))}
        </aside>

        {/* Center content */}
        <div className="flex justify-center">
          {selectedMealId !== null && (
            <div className="w-full max-w-xl">
              {renderMealCard()}
            </div>
          )}
        </div>
      </section>

      {/* Bottom content */}
      <section className="mx-auto mt-10 w-full max-w-350">
        <div>

        </div>
      </section>
    </main>
  );
}
