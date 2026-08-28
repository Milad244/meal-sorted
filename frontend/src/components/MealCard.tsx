
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
  return (
    <div>
      Recipe | Nutrition | Price
    </div>
  );
}
