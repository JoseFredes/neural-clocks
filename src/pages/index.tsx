import { signIn, signOut, useSession } from "next-auth/react";
import Head from "next/head";
import Link from "next/link";
import { LongBreakTimer } from "~/components/longBreak/LongBreakTimer";
import { ShortBreakTimer } from "~/components/shortBreak/ShortBreakTimer";
import { Timer } from "~/components/timer/Timer";
import { Timers } from "~/components/timer/Timers";

export default function Home() {
  const { data: sessionData } = useSession();
  // add option button to change the total minutes

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
        <div className="container flex flex-col items-center justify-center px-4 py-16 ">
          <Auth />
          <h1 className="mb-10 text-5xl font-extrabold tracking-tight text-blue-800 sm:text-[5rem]">
            Neural Clocks
          </h1>
          {!sessionData && (
            <p className="pb-10">
              Inicia sesión para guardar tus tiempos y poder acceder a ellos
              desde cualquier dispositivo.
            </p>
          )}
          <div className="flex flex-col items-center">
            <Timers />
          </div>
        </div>
      </main>
    </>
  );
}

const Auth: React.FC = () => {
  const { data: sessionData } = useSession();

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <button
        className="fixed right-5 top-5 rounded-full bg-blue-500 px-10 py-3 font-semibold text-white shadow-md transition duration-200 ease-in-out hover:bg-blue-600"
        onClick={sessionData ? () => void signOut() : () => void signIn()}
      >
        {sessionData ? "Salir" : "Iniciar sesión"}
      </button>
      <p className="fixed right-5 top-20 text-lg text-gray-600">
        {sessionData && <span>Hola {sessionData.user?.name} !</span>}
      </p>
    </div>
  );
};
