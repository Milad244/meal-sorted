"use state";
import Link from "next/link";

export default function Meals() {
    return (
        <Link href="/meals/new">
            <button className="text-5xl">
                +
            </button>
        </Link>
    );
}
