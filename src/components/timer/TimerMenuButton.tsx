import React from "react";

interface TimerButtonProps {
  label: string;
  active: boolean;
  onClick: () => void;
}

export const TimerMenuButton: React.FC<TimerButtonProps> = ({
  label,
  active,
  onClick,
}) => {
  return (
    <button
      className={`m-2 rounded-full bg-gray-200 px-10 py-3 font-semibold text-black shadow-md hover:bg-gray-600 ${
        active ? "bg-gray-700" : ""
      }`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};
