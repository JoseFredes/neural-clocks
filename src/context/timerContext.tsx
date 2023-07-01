import React, {
  createContext,
  useState,
  type FunctionComponent,
  type Dispatch,
  type SetStateAction,
} from "react";

interface TimersState {
  pomodoro: number;
  shortBreak: number;
  longBreak: number;
}

export interface TimerContextType {
  timers: TimersState;
  setTimers: Dispatch<SetStateAction<TimersState>>;
}

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
