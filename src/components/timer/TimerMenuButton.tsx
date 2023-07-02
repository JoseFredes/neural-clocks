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
      className={`m-2 rounded-full bg-blue-600 px-10 py-3 font-semibold text-white shadow-md hover:bg-blue-700 ${
        active ? "bg-blue-700" : ""
      }`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};
