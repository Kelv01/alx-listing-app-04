interface PillProps {
  label: string;
  onClick: () => void;
  isActive?: boolean;
}

const Pill: React.FC<PillProps> = ({ label, onClick, isActive = false }) => {
  const activeStyles = "border-green-600 text-green-600 bg-green-50";
  const inactiveStyles =
    "border-gray-300 text-gray-700 hover:border-gray-500 hover:bg-gray-50";

  return (
    <button
      onClick={onClick}
      className={`
        px-4 py-2 border rounded-full text-sm font-medium transition-all
        ${isActive ? activeStyles : inactiveStyles}
      `}
    >
      {label}
    </button>
  );
};
export default Pill;
