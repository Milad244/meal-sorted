
export type MealProps = { // TODO for later: Add image
  name: string,
  id: number,
  description: string,
  servings: number,
  ingredients: string[], // TODO for later: Make ingredient data type
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

export default function MealCard({ meal }: {meal: MealProps }) {
  return (
    <div>
      Meal window
    </div>
  );
}
