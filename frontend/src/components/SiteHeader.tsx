"use client";

import HeaderButton from "@/components/HeaderButton";
import { usePathname } from "next/navigation";

const mainNavItems = [
  { label: "Meals", href: "/meals" },
  { label: "Pantry", href: "/pantry" },
  { label: "Prep", href: "/prep" },
];

const rightNavItems = [
  { label: "Login", href: "/login" },
  { label: "Settings", href: "/settings" },
];

export default function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="relative ml-25 w-auto">
      <div className="flex items-center gap-8">
        <h1 className="text-5xl font-bold text-rose-700 font-lobster">
          Meal Sorted
        </h1>

        <nav className="flex gap-1">
          {mainNavItems.map((item) => (
            <HeaderButton
              key={item.href}
              label={item.label}
              href={item.href}
              isActive={pathname === item.href}
            />
          ))}
        </nav>
      </div>

      <nav className="absolute right-0 top-1/2 flex -translate-y-1/2 gap-1">
        {rightNavItems.map((item) => (
          <HeaderButton
            key={item.href}
            label={item.label}
            href={item.href}
            isActive={pathname === item.href}
          />
        ))}
      </nav>
    </header>
  );
}
