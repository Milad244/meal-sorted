import Link from "next/link"

type HeaderButtonProps = {
  label: string;
  href: string;
  isActive?: boolean;
};

export default function HeaderButton({ label, href, isActive }: HeaderButtonProps) {
  const base = "rounded-lg px-4 py-2 text-xl font-semibold transition";
  const active = "bg-white text-gray-900 shadow-sm";
  const inactive = "text-gray-500 hover:bg-white hover:text-gray-900";

    return (
    <Link
      href={href}
      className={`${base} ${isActive ? active : inactive}`}
    >
      {label}
    </Link>
  );
}
