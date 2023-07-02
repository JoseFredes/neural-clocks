import { type Dispatch, type SetStateAction } from "react";

export interface TimerState {
  [key: string]: number;
}

export interface TimersState {
  pomodoro: number;
  shortBreak: number;
  longBreak: number;
}

export interface TimerContextType {
  timers: TimersState;
  setTimers: Dispatch<SetStateAction<TimersState>>;
}
