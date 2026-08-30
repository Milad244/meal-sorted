"use client";

import MealCard, { type MealProps, type NutritionProps, type PriceProps } from "@/components/MealCard";
import SelectMealCard from "@/components/SelectMealCard";
import { getMealNutrition, getMealPrice, getUserMeals } from "@/lib/meals";
import { useEffect, useState } from "react";

export default function Home() {
  const [userMeals, setUserMeals] = useState<MealProps[]>([]);
  const [selectedMealId, setSelectedMealId] = useState<number | null>(null);
  const [nutrition, setNutrition] = useState<NutritionProps | null>(null);
  const [price, setPrice] = useState<PriceProps | null>(null);

  useEffect(() => {
    getUserMeals().then(setUserMeals);
  }, [])

  useEffect(() => {
    if (selectedMealId === null) {
      setNutrition(null);
      setPrice(null);
      return;
    }

    getMealNutrition(selectedMealId).then(setNutrition);
    getMealPrice(selectedMealId).then(setPrice);
    
  }, [selectedMealId])

  function updateSelectMealID(id: number | null) {
    setSelectedMealId(id);
  }

  function renderMealCard() {
    if (selectedMealId == null || nutrition == null || price == null) return null;

    const meal = userMeals.find((meal) => meal.id === selectedMealId);
    if (meal === undefined) return null;
    
    return <MealCard meal={meal} nutrition={nutrition} price={price}></MealCard>;
  }

  return (
    <div>
      {/* Main content */}
      <section className="mt-8 ml-20 grid w-full max-w-350 grid-cols-[16rem_minmax(0,1fr)] gap-12">
        {/* Left sidebar */}
        <aside className="flex flex-col gap-3">
          {userMeals.map((meal) => (
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
    </div>
  );
}
