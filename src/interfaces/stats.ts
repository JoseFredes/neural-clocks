export interface Stat {
  pomodoroTime: number;
  shortBreakTime: number;
  longBreakTime: number;
  date: string;
}

export type StatsQueryResult = {
  data?: Stat[];
};


export interface StatsResponse {
  id: string;
  date: Date;
  pomodoroTime: number;
  shortBreakTime: number;
  longBreakTime: number;
  userId: string;
}

