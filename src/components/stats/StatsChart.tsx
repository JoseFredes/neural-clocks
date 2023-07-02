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

export const StatsChart: React.FC<Props> = ({ stats }: Props) => {
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
          "rgba(74, 148, 228, 0.2)",
          "rgba(115, 191, 68, 0.2)",
          "rgba(247, 163, 92, 0.2)",
        ],
        borderColor: [
          "rgba(74, 148, 228, 1)",
          "rgba(115, 191, 68, 1)",
          "rgba(247, 163, 92, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div>
      <h2 className="mb-2 text-center text-2xl font-semibold text-gray-800">
        El mayor tiempo utilizado en cada temporizador
      </h2>
      <p className="text-md mb-4 text-center text-gray-800">
        Este es el máximo tiempo que has utilizado en cada temporizador desde
        que comenzaste a usar la aplicación.
      </p>
      <Bar
        data={data}
        options={{
          scales: {
            y: {
              beginAtZero: true,
              max:
                Math.max(
                  statsResponses.pomodoroTime,
                  statsResponses.shortBreakTime,
                  statsResponses.longBreakTime
                ) + 5,
              ticks: {
                stepSize: 5,
              },
            },
          },
          plugins: {
            legend: {
              display: true,
              labels: {
                font: {
                  size: 14,
                },
              },
            },
          },
        }}
      />
    </div>
  );
};
