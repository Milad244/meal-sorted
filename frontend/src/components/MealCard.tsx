import { useState } from "react";
import RecipeSection from "./RecipeSection";
import NutritionSection from "./NutritionSection";
import PriceSection from "./PriceSection";
import SelectSectionCard, { type Section } from "./SelectSectionCard";

export type MealProps = { // TODO: Add image
  name: string,
  id: number,
  description: string,
  servings: number,
  ingredients: string[], // TODO: Make ingredient data type
  instructions: string[],
  rating: number,
};

export type NutritionProps = {
  calories: number,
  protein: number, // grams
  carbs: number, // grams
  fat: number, // grams
  saturatedFat: number, // grams
  fiber: number, // grams
  sugar: number, // grams
  sodium: number, // mg
}

export type PriceProps = { // TODO: Add more data
  cost: number,
}

type MealCardProps = {
  meal: MealProps,
  nutrition: NutritionProps,
  price: PriceProps,
}

export default function MealCard({ meal, nutrition, price }: MealCardProps) {
  const [section, setSection] = useState<Section>("recipe");

  function getSection() {
    switch(section) {
      case "recipe":
        return <RecipeSection meal={meal} />
      case "nutrition":
        return <NutritionSection nutrition={nutrition} />
      case "price":
        return <PriceSection price={price} />
    }
  }

  return (
    <div>
      <div className="flex w-full gap-2 rounded-xl border border-gray-200 bg-gray-50 p-2">
        <SelectSectionCard
          label="Recipe"
          section="recipe"
          onSelect={setSection}
          isSelected={section === "recipe"}
        />
        <SelectSectionCard
          label="Nutrition"
          section="nutrition"
          onSelect={setSection}
          isSelected={section === "nutrition"}
        />
        <SelectSectionCard
          label="Price"
          section="price"
          onSelect={setSection}
          isSelected={section === "price"}
        />
      </div>

      {getSection()}
    </div>
  );
}
