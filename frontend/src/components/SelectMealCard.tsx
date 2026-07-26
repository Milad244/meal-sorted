import { MealProps } from "./MealCard";

export default function({ meal }: {meal: MealProps }) {
  return (
    <div>
      {meal.name}
      {/* TODO: Add onclick */}
    </div>
  );
}
