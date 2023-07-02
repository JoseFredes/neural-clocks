/**
 * The `LastFiveConfigs` component displays the last five configurations from a list of statistics.
 * @param {Props}  - - `stats`: an array of objects representing statistics data. Each object should
 * have the following properties:
 * @returns The `LastFiveConfigs` component is returning the `LastFiveConfigsTable` component with the
 * following props:
 */
import React, { useMemo } from "react";
import { LastFiveConfigsTable } from "./LastFiveConfigsTable";
import { type Stat } from "~/interfaces";

interface Props {
  stats: Stat[];
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
