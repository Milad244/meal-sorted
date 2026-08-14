import MealCard, { MealProps } from "./MealCard";

type SelectMealCardProps = {
  meal: MealProps;
  onSelect: (id: number | null) => void;
};

export default function SelectMealCard({ meal, onSelect } : SelectMealCardProps ) {
  return (
    <div
    onClick={() => {onSelect(meal.id)}}>
      {meal.name}
    </div>
  );
}
