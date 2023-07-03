import React, { useState, useEffect } from "react";
import { Timer } from "./Timer";
import { ShortBreakTimer } from "../shortBreak/ShortBreakTimer";
import { LongBreakTimer } from "../longBreak/LongBreakTimer";
import { useTimers } from "~/hooks/useTimers";
import { TimerMenuButton } from "./TimerMenuButton";
import { type TimerState } from "~/interfaces";

export const Timers: React.FC = () => {
  const { timers: timerResponse } = useTimers();
  const [activeTimer, setActiveTimer] = useState<keyof TimerState | null>(null);
  const [timers, setTimers] = useState<TimerState>({
    pomodoro: 25,
    shortBreak: 0,
    longBreak: 0,
  });

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

  if (activeTimer === "pomodoro")
    activeTimerComponent = <Timer totalMinutes={timers.pomodoro} />;
  if (activeTimer === "shortBreak")
    activeTimerComponent = <ShortBreakTimer totalMinutes={timers.shortBreak} />;
  if (activeTimer === "longBreak")
    activeTimerComponent = <LongBreakTimer totalMinutes={timers.longBreak} />;

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="mb-4 flex flex-wrap justify-center">
        <div className="flex flex-wrap justify-center">
          <TimerMenuButton
            label="Pomodoro"
            active={activeTimer === "pomodoro"}
            onClick={() => handleTimerClick("pomodoro")}
          />
          <TimerMenuButton
            label="Descanso Corto"
            active={activeTimer === "shortBreak"}
            onClick={() => handleTimerClick("shortBreak")}
          />
          <TimerMenuButton
            label="Descanso Largo"
            active={activeTimer === "longBreak"}
            onClick={() => handleTimerClick("longBreak")}
          />
        </div>
      </div>
      <div className="flex flex-col items-center">{activeTimerComponent}</div>
    </div>
  );
};
