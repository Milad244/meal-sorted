import Link from "next/link"

type HeaderButtonProps = {
  label: string;
  href: string;
};

export default function HeaderButton({ label, href }: HeaderButtonProps) {
    return (
    <Link
      href={href}
      className="rounded-md px-3 py-2 text-xl font-medium text-gray-700 transition hover:bg-gray-100 hover:text-gray-950"
    >
      {label}
    </Link>
  );
}
