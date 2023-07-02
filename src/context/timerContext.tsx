/* The code is creating a TimerContext and a TimerProvider component in a TypeScript React application. */
import React, { createContext, useState, type FunctionComponent } from "react";
import { type TimerContextType, type TimersState } from "~/interfaces";

const TimerContext = createContext<TimerContextType | undefined>(undefined);

interface TimerProviderProps {
  children: React.ReactNode;
}

export const TimerProvider: FunctionComponent<TimerProviderProps> = ({
  children,
}) => {
  const [timers, setTimers] = useState<TimersState>({
    pomodoro: 25,
    shortBreak: 5,
    longBreak: 15,
  });

  return (
    <TimerContext.Provider value={{ timers, setTimers }}>
      {children}
    </TimerContext.Provider>
  );
};

export { TimerContext };
