import type { MealProps } from "./MealCard"

type RecipeSectionProps = {
    meal: MealProps;
};

export default function RecipeSection({ meal }: RecipeSectionProps) {
    return (
        <div>
            {meal.name}
        </div>
    );
}
