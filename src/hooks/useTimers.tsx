import { useContext } from "react";
import { TimerContext } from "../context/timerContext";
import { type TimerContextType } from "~/interfaces";

export const useTimers = (): TimerContextType => {
  const context = useContext(TimerContext);

  if (context === undefined)
    throw new Error("useTimers must be used within a TimerProvider");

  return context;
};
