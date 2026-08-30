import type { MealProps } from "./MealCard";

type RecipeSectionProps = {
    meal: MealProps;
};

export default function RecipeSection({ meal }: RecipeSectionProps) {
	return (
		<div>
			<h2 className="text-2xl font-bold">{meal.name}</h2>
			<p className="text-gray-600">{meal.description}</p>
			<p className="font-semibold">Servings: {meal.servings}</p>

			<h3 className="mt-4 font-semibold">Ingredients</h3>
			<ul className="list-inside list-disc">
				{meal.ingredients.map((ingredient, index) => (
					<li key={index}>{ingredient}</li>
				))}
			</ul>

			<h3 className="mt-4 font-semibold">Instructions</h3>
			<ol className="list-inside list-decimal">
				{meal.instructions.map((instruction, index) => (
					<li key={`${index}-${instruction}`}>{instruction}</li>
				))}
			</ol>

			<p className="mt-4 font-semibold">Rating: {meal.rating}</p>
		</div>
	);
}
