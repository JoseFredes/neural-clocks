import { useSession } from "next-auth/react";
import { useState } from "react";
import { FaChartBar, FaSlidersH } from "react-icons/fa";
import { Auth } from "~/components/auth/Auth";
import { StatsModal } from "~/components/stats/StatsModal";
import { TimerOptionsModal } from "~/components/timer/TimerOptionsModal";

import { Timers } from "~/components/timer/Timers";
import { TimerContext } from "~/context/timerContext";
import { api } from "~/utils/api";

interface stat {
  pomodoroTime: number;
  shortBreakTime: number;
  longBreakTime: number;
  date: string;
}

export const Pomodoro = () => {
  const { data: sessionData } = useSession();
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenStats, setIsOpenStats] = useState(false);
  const [timers, setTimers] = useState({
    pomodoro: 25,
    shortBreak: 5,
    longBreak: 15,
  });

  let statsFormatted: stat[] = [];

  if (sessionData) {
    const { data: stats } = api.stats.getStatsByUser.useQuery({
      userId: sessionData?.user.id || "",
    });

    if (stats) {
      statsFormatted = stats?.map((stat) => ({
        pomodoroTime: stat.pomodoroTime,
        shortBreakTime: stat.shortBreakTime,
        longBreakTime: stat.longBreakTime,
        date: new Date(stat.date).toLocaleDateString(),
      }));
    }
  }

  return (
    <div className="container flex flex-col items-center justify-center px-4 py-16">
      <h1 className="mb-10 text-5xl font-extrabold tracking-tight text-blue-800 sm:text-6xl md:text-7xl">
        Neural Clocks
      </h1>
      {!sessionData && (
        <p className="pb-10 text-center">
          Inicia sesión para guardar tus tiempos y poder acceder a ellos desde
          cualquier dispositivo.
        </p>
      )}
      <div className="absolute left-5 top-5 flex flex-row items-center justify-center gap-4">
        <button onClick={() => setIsOpen(true)}>
          <FaSlidersH className="px-2 text-5xl text-black hover:text-opacity-50" />
        </button>
        {sessionData && (
          <button onClick={() => setIsOpenStats(true)}>
            <FaChartBar className="px-2 text-5xl text-black hover:text-opacity-50" />
          </button>
        )}
      </div>
      <StatsModal
        isOpen={isOpenStats}
        onClose={() => setIsOpenStats(false)}
        stats={statsFormatted ?? []}
      />
      <TimerContext.Provider value={{ timers, setTimers }}>
        <div className="flex flex-col items-center">
          <TimerOptionsModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
          <Timers />
        </div>
      </TimerContext.Provider>
      <Auth />
    </div>
  );
};
