import React from "react";

interface Props {
  title: string;
  columnNames: string[];
  data: stat[];
}

interface stat {
  pomodoroTime: number;
  shortBreakTime: number;
  longBreakTime: number;
  date: string;
}

export const LastFiveConfigsTable: React.FC<Props> = ({
  title,
  data,
  columnNames,
}: Props) => {
  return (
    <div className="pt-5">
      <h2 className="md:text-md flex items-center justify-center pb-2 text-xl font-semibold tracking-tight text-black sm:text-sm lg:text-lg xl:text-xl 2xl:text-2xl">
        {title}
      </h2>
      <div className="w-full overflow-x-auto">
        <table className="min-w-full table-auto divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              {columnNames.map((columnName, index) => (
                <th
                  key={index}
                  className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
                >
                  {columnName}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 bg-white">
            {data.map((stat: stat, index) => (
              <tr key={index} className="hover:bg-gray-100">
                <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
                  {stat.pomodoroTime} minutos
                </td>
                <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
                  {stat.shortBreakTime} minutos
                </td>
                <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
                  {stat.longBreakTime} minutos
                </td>
                <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
                  {stat.date}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
