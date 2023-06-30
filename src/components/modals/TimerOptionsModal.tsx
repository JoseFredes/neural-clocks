import { useSession } from "next-auth/react";
import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { api } from "~/utils/api";
interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children?: React.ReactNode;
}

export const TimerOptionsModal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
}) => {
  const { data: sessionData } = useSession();
  const [pomodoroMinutes, setPomodoroMinutes] = useState(25);
  const [longBreakMinutes, setLongBreakMinutes] = useState(15);
  const [shortBreakMinutes, setShortBreakMinutes] = useState(5);
  const { mutate, error } = api.stats.save.useMutation();

  if (!isOpen) return null;

  const handleSaveStats = () => {
    const userId = sessionData?.user.id;
    if (userId)
      mutate({
        date: new Date(),
        pomodoroTime: pomodoroMinutes,
        shortBreakTime: shortBreakMinutes,
        longBreakTime: longBreakMinutes,
        userId: userId,
      });
    if (!error) onClose();
    // add alert success message
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
      <div className="w-96 rounded-lg bg-white">
        <div className="relative">
          <button
            className="absolute right-3 top-3 text-gray-500 hover:text-gray-700"
            onClick={onClose}
          >
            <FaTimes />
          </button>
        </div>
        <div className="p-6">
          <h2 className="mb-4 text-lg font-bold">
            Personalizar minutos de los timers
          </h2>
          <div className="mb-4">
            <label htmlFor="pomodoroInput" className="mr-2">
              Pomodoro:
            </label>
            <input
              id="pomodoroInput"
              type="number"
              min="1"
              value={pomodoroMinutes}
              onChange={(e) => setPomodoroMinutes(Number(e.target.value))}
              className="rounded-md border border-gray-300 px-2 py-1"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="shortBreakInput" className="mr-2">
              Short Break:
            </label>
            <input
              id="shortBreakInput"
              type="number"
              min="1"
              value={shortBreakMinutes}
              onChange={(e) => setShortBreakMinutes(Number(e.target.value))}
              className="rounded-md border border-gray-300 px-2 py-1"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="longBreakInput" className="mr-2">
              Long Break:
            </label>
            <input
              id="longBreakInput"
              type="number"
              min="1"
              value={longBreakMinutes}
              onChange={(e) => setLongBreakMinutes(Number(e.target.value))}
              className="rounded-md border border-gray-300 px-2 py-1"
            />
          </div>
          <button
            className="rounded bg-green-700 px-4 py-2 text-white hover:bg-green-800"
            onClick={handleSaveStats}
          >
            Guardar
          </button>
          {error && (
            <p className="text-red-500">
              Ocurrió un problema al guardar los datos intentalo de nuevo o
              contacta con el administrador
            </p>
          )}
        </div>
      </div>
    </div>
  );
};
