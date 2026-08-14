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
    if (selectedMealId == null) return;

    const meal = sampleMeals.find((meal) => meal.id === selectedMealId);
    if (meal === undefined) return;
    
    return <MealCard meal={meal}></MealCard>;
  }

  return (
    <main className="min-h-screen flex flex-col items-center pt-12 px-6">
        <div className="space-y-2">
          <h1 className="text-6xl font-bold text-rose-700 font-lobster">Meal Sorted</h1>
        </div>

        <div className="overflow-auto flex justify-start gap-6 w-full max-w-4xl relative">
          <div>
            {sampleMeals.map((a) => (
            <div
              key={a.id}
              className=""
              >
                <SelectMealCard 
                meal={a}
                onSelect={updateSelectMealID}
                />
              </div>
            )
            )}
          </div>

          {selectedMealId !== null && (
            <div className="flex-1 flex justify-center items-start">
              <div className="w-full max-w-xl">
                {renderMealCard()}
              </div>
            </div>
          )}
        </div>
    </main>
  );
}
