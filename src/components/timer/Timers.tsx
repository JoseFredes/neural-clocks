import React, { useState, useEffect } from "react";
import { Timer } from "./Timer";
import { ShortBreakTimer } from "../shortBreak/ShortBreakTimer";
import { LongBreakTimer } from "../longBreak/LongBreakTimer";
import { useTimers } from "~/hooks/useTimers";

interface TimerState {
  [key: string]: number;
}

export const Timers: React.FC = () => {
  const { timers: timerResponse } = useTimers();
  const [timers, setTimers] = useState<TimerState>({
    pomodoro: 25,
    shortBreak: 0,
    longBreak: 0,
  });
  const [activeTimer, setActiveTimer] = useState<keyof TimerState | null>(null);

  useEffect(() => {
    setTimers((prevTimers) => ({
      ...prevTimers,
      ...timerResponse,
    }));
  }, [timerResponse]);

  useEffect(() => {
    setActiveTimer("pomodoro");
  }, []);

  const handleTimerClick = (timerName: keyof TimerState) => {
    setActiveTimer(timerName);
  };

  let activeTimerComponent = null;

  if (activeTimer === "pomodoro") {
    activeTimerComponent = <Timer totalMinutes={timers.pomodoro} />;
  } else if (activeTimer === "shortBreak") {
    activeTimerComponent = <ShortBreakTimer totalMinutes={timers.shortBreak} />;
  } else if (activeTimer === "longBreak") {
    activeTimerComponent = <LongBreakTimer totalMinutes={timers.longBreak} />;
  }

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="mb-4 flex flex-wrap justify-center">
        <button
          className={`m-2 rounded-full bg-blue-600 px-10 py-3 font-semibold text-white shadow-md hover:bg-blue-700 ${
            activeTimer === "pomodoro" ? "bg-blue-700" : ""
          }`}
          onClick={() => handleTimerClick("pomodoro")}
        >
          <text>Pomodoro</text>
        </button>
        <button
          className={`m-2 rounded-full bg-blue-600 px-10 py-3 font-semibold text-white shadow-md hover:bg-blue-700 ${
            activeTimer === "shortBreak" ? "bg-blue-700" : ""
          }`}
          onClick={() => handleTimerClick("shortBreak")}
        >
          <text>Short Break</text>
        </button>
        <button
          className={`m-2 rounded-full bg-blue-600 px-10 py-3 font-semibold text-white shadow-md hover:bg-blue-700 ${
            activeTimer === "longBreak" ? "bg-blue-700" : ""
          }`}
          onClick={() => handleTimerClick("longBreak")}
        >
          <text>Long Break</text>
        </button>
      </div>

      <div className="flex flex-col items-center">{activeTimerComponent}</div>
    </div>
  );
};
