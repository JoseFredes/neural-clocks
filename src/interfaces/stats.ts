export interface Stat {
  pomodoroTime: number;
  shortBreakTime: number;
  longBreakTime: number;
  date: string;
}

export type StatsQueryResult = {
  data?: Stat[];
};
