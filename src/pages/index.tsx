import { signIn, signOut, useSession } from "next-auth/react";
import Head from "next/head";
import Link from "next/link";
import { Timer } from "~/components/timers/Timer";

export default function Home() {
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
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">

          <h1 className="mb-10 text-5xl font-extrabold tracking-tight text-blue-800 sm:text-[5rem]">
            Neural Clocks
          </h1>
          <div className="flex flex-col items-center gap-2">
            {sessionData && <Timer />}
          </div>
          <Auth />
        </div>
      </main>
    </>
  );
}


const Auth = () => {
  const { data: sessionData } = useSession();

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <button
        className="fixed right-5 top-5 rounded-full bg-blue-500 px-10 py-3 font-semibold text-white shadow-md transition duration-200 ease-in-out hover:bg-blue-600"
        onClick={sessionData ? () => void signOut() : () => void signIn()}
      >
        {sessionData ? "Sign out" : "Sign in"}
      </button>
      <p className="fixed right-5 top-20 text-lg text-gray-600">
        {sessionData && <span>Hola {sessionData.user?.name} !</span>}
      </p>
    </div>
  );
};
