import React from "react";
import { LastFiveConfigsTable } from "./LastFiveConfigsTable";

interface Props {
  stats: stat[];
}

interface stat {
  pomodoroTime: number;
  shortBreakTime: number;
  longBreakTime: number;
  date: string;
}

export const LastFiveConfigs: React.FC<Props> = ({ stats }: Props) => {
  const getlastfiveConfigs = () => {
    const orderStatsByDate = stats.sort((a, b) => {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    });
    const lastFiveConfigs = orderStatsByDate.slice(0, 5);
    return lastFiveConfigs;
  };

  const columnNames = ["Pomodoro", "Descanso corto", "Descanto largo", "Fecha"];
  return (
    <LastFiveConfigsTable
      title={"Tus ultimas 5 configuraciones de Timers!"}
      columnNames={columnNames}
      data={getlastfiveConfigs()}
    />
  );
};
