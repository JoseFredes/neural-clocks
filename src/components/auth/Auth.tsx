/**
 * The Auth component is a React functional component that handles user authentication using NextAuth.
 * @returns The Auth component is returning a div element that contains a button and a conditional div.
 * The button is used for signing in or signing out depending on the session data. If there is session
 * data, the button will display "Salir" (Spanish for "Logout"), and if there is no session data, the
 * button will display "Iniciar sesión" (Spanish for "Login"). If there is session data
 */

import { signIn, signOut, useSession } from "next-auth/react";

export const Auth: React.FC = () => {
  const { data: sessionData } = useSession();
  return (
    <div className="absolute right-5 top-5 flex flex-col items-center justify-center gap-4">
      <button
        className="rounded-full bg-gray-200 px-6 py-2 text-sm font-semibold text-black shadow-md transition duration-200 ease-in-out hover:bg-gray-600"
        onClick={sessionData ? () => void signOut() : () => void signIn()}
      >
        {sessionData ? "Salir" : "Iniciar sesión"}
      </button>
      {sessionData && (
        <div className="mt-2 hidden text-white sm:block">
          Hola {sessionData.user.name}
        </div>
      )}
    </div>
  );
};
