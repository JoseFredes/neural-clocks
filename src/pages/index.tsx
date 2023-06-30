import { signIn, signOut, useSession } from "next-auth/react";
import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import { TimerOptionsModal } from "~/components/modals/TimerOptionsModal";
import { Modal } from "~/components/modals/modal";
import { Timers } from "~/components/timer/Timers";

export default function Home() {
  const { data: sessionData } = useSession();
  // add option button to change the total minutes

  const [isOpen, setIsOpen] = useState(false);

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

          <div className="flex flex-col items-center">
            <button onClick={() => setIsOpen(true)}>Abrir Modal</button>
            <TimerOptionsModal
              isOpen={isOpen}
              onClose={() => setIsOpen(false)}
            ></TimerOptionsModal>

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
