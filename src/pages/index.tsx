import Head from "next/head";
import Pomodoro from "./Pomodoro";

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
      <main className="flex min-h-screen flex-col items-center justify-center bg-gray-100 bg-space">
        <Pomodoro />
      </main>
    </>
  );
}
