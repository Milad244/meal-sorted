import type { MealProps, NutritionProps, PriceProps } from "@/components/MealCard";

// TODO: replace with real fetch/calc once backend exists
export async function getUserMeals(): Promise<MealProps[]> {
    return [
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
}

export async function getMealNutrition(id: number): Promise<NutritionProps> {
    return {
      calories: 450,
      protein: 25,
      carbs: 55,
      saturatedFat: 4,
      fat: 12,
      fiber: 6,
      sugar: 8,
      sodium: 620,
    };
  }

export async function getMealPrice(id: number): Promise<PriceProps> {
  return {
    cost: 44,
  };
}
