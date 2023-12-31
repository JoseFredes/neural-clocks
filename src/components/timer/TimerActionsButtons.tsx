/* The code is a TypeScript React component called `TimerActionsButtons`. */

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
    <div className="z-0 mt-4 flex space-x-4">
      {!isActive && (
        <button
          className="rounded px-4 py-2 text-white hover:text-gray-100"
          onClick={handleStartTimer}
        >
          <FaPlay className="opacity-90" />
        </button>
      )}
      <button
        className="rounded px-4 py-2 text-white hover:text-gray-100"
        onClick={handlePauseTimer}
      >
        <FaPause className="opacity-90" />
      </button>
      <button
        className="rounded px-4 py-2 text-white hover:text-gray-100"
        onClick={handleResetTimer}
      >
        <FaRedo className="opacity-90" />
      </button>
    </div>
  );
};
