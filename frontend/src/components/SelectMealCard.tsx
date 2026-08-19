import MealCard, { MealProps } from "./MealCard";

type SelectMealCardProps = {
  meal: MealProps;
  onSelect: (id: number | null) => void;
  isSelected: boolean;
};

export default function SelectMealCard({ meal, onSelect, isSelected } : SelectMealCardProps ) {
  return (
    <button
      onClick={() => onSelect(meal.id)}
      className={`w-full rounded-xl border px-4 py-3 text-left font-medium transition
        ${isSelected 
          ? "border-gray-900 bg-gray-900 text-white shadow-md"
          : "border-gray-200 bg-white text-gray-800 hover:border-gray-400 hover:bg-gray-50"
        }
      `}
    >
      {meal.name}
    </button>
  );
}
