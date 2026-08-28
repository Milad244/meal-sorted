export type Section = "recipe" | "nutrition" | "price";

type SelectSectionCardProps = {
    label: string;
    section: Section;
    onSelect: (section: Section) => void;
    isSelected: boolean;
};

export default function SelectSectionCard({ label, section, onSelect, isSelected }: SelectSectionCardProps) {
    return (
        <button
          onClick={() => onSelect(section)}
          type="button"
          className={`flex-1 rounded-lg px-4 py-3 text-sm font-semibold transition
            ${isSelected
              ? "text-gray-900 shadow-sm bg-white hover:bg-gray-100"
              : "text-gray-500 hover:bg-white hover:text-gray-900"
            }
          `}
        >{label}</button>
    );
}
