import React from "react";
import { FaPlay, FaPause, FaRedo } from "react-icons/fa";

interface props {
  isActive: boolean;
  handleResetTimer: () => void;
  handlePauseTimer: () => void;
  handleStartTimer: () => void;
}

export const TimerActionsButtons: React.FC<props> = ({
  isActive,
  handlePauseTimer,
  handleResetTimer,
  handleStartTimer,
}: props) => {
  return (
    <div className="mt-4 flex space-x-4">
      {!isActive && (
        <button
          className="rounded px-4 py-2 text-black hover:text-slate-800"
          onClick={handleStartTimer}
        >
          <FaPlay className="opacity-50" />
        </button>
      )}
      <button
        className="rounded px-4 py-2 text-black hover:text-slate-800"
        onClick={handlePauseTimer}
      >
        <FaPause className="opacity-50" />
      </button>
      <button
        className="rounded px-4 py-2 text-black hover:text-slate-800"
        onClick={handleResetTimer}
      >
        <FaRedo className="opacity-50" />
      </button>
    </div>
  );
};
