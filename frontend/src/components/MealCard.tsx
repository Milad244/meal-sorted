
export type MealProps = { // TODO for later: Add image
  name: string,
  id: number,
  description: string,
  ingredients: string[], // TODO for later: Make ingredient data type
  instructions: string[],
  rating: number,
};

export default function MealCard({ meal }: {meal: MealProps }) {
  return (
    <div>
      Meal window in main screen
    </div>
  );
}
