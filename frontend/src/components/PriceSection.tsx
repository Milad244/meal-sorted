import type { PriceProps } from "./MealCard";

type PriceSectionProps = {
	price: PriceProps;
};

export default function PriceSection({ price }: PriceSectionProps) {
	return <div>Estimated cost: ${price.cost.toFixed(2)}</div>;
}
