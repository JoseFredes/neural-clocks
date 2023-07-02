/**
 * The `LastFiveConfigsTable` component is a React functional component that renders a table with data
 * from an array of `Stat` objects.
 * @param {Props}  - 1. `title` (string): The title of the table.
 * @returns The LastFiveConfigsTable component is being returned.
 */
import React from "react";
import { type Stat } from "~/interfaces";
interface Props {
  title: string;
  columnNames: string[];
  data: Stat[];
}

export const LastFiveConfigsTable: React.FC<Props> = ({
  title,
  data,
  columnNames,
}: Props) => {
  return (
    <div className="pt-5">
      <h2 className="pb-2 text-center text-lg font-semibold text-gray-700 lg:text-xl">
        {title}
      </h2>
      <div className="overflow-x-auto">
        <div className="shadow-md">
          <table className="min-w-full divide-y divide-gray-200 border border-gray-200 bg-white">
            <thead className="bg-gray-100">
              <tr>
                {columnNames.map((columnName, index) => (
                  <th
                    key={index}
                    className="px-6 py-3 text-left text-sm font-semibold uppercase tracking-wider text-gray-600"
                  >
                    {columnName}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data.map((stat: Stat, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm text-gray-700">
                    {stat.pomodoroTime} minutos
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700">
                    {stat.shortBreakTime} minutos
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700">
                    {stat.longBreakTime} minutos
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700">
                    {stat.date}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
