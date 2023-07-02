import { useContext } from "react";
import { TimerContext, type TimerContextType } from "../context/timerContext";
export const useTimers = (): TimerContextType => {
  const context = useContext(TimerContext);

  if (context === undefined)
    throw new Error("useTimers must be used within a TimerProvider");

  return context;
};
