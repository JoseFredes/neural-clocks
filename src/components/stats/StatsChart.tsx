import { Chart as ChartJS, registerables } from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(...registerables);

interface Props {
  stats: stat[];
}

interface stat {
  pomodoroTime: number;
  shortBreakTime: number;
  longBreakTime: number;
}

export const StatsChart = ({ stats }: Props) => {
  const statsResponses = {
    pomodoroTime: Math.max(...stats.map((stat) => stat.pomodoroTime)),
    shortBreakTime: Math.max(...stats.map((stat) => stat.shortBreakTime)),
    longBreakTime: Math.max(...stats.map((stat) => stat.longBreakTime)),
  };

  const data = {
    labels: ["Pomodoro Time", "Descanso corto Time", "Descanso largo Time"],
    datasets: [
      {
        label: "Tiempo máximo",
        data: [
          statsResponses.pomodoroTime,
          statsResponses.shortBreakTime,
          statsResponses.longBreakTime,
        ],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <>
      <h2 className="md:text-md flex items-center justify-center pb-2 text-xl font-semibold tracking-tight text-black sm:text-sm lg:text-lg xl:text-xl 2xl:text-2xl">
        El mayor tiempo que has usado cada timer
      </h2>
      <p className="md:text-md text-md flex items-center justify-center pb-2 tracking-tight text-black sm:text-sm lg:text-lg xl:text-xl 2xl:text-2xl">
        Este es el máximo de tiempo que has usado cada timer desde que empezaste
        a usar la aplicación.
      </p>
      <Bar data={data} />
    </>
  );
};
