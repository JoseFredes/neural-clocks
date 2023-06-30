import React, { useState } from "react";
import { Timer } from "./Timer";
import { ShortBreakTimer } from "../shortBreak/ShortBreakTimer";
import { LongBreakTimer } from "../longBreak/LongBreakTimer";

interface TimerState {
  [key: string]: number;
}

interface TimerProps {
  totalMinutes?: number;
}

export const Timers: React.FC<TimerProps> = ({
  totalMinutes = 15,
}: TimerProps) => {
  const [timers, setTimers] = useState<TimerState>({
    pomodoro: 25,
    shortBreak: 0,
    longBreak: 0,
  });

  const handleTimerClick = (timerName: string) => {
    const updatedTimers: TimerState = {};
    Object.keys(timers).forEach((key) => {
      updatedTimers[key] = key === timerName ? totalMinutes : 0;
    });
    setTimers(updatedTimers);
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="mb-4 flex flex-wrap justify-center">
        <button
          className="m-2 rounded-full bg-blue-600 px-10 py-3 font-semibold text-white shadow-md hover:bg-blue-700"
          onClick={() => handleTimerClick("pomodoro")}
        >
          <text>Pomodoro</text>
        </button>
        <button
          className="m-2 rounded-full bg-blue-600 px-10 py-3 font-semibold text-white shadow-md hover:bg-blue-700"
          onClick={() => handleTimerClick("shortBreak")}
        >
          <text>Short Break</text>
        </button>
        <button
          className="m-2 rounded-full bg-blue-600 px-10 py-3 font-semibold text-white shadow-md hover:bg-blue-700"
          onClick={() => handleTimerClick("longBreak")}
        >
          <text>Long Break</text>
        </button>
      </div>

      <div className="flex flex-col items-center">
        {timers.pomodoro !== undefined && timers.pomodoro > 0 && (
          <Timer></Timer>
        )}
        {timers.shortBreak !== undefined && timers.shortBreak > 0 && (
          <ShortBreakTimer></ShortBreakTimer>
        )}
        {timers.longBreak !== undefined && timers.longBreak > 0 && (
          <LongBreakTimer></LongBreakTimer>
        )}
      </div>
    </div>
  );
};
