import { MealProps } from "@/components/MealCard";
import SelectMealCard from "@/components/SelectMealCard";

const sampleMeals: MealProps[] = [
  {
    name: "Spaghetti Bolognese",
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
  return (
    <main className="min-h-screen flex items-start pt-12 justify-center px-6">
      <div className="max-w-xl w-full space-y-6 text-center">
        <div className="space-y-2">
          <h1 className="text-6xl font-bold text-rose-700 font-lobster">Meal Sorted</h1>
        </div>

        <div className="overflow-auto">
          {sampleMeals.map((a, i) => (
            <div
            key={i}
            >
              <SelectMealCard 
              meal={a}
              />
            </div>
          )
          )}
        </div>
      </div>
    </main>
  );
}
