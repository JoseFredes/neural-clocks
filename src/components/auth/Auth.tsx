import { signIn, signOut, useSession } from "next-auth/react";

export const Auth: React.FC = () => {
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
