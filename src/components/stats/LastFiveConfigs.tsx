import React, { useMemo } from "react";
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
  const lastFiveConfigs = useMemo(() => {
    const orderStatsByDate = stats.sort((a, b) => {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    });
    return orderStatsByDate.slice(0, 5);
  }, [stats]);

  const columnNames = useMemo(() => {
    return ["Pomodoro", "Descanso corto", "Descanto largo", "Fecha"];
  }, []);

  return (
    <LastFiveConfigsTable
      title={"Tus últimas cinco configuraciones"}
      columnNames={columnNames}
      data={lastFiveConfigs}
    />
  );
};
