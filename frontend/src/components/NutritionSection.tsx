import type { NutritionProps } from "./MealCard";

type NutritionSectionProps = {
	nutrition: NutritionProps;
};

export default function NutritionSection({ nutrition }: NutritionSectionProps) {
	return (
		<div>
			<p>Calories: {nutrition.calories}</p>
			<p>Protein: {nutrition.protein}g</p>
			<p>Carbs: {nutrition.carbs}g</p>
			<p>Fat: {nutrition.fat}g</p>
			<p>Saturated fat: {nutrition.saturatedFat}g</p>
			<p>Fiber: {nutrition.fiber}g</p>
			<p>Sugar: {nutrition.sugar}g</p>
			<p>Sodium: {nutrition.sodium}mg</p>
		</div>
	);
}
