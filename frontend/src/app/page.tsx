"use client";

import MealCard, { type MealProps, type NutritionProps, type PriceProps } from "@/components/MealCard";
import HeaderButton from "@/components/HeaderButton";
import SelectMealCard from "@/components/SelectMealCard";
import { useState } from "react";

const sampleMeals: MealProps[] = [
  {
    name: "Spaghetti Bolognese",
    id: 1,
    description: "Classic Italian pasta with meat sauce.",
    servings: 3,
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
    servings: 1,
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

  function getMealNutrition(id: number) {
    return {
      calories: 450,
      protein: 25,
      carbs: 55,
      saturatedFat: 4,
      fat: 12,
      fiber: 6,
      sugar: 8,
      sodium: 620,
    }; // TODO: replace with real fetch/calc once backend exists
  }

  function getMealPrice(id: number) {
    return {
      cost: 44,
    }; // TODO: replace with real fetch/calc once backend exists
  }

  function renderMealCard() {
    if (selectedMealId == null) return null;

    const meal = sampleMeals.find((meal) => meal.id === selectedMealId);
    if (meal === undefined) return null;
    
    return <MealCard meal={meal} nutrition={getMealNutrition(meal.id)} price={getMealPrice(meal.id)}></MealCard>;
  }

  return (
    <main className="min-h-screen px-4 py-8 sm:px-6 lg:px-8">
      {/* Header */}
      <header className="relative ml-25 w-auto">
        <div className="flex items-center gap-8">
          <h1 className="text-5xl font-bold text-rose-700 font-lobster">
            Meal Sorted
          </h1>

          {/* Main Header Buttons */}
          <nav className="flex gap-1">
            <HeaderButton label="Meals" href="/meals" />
            <HeaderButton label="Pantry" href="/pantry" />
            <HeaderButton label="Prep" href="/prep" />
          </nav>
        </div>

        {/* Right Header Buttons */}
        <nav className="absolute right-0 top-1/2 flex -translate-y-1/2 gap-1">
          <HeaderButton label="Login" href="/login" />
          <HeaderButton label="Settings" href="/settings" />
        </nav>
      </header>

      {/* Main content */}
      <section className="mt-8 ml-20 grid w-full max-w-350 grid-cols-[16rem_minmax(0,1fr)] gap-12">
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
