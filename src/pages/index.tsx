import { signIn, signOut, useSession } from "next-auth/react";
import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import { FaChartBar, FaSlidersH } from "react-icons/fa";
import { StatsModal } from "~/components/stats/StatsModal";
import { TimerOptionsModal } from "~/components/timer/TimerOptionsModal";

import { Timers } from "~/components/timer/Timers";
import { TimerContext } from "~/context/timerContext";
import { api } from "~/utils/api";

interface stat {
  date: string | Date;
  id: number;
  longBreakTime: number;
  pomodoroTime: number;
  shortBreakTime: number;
  userId: string;
}

export default function Home() {
  const { data: sessionData } = useSession();
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenStats, setIsOpenStats] = useState(false);
  const [timers, setTimers] = useState({
    pomodoro: 25,
    shortBreak: 5,
    longBreak: 15,
  });

  const {
    data: stats,
    error,
    isLoading,
  } = api.stats.getStatsByUser.useQuery({
    userId: sessionData?.user.id || "",
  });

  const statsFormatted = stats?.map((stat) => {
    return {
      pomodoroTime: stat.pomodoroTime,
      shortBreakTime: stat.shortBreakTime,
      longBreakTime: stat.longBreakTime,
      date: new Date(stat.date).toLocaleDateString(),
    };
  });
  return (
    <>
      <Head>
        <title>Neural clocks</title>
        <meta
          name="description"
          content="Neural clocks created in create-t3-app"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gray-100">
        <div className="container flex flex-col items-center justify-center px-4 py-16">
          <h1 className="mb-10 text-5xl font-extrabold tracking-tight text-blue-800 sm:text-6xl md:text-7xl">
            Neural Clocks
          </h1>

          {!sessionData && (
            <p className="pb-10 text-center">
              Inicia sesión para guardar tus tiempos y poder acceder a ellos
              desde cualquier dispositivo.
            </p>
          )}
          <Auth />
          <div className="absolute left-5 top-5 flex flex-row items-center justify-center gap-4">
            <button onClick={() => setIsOpen(true)}>
              <FaSlidersH className="px-2 text-5xl text-black hover:text-opacity-50" />
            </button>
            <button onClick={() => setIsOpenStats(true)}>
              <FaChartBar className="px-2 text-5xl text-black hover:text-opacity-50" />
            </button>
          </div>

          <StatsModal
            isOpen={isOpenStats}
            onClose={() => setIsOpenStats(false)}
            stats={statsFormatted ?? []}
          />

          <TimerContext.Provider value={{ timers, setTimers }}>
            <div className="flex flex-col items-center">
              <TimerOptionsModal
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
              ></TimerOptionsModal>
              <Timers />
            </div>
          </TimerContext.Provider>
        </div>
      </main>
    </>
  );
}

const Auth: React.FC = () => {
  const { data: sessionData } = useSession();
  return (
    <div className="absolute right-5 top-5 flex flex-col items-center justify-center gap-4">
      <button
        className="rounded-full bg-blue-500 px-6 py-2 text-sm font-semibold text-white shadow-md transition duration-200 ease-in-out hover:bg-blue-600"
        onClick={sessionData ? () => void signOut() : () => void signIn()}
      >
        {sessionData ? "Salir" : "Iniciar sesión"}
      </button>
    </div>
  );
};
