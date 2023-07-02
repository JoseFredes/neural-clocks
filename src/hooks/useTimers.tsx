/**
 * The `useTimers` function is a custom hook that provides access to the `TimerContext` and returns the
 * context value.
 * @returns The useTimers hook is returning the context value from the TimerContext.Provider component.
 * The context value is of type TimerContextType, which is defined in the "~/interfaces" module.
 */
import { useContext } from "react";
import { TimerContext } from "../context/timerContext";
import { type TimerContextType } from "~/interfaces";

export const useTimers = (): TimerContextType => {
  const context = useContext(TimerContext);

  if (context === undefined)
    throw new Error("useTimers must be used within a TimerProvider");

  return context;
};
