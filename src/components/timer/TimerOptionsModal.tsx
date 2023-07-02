import { useSession } from "next-auth/react";
import React, { useCallback, useState } from "react";
import { FaTimes } from "react-icons/fa";
import { api } from "~/utils/api";
import { InputField } from "../inputs/InputField";
import { useTimers } from "~/hooks/useTimers";

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
  const { mutate } = api.stats.saveStats.useMutation();
  const { setTimers } = useTimers();

  const handleIncreaseTimers = useCallback(() => {
    setTimers({
      pomodoro: pomodoroMinutes,
      shortBreak: shortBreakMinutes,
      longBreak: longBreakMinutes,
    });
  }, [setTimers, pomodoroMinutes, shortBreakMinutes, longBreakMinutes]);

  const handleSaveStats = () => {
    const { user } = sessionData ?? {};
    const userId = user?.id;
    try {
      handleIncreaseTimers();
      if (userId) {
        mutate({
          date: new Date(),
          pomodoroTime: pomodoroMinutes,
          shortBreakTime: shortBreakMinutes,
          longBreakTime: longBreakMinutes,
          userId: userId,
        });
      }
      onClose();
    } catch (error) {
      console.log(error);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
      <div className="mx-auto w-full rounded-lg bg-white px-5 py-5 shadow-lg sm:max-w-md sm:px-10">
        <div className="flex justify-end">
          <button
            className="text-gray-600 transition duration-150 hover:text-gray-700"
            onClick={onClose}
          >
            <FaTimes />
          </button>
        </div>
        <div className="work-sans mt-4 justify-center sm:flex sm:items-center">
          <div className="mt-4">
            <h2 className="mb-6 justify-center text-center text-2xl font-semibold text-indigo-900">
              Configuración de los timers 🍅
            </h2>
            <div className="mx-auto items-center justify-center space-y-4 text-center sm:w-64">
              <InputField
                id="pomodoroInput"
                label="Pomodoro"
                value={pomodoroMinutes}
                onChange={setPomodoroMinutes}
              />
              <InputField
                id="shortBreakInput"
                label="Short Break"
                value={shortBreakMinutes}
                onChange={setShortBreakMinutes}
              />
              <InputField
                id="longBreakInput"
                label="Long Break"
                value={longBreakMinutes}
                onChange={setLongBreakMinutes}
              />
            </div>
            <button
              className="focus:shadow-outline mx-auto mt-6 block w-full rounded bg-indigo-700 px-4 py-2 font-semibold text-white hover:bg-indigo-900 focus:outline-none sm:w-auto"
              onClick={handleSaveStats}
            >
              Guardar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
